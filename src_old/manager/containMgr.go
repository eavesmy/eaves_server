package manager

import (
	"github.com/zemirco/couchdb"
)

type Article struct {
	Id      string `json:"id"`
	Title   string `json:"title"`
	Contain string `json:"contain"`
	Tags    string `json:"tags"`
	Time    string `json:"time"`
}

var HomePagesStorage []Article

func GetHomePages() []Article {
	return HomePagesStorage
}

func UpdateArticles() {

	db := DBConnect("article")

	INCLUDEDOC := true
	//	var includeDocs *bool

	//	includeDocs = &_bool

	queryParms := &couchdb.QueryParameters{
		IncludeDocs: &INCLUDEDOC,
	}

	viewRep, _ := db.AllDocs(queryParms)

	articles := viewRep.Rows

	for i, _ := range articles {

		_opt := articles[i].Doc

		article := Article{
			Id:      _opt["_id"].(string),
			Title:   _opt["title"].(string),
			Contain: _opt["contain"].(string),
			Tags:    _opt["tags"].(string),
		}

		HomePagesStorage = append(HomePagesStorage, article)

	}
}
