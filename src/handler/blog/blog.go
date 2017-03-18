package blog

import (
	"fmt"
	"github.com/teambition/gear"
	"github.com/zemirco/couchdb"
	"manager"
	"tools"
)

type articleTemp struct {
	Id      int64  `json:"_id"`
	Title   string `json:"title"`
	Contain string `json:"contain"`
	Author  string `json:"author"`
	Tags    string `json:"tags"`
}

type baseData struct {
	couchdb.Document
	articleTemp
}

func Update(ctx *gear.Context) error {
	_, err := fmt.Println(ctx)

	return err
}

func (b *articleTemp) Validate() error {
	return nil
}

func Publish(ctx *gear.Context) error {

	article := &baseData{}

	ctx.ParseBody(article)

	timeTamp := tools.TimeTemp()

	article.Id = timeTamp
	article.Author = "eaves"

	db := manager.DBConnect("article")

	dbRep, _ := db.Post(article)

	if dbRep.Ok == true {
		return ctx.HTML(200, "ok")
	} else {
		return ctx.HTML(501, "failed")
	}

}
