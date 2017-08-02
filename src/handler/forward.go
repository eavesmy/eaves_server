package handler

import (
	"../cos"
	// "../manager"
	"github.com/teambition/gear"
	"net/http/httputil"
	"net/url"
)

type reptileGo struct {
	Domin string `json:domain`
	Main  string `json:main`
}

func (b *reptileGo) Validate() error {
	return nil
}

func Forward2Reptile(ctx *gear.Context) error {

	url, _ := url.Parse("http://" + cos.Get("REPTILE_HOST"))

	proxy := httputil.NewSingleHostReverseProxy(url)

	proxy.ServeHTTP(ctx.Res, ctx.Req)

	return ctx.HTML(200, "ok")
}
