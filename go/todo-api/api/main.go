package main

import (
	"context"
	"net/http"
	"os"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/jackc/pgx/v4"
)

type ErrorResponse struct {
	Message string
}

type CreateTodoRequest struct {
	Title       string
	Description string
}

type TodoResponse struct {
	Id          int
	Title       string
	Description string
	RecordedAt  time.Time
	Completed   bool
}

type TodoDao struct {
	Id          int
	UserId      int
	Title       string
	Description string
	RecordedAt  time.Time
	Completed   bool
}

var connectionString string = os.Getenv("conn")

func getTodos(c *gin.Context) {
	conn, err := pgx.Connect(context.Background(), connectionString)

	if err != nil {
		c.IndentedJSON(http.StatusInternalServerError, ErrorResponse{Message: err.Error()})
		return
	}

	defer conn.Close(context.Background())

	rows, err := conn.Query(context.Background(), "select Id, Title, Description, RecordedAt, Completed from Todos")

	if err != nil {
		c.IndentedJSON(http.StatusInternalServerError, ErrorResponse{Message: err.Error()})
		return
	}

	defer rows.Close()

	var todos []TodoResponse
	for rows.Next() {
		var t TodoResponse
		err := rows.Scan(&t.Id, &t.Title, &t.Description, &t.RecordedAt, &t.Completed)

		if err != nil {
			c.IndentedJSON(http.StatusInternalServerError, ErrorResponse{Message: err.Error()})
			return
		}

		todos = append(todos, t)
	}

	if err != nil {
		c.IndentedJSON(http.StatusInternalServerError, ErrorResponse{Message: err.Error()})
		return
	}

	c.IndentedJSON(http.StatusOK, todos)
}

func addTodo(c *gin.Context) {
	var newTodo CreateTodoRequest

	if err := c.BindJSON(&newTodo); err != nil {
		return
	}

	conn, err := pgx.Connect(context.Background(), connectionString)

	if err != nil {
		c.IndentedJSON(http.StatusInternalServerError, ErrorResponse{Message: err.Error()})
		return
	}

	defer conn.Close(context.Background())

	_, err = conn.Exec(context.Background(), "insert into Todos(UserId, Title, Description) values($1, $2, $3)", 1, newTodo.Title, newTodo.Description)

	if err != nil {
		c.IndentedJSON(http.StatusInternalServerError, ErrorResponse{Message: err.Error()})
		return
	}

	c.Status(http.StatusCreated)
}

func healthCheck(c *gin.Context) {
	c.String(http.StatusOK, "OK")

	return
}

func main() {
	router := gin.Default()

	router.GET("/diag/health", healthCheck)
	router.GET("/todos", getTodos)
	router.POST("/todos", addTodo)

	router.Run("localhost:8080")
}
