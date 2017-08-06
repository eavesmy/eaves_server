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
	Id      string `json:"id"`
	Time    string `json:"time"`
}

type baseData struct {
	couchdb.Document
	articleTemp
}

type articleId struct {
	Id string `json:"_id"`
}

func (b *articleTemp) Validate() error {
	return nil
}

func (b *articleId) Validate() error {
	return nil
}

func Blog_Index(ctx *gear.Context) error {

	articles := manager.GetDocs()

	return ctx.JSON(200, articles)
}

func Blog_One(ctx *gear.Context) error {

	struct_id := &articleId{}

	ctx.ParseBody(struct_id)

	article := manager.GetOne(struct_id.Id)

	return ctx.JSON(200, article)
}

func Blog_Publish(ctx *gear.Context) error {

	isUser := manager.CookieCheck(ctx)

	fmt.Println("===================", isUser)

	if !isUser {
		return ctx.HTML(403, "forbidden")
	}

	doc := &baseData{}

	ctx.ParseBody(doc)

	doc.Document.ID = doc.Id

	doc.Time = time.Now().String()

	isExists := manager.GetOne(doc.Document.GetID())

	db := manager.DbClient(cos.Get("DB_ARTICLE"))

	if isExists.Document.GetID() != "" {
		doc.Document = isExists.Document
	}

	dbRep, _ := db.Post(doc)

	if dbRep.Ok {
		return ctx.HTML(200, "ok")
	} else {
		return ctx.HTML(501, "error")
	}
}

func Blog_Delete(ctx *gear.Context) error {

	isUser := manager.CookieCheck(ctx)

	if !isUser {
		return ctx.HTML(403, "forbidden")
	}

	struct_id := &articleId{}

	ctx.ParseBody(struct_id)

	_id := struct_id.Id

	deleteSuccss := manager.DeleteOne(_id)

	if deleteSuccss {
		return ctx.HTML(200, "ok")
	} else {
		return ctx.HTML(403, "error")
	}
}
