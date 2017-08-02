package main

import (
	"./cos"
	"./router"
	"github.com/teambition/gear"
	"github.com/teambition/gear/logging"
	"github.com/teambition/gear/middleware/favicon"
)

func main() {
	app := gear.New()

	app.UseHandler(logging.Default(true))
	app.Use(favicon.New("./web/favicon.ico"))

	for _, router := range router.Routes() {
		app.UseHandler(router)
	}

	app.Error(app.Listen(cos.Get("PORT")))
}
