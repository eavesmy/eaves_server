package manager

import (
	"../cos"
	"../github.com/teambition/gear"
	"net/http"
)

func Routes() *gear.Router {
	router := gear.NewRouter()

	router.Get("/:name*", handler)

	return router
}

func handler(ctx *gear.Context) error {

	ctx.Res.Push(cos.Get("WEBSITE_CSS"), &http.PushOptions{Method: "Get"})
	ctx.Res.Push(cos.Get("WEBSITE_JS"), &http.PushOptions{Method: "Get"})

	return ctx.HTML(200, string(ReadFile(cos.Get("WEBSITE_HTML"))))
}
