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

	router.Post("/api/publish", handler.Blog_Publish)
	router.Post("/api/delete", handler.Blog_Delete)
	router.Post("/api/index", handler.Blog_Index)
	router.Post("/api/:ID", handler.Blog_One)
	router.Post("/api/login", handler.Login_Ver)

	return router
}
