package main

import (
	"github.com/teambition/gear"
	//"github.com/teambition/gear/middleware/static"
	//"./manager"
	"globalGet"
	"routes"
)

func loop() {
	//manager.UpdateArticles()
}

func main() {

	globalGet.GetConfig()
	globalGet.PreHotStatic()

	app := gear.New()

	router := routes.Router()

	app.UseHandler(router)

	app.Error(app.Listen(":3000"))

	loop()
}
