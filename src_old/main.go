package main

import (
	"github.com/teambition/gear"
	"globalGet"
	"manager"
	"routes"
)

func main() {

	globalGet.GetConfig()
	globalGet.PreHotStatic()
	manager.UpdateArticles()

	app := gear.New()

	router := routes.Router()

	app.UseHandler(router)

	app.Listen(":3000")

}
