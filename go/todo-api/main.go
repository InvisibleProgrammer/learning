package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type todo struct {
	Id          int
	Title       string
	Description string
	Completed   bool
}

var todos = []todo{}

func getTodos(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, todos)
}

func addTodo(c *gin.Context) {
	var newTodo todo

	if err := c.BindJSON(&newTodo); err != nil {
		return
	}

	todos = append(todos, newTodo)
	c.IndentedJSON(http.StatusCreated, newTodo)
}

func main() {
	router := gin.Default()

	router.GET("/todos", getTodos)
	router.POST("/todos", addTodo)

	router.Run("localhost:8080")
}
