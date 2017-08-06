package manager

import (
	"../cos"
	"crypto/md5"
	"encoding/hex"
	"github.com/teambition/gear"
)

func CookieCheck(ctx *gear.Context) bool {
	// id, err := ctx.Cookies.Get("u")

	return true //id == SetID()
}

func SetID() string {
	h := md5.New()
	h.Write([]byte(cos.Get("Login")))
	cipherStr := h.Sum(nil)

	return hex.EncodeToString(cipherStr)
}
