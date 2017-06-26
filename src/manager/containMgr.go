package manager

import (
	"../cos"
	"github.com/robfig/cron"
	"github.com/zemirco/couchdb"
)

type Article struct {
	Id    string `json:"id"`
	Title string `json:"title"`
	Tags  string `json:"tags"`
	Time  string `json:"time"`
}

var Recommendation []Article

func update() {
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
			Id:    _opt["id"].(string),
			Title: _opt["title"].(string),
			Tags:  _opt["tags"].(string),
		}
		Recommendation = append(Recommendation, article)
	}
}

func GetRecommendation() []Article {
	return Recommendation
}

func Init() {
	task := cron.New()

	task.AddFunc("@hourly", update)
}
