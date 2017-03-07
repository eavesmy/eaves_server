package home

import (
	"github.com/teambition/gear"
	"globalGet"
)

func Get(ctx *gear.Context) error {
	Gconfig := globalGet.GlobalData()

	return ctx.HTML(200, Gconfig.HtmlPage)
}

func GetPages(ctx *gear.Context) error {

}
