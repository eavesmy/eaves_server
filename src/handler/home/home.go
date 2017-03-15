package home

import (
	"fmt"
	"github.com/teambition/gear"
	"globalGet"
	"manager"
)

func Get(ctx *gear.Context) error {
	Gconfig := globalGet.GlobalData()
	return ctx.HTML(200, Gconfig.HtmlPage)
}

func GetPages(ctx *gear.Context) error {

	articleLIST := manager.GetHomePages()

	fmt.Println(articleLIST)

	return ctx.HTML(200, "oka")
}
