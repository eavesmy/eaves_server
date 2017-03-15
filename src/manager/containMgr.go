package manager

import (
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

func UpdateAtricles() {

}
