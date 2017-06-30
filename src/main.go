package main

import (
	"./cos"
	"./manager"
	"./router"
	"github.com/teambition/gear"
	"github.com/teambition/gear/logging"
	"github.com/teambition/gear/middleware/favicon"
)

func main() {
	app := gear.New()

	app.UseHandler(logging.Default(true))
	app.Use(favicon.New("./web/favicon.ico"))

	routes := router.Routes()
	app.UseHandler(routes)

	manager.Init()
	app.Error(app.Listen(cos.Get("PORT")))
}
