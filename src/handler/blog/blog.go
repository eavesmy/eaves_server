package blog

import(
	"fmt"
	"github.com/teambition/gear"
	"manager"
)

type baseData struct {
	couchdb.Document
	_id     string `json:"_id"`
	title   string `json:"title"`
	contain string `json:"contain"`
	timeTmp string `json:"time"`
	author  string `json:author`
}

func Update(ctx *gear.Context) error{
	_,err :=fmt.Println(ctx)

	return err
}

func Publish(ctx *gear.Context)error{
	article,_ := ctx.Req.GetBody()

	fmt.Println(article)
	articleDB := DBConnect("article")

	return ctx.HTML(status)
}
