package manager

import (
	"../cos"
	// "github.com/robfig/cron"
	"github.com/zemirco/couchdb"
)

type Article struct {
	Id    string `json:"id"`
	Title string `json:"title"`
	Tags  string `json:"tags"`
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
