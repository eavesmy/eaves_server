package handler

import (
	"../cos"
	"../manager"
	"fmt"
	"github.com/teambition/gear"
	"github.com/zemirco/couchdb"
	"time"
)

type articleTemp struct {
	Title   string `json:"title"`
	Contain string `json:"contain"`
	Author  string `json:"author"`
	Tags    string `json:"tags"`
}

type baseData struct {
	couchdb.Document
	articleTemp
}

func (b *articleTemp) Validate() error {
	return nil
}

func Blog_Index(ctx *gear.Context) error {
	articles := manager.GetDocs()

	return ctx.JSON(200, articles)
}

func Blog_One(ctx *gear.Context) error {
	article := &articleTemp{}

	return ctx.JSON(200, article)
}

func Blog_Publish(ctx *gear.Context) error {

	article := &baseData{}

	ctx.ParseBody(article)

	timeTamp := time.Now().Unix()

	_id := fmt.Sprintf("%d", timeTamp)

	article.Document.ID = _id //timeTamp
	article.Author = "Eaves"

	db := manager.DbClient(cos.Get("DB_ARTICLE"))

	dbRep, _ := db.Post(article)

	if dbRep.Ok {
		return ctx.HTML(200, "ok")
	} else {
		return ctx.HTML(500, "error")
	}
}
