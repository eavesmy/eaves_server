package handler

import (
	"../cos"
	"../tools"
	"github.com/teambition/gear"
	"net/http"
)

func Get_Home(ctx *gear.Context) error {

	ctx.Res.Push(cos.Get("WEBSITE_CSS"), &http.PushOptions{Method: "Get"})
	ctx.Res.Push(cos.Get("WEBSITE_JS"), &http.PushOptions{Method: "Get"})

	return ctx.HTML(200, string(tools.ReadFile(cos.Get("WEBSITE_HTML"))))
}

func Get_Css(ctx *gear.Context) error {

	ctx.Type("text/css")

	return ctx.End(200, tools.ReadFile(cos.Get("WEBSITE_CSS")))
}

func Get_Js(ctx *gear.Context) error {

	ctx.Type("application/javascript")

	return ctx.End(200, tools.ReadFile(cos.Get("WEBSITE_JS")))
}
