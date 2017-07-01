package router

import (
	"../handler"
	"github.com/teambition/gear"
)

func Routes() *gear.Router {
	router := gear.NewRouter()

	router.Get("/:name*", handler.Get_Home)
	// router.Get("/web/eaves.css", handler.Get_Css)
	// router.Get("/web/app.js", handler.Get_Js)

	router.Post("/blog/publish", handler.Blog_Publish)
	router.Post("/blog/index", handler.Blog_Index)
	router.Post("/blog/:ID", handler.Blog_One)

	return router
}
