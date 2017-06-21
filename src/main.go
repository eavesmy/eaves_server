package main

import (
	"./cos"
	"./github.com/teambition/gear"
	"./manager"
	// "github.com/teambition/gear/middleware/favicon"
)

func main() {
	app := gear.New()
	// app.Use(favicon.New("./favicon.ico"))

	mainRouter := manager.Routes()
	staticRouter := manager.Static()

	app.UseHandler(staticRouter)
	app.UseHandler(mainRouter)

	app.Error(app.Listen(cos.Get("PORT")))
}
