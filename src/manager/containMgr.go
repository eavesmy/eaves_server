package manager

import (
	"fmt"
)

type Article struct {
	Id      string
	Title   string
	Contain string
	Time    string
}

var HomePagesStorage []Article

func GetHomePages() []Article {
	return HomePagesStorage
}

func UpdateArticles() {
	db := DBConnect("article")
	articles, _ := db.AllDesignDocs(AllDesignDocs)

	fmt.Println(articles)
}
