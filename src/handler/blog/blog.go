package blog

import(
	"fmt"
	"github.com/teambition/gear"
	"github.com/zemirco/couchdb"
)

type articleTemp struct{
	Title 	string `json:"title"`
	Contain string `json:"contain"`
	TimeTmp string `json:"time"`
	Author string `json:"author"`
}

type baseData struct {
	couchdb.Document
	article
}

func Update(ctx *gear.Context) error{
	_,err :=fmt.Println(ctx)

	return err
}

func Publish(ctx *gear.Context)error{
	article := articleTemp&{}

	ctx.ParseBody(article)

	fmt.Println(article)


	return ctx.HTML(200,"ok")
}
