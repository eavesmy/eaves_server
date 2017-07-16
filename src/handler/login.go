package handler

import (
	"../cos"
	"../manager"
	"github.com/teambition/gear"
)

type loginInfo struct {
	User   string `json:"user"`
	Passwd string `json: "passwd"`
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

		res := ctx.Res

		res.Set("Set-Cookie", "u="+x+"; HttpOnly")

		return ctx.HTML(200, "ok")
	}

}
