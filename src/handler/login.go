package handler

import (
	"../cos"
	"../manager"
	"github.com/go-http-utils/cookie"
	"github.com/teambition/gear"
)

type loginInfo struct {
	User   string `json:user`
	Passwd string `json:passwd`
}

func (b *loginInfo) Validate() error {
	return nil
}

func Login_Ver(ctx *gear.Context) error {

	info := &loginInfo{}

	ctx.ParseBody(info)

	if info.Passwd != cos.Get("LOGIN") {

		return ctx.HTML(403, "forbidden")

	} else {

		x := manager.SetID()
		opt := &cookie.Options{}

		opt.HTTPOnly = true
		opt.Secure = true
		opt.Path = "/"

		ctx.Cookies.Set("u", x, opt)

		return ctx.HTML(200, "ok")
	}

}
