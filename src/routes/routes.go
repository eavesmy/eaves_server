package routes

import (
	"github.com/teambition/gear"
	"globalGet"
	"handler/home"
	"handler/blog"
)

func Router() *gear.Router {
	router := gear.NewRouter()
	Gconfig := globalGet.GlobalData()

	router.Get("/static/eaves.css", func(ctx *gear.Context) error {
		ctx.Type("text/css")
		return ctx.End(200, Gconfig.CssData)
	})

	router.Get("/static/terminal.js", func(ctx *gear.Context) error {
		ctx.Type("application/javascript")
		return ctx.End(200, Gconfig.JsData)
	})

	router.Get("/", home.Get)

	router.Post("/blog/publish",blog.Publish)
	router.Post("/home", home.GetPages)

	return router
}
