package handler

import (
	"../cos"
	"crypto/md5"
	"encoding/hex"
	"fmt"
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

	fmt.Println(info)

	if info.Passwd != cos.Get("Login") {
		return ctx.HTML(403, "forbidden")
	} else {

		h := md5.New()
		h.Write([]byte(cos.Get("Login")))
		cipherStr := h.Sum(nil)
		x := hex.EncodeToString(cipherStr)

		res := ctx.Res

		res.Set("Set-Cookie", "u="+x+"; HttpOnly")

		return ctx.HTML(200, "ok")
	}

}
