package handler

import (
	"../cos"
	"../manager"
	"fmt"
	"github.com/go-http-utils/cookie"
	"github.com/teambition/gear"
)

type loginInfo struct {
	User   string `json:user`
	Passwd string `json:passwd`
}

type signInfo struct {
	Account       string `json:account`
	Passwd        string `json:passwd`
	CorrectPasswd string `json:correctPasswd`
	Phone         string `json:phone`
	Email         string `json:email`
	Nick          string `json:nick`
	Wechat        string `json:weChat`
}

func (b *loginInfo) Validate() error {
	return nil
}

func (b *signInfo) Validate() error {
	return nil
}

func Login_Ver(ctx *gear.Context) error {

	info := &loginInfo{}

	ctx.ParseBody(info)

	if info.Passwd != cos.Get("LOGIN") {

		return ctx.HTML(403, "forbidden")

	} else {

		cookies := cookie.New(ctx.Res, ctx.Req)

		x := manager.SetID()
		opt := &cookie.Options{}
		opt.HTTPOnly = false
		opt.Path = "/"

		cookies.Set("u", x)
		cookies.Set("Login_state", "online", opt)

		return ctx.HTML(200, "ok")
	}

}

func Sign(ctx *gear.Context) error {

	info := &signInfo{}
	ctx.ParseBody(info)

	fmt.Println(info)

	return ctx.HTML(200, "ok")
}
