package manager

import (
	"../cos"
	"../github.com/teambition/gear"
)

func Static() *gear.Router {
	router := gear.NewRouter(gear.RouterOptions{Root: cos.Get("STATIC_PATH"), IgnoreCase: true})

	router.Get("/eaves.css", sendCss)
	router.Get("/app.js", sendJs)

	return router
}

func sendCss(ctx *gear.Context) error {
	ctx.Type("text/css")

	return ctx.End(200, ReadFile(cos.Get("WEBSITE_CSS")))
}

func sendJs(ctx *gear.Context) error {
	ctx.Type("application/javascript")

	return ctx.End(200, ReadFile(cos.Get("WEBSITE_JS")))
}
