package manager

import (
	"../cos"
	"../github.com/teambition/gear"
	"github.com/zemirco/couchdb"
	"net/http"
)

type ArticleTemp struct {
	Id      int64  `json:"_id"`
	Title   string `json:"title"`
	Contain string `json:"contain"`
	Author  string `json:"author"`
	Tags    string `json:"tags"`
}

type BaseData struct {
	couchdb.Document
	ArticleTemp
}

func Routes() *gear.Router {
	router := gear.NewRouter()

	router.Get("/:name*", handler)

	router.Post("/blog/recommend", recommendation)
	router.Post("/blog/:ID", getOneBlog)

	router.Post("/editor/push", updateOneBlog)

	return router
}

func handler(ctx *gear.Context) error {

	ctx.Res.Push(cos.Get("WEBSITE_CSS"), &http.PushOptions{Method: "Get"})
	ctx.Res.Push(cos.Get("WEBSITE_JS"), &http.PushOptions{Method: "Get"})

	return ctx.HTML(200, string(ReadFile(cos.Get("WEBSITE_HTML"))))
}

func recommendation(ctx *gear.Context) error {
	articles := GetRecommendation()

	return ctx.JSON(200, articles)
}

func getOneBlog(ctx *gear.Context) error {

	return ctx.JSON(200, "")
}

func updateOneBlog(ctx *gear.Context) error {

	article := &BaseData{}

	ctx.ParseBody(article)

	result := AddOne(article)

	if result {
		return ctx.HTML(200, "ok")
	} else {
		return ctx.HTML(500, "error")
	}

}
