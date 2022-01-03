package main

import (
	"fmt"
	"log"

	"example.com/greetings"
)

func main() {
	log.SetPrefix("greetings:")
	log.SetFlags(0)

	// A slice of names
	names := []string{"Gladys", "Samantha", "Darrin"}

	message, err := greetings.Hellos(names)
	if err != nil {
		log.Fatal(err)
	}

	// fmt.Println(message)

	for _, value := range message {
		fmt.Println(value)
	}
}
