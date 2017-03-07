package main

import (
	"github.com/teambition/gear"
	//"github.com/teambition/gear/middleware/static"
	"globalGet"
	"routes"
)

func main() {

	globalGet.GetConfig()
	globalGet.PreHotStatic()

	app := gear.New()

	router := routes.Router()

	app.UseHandler(router)

	/*	app.Use(static.New(static.Options{
		Root: "./static",
	}))*/

	app.Error(app.Listen(":3000"))
}
