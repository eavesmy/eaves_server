package manager

import (
	"../cos"
	// "github.com/robfig/cron"
	"github.com/zemirco/couchdb"
)

type CouchDoc interface {
	GetID() string
	GetRev() string
}

type Article struct {
	Id    string `json:"id"`
	Title string `json:"title"`
	Tags  string `json:"tags"`
}

type ArticleFull struct {
	couchdb.Document
	Contain string `json:"contain"`
	Tags    string `json:"tags"`
	Author  string `json:"author"`
	Title   string `json:"title"`
	Time    string `json:"time"`
}

func GetDocs() []Article {

	var Recommendation []Article

	db := DbClient(cos.Get("DB_ARTICLE"))

	INCLUDE := true

	queryParmas := &couchdb.QueryParameters{
		IncludeDocs: &INCLUDE,
	}

	viewRep, _ := db.AllDocs(queryParmas)

	articles := viewRep.Rows

	for i, _ := range articles {
		_opt := articles[i].Doc

		article := Article{
			Id:    _opt["_id"].(string),
			Title: _opt["title"].(string),
			Tags:  _opt["tags"].(string),
		}
		Recommendation = append(Recommendation, article)
	}

	return Recommendation
}

func GetOne(id string) *ArticleFull {
	db := DbClient(cos.Get("DB_ARTICLE"))

	doc := &ArticleFull{}

	db.Get(doc, id)

	return doc
}

func DeleteOne(id string) bool {
	doc := &ArticleFull{}

	doc.Document.ID = id

	db := DbClient(cos.Get("DB_ARTICLE"))

	err := db.Get(doc, id)

	if err != nil {
		return false
	}

	rep, _ := db.Delete(doc)

	return rep.Ok
}
