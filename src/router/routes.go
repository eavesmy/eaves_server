package router

import (
	"../handler"
	"github.com/teambition/gear"
)

var routes []*gear.Router

func Routes() []*gear.Router {

	blogRoutes := gear.NewRouter(gear.RouterOptions{
		Root:                  "/api/blog",
		IgnoreCase:            true,
		FixedPathRedirect:     true,
		TrailingSlashRedirect: true,
	})

	blogRoutes.Post("/delete", handler.Blog_Delete)
	blogRoutes.Post("/index", handler.Blog_Index)
	blogRoutes.Post("/publish", handler.Blog_Publish)
	blogRoutes.Post("/:ID", handler.Blog_One)
	routes = append(routes, blogRoutes)

	userRoutes := gear.NewRouter(gear.RouterOptions{
		Root:                  "/api/user",
		IgnoreCase:            true,
		FixedPathRedirect:     true,
		TrailingSlashRedirect: true,
	})

	userRoutes.Post("/login", handler.Login_Ver)
	routes = append(routes, userRoutes)

	reptileRoutes := gear.NewRouter(gear.RouterOptions{
		Root:                  "/api/reptile",
		IgnoreCase:            true,
		FixedPathRedirect:     true,
		TrailingSlashRedirect: true,
	})

	reptileRoutes.Post("/go", handler.Forward2Reptile)
	routes = append(routes, reptileRoutes)

	mainRouter := gear.NewRouter()

	mainRouter.Get("/:name*", handler.Get_Home)
	routes = append(routes, mainRouter)

	return routes
}
