package manager

import (
	"../cos"
	"github.com/teambition/gear"
	"github.com/zemirco/couchdb"
	"io"
	"net/http"
	"time"
)

type Config struct {
	Method string
	Url    string
}

type UserAgent struct {
	couchdb.Document
	Time time.Time
}

func HttpClient(config *Config, body io.Reader) (*http.Request, error) {
	req, err := http.NewRequest(config.Method, config.Url, body)

	return req, err
}

func RequestLog(ctx *gear.Context) error {

	userAgent := ctx.Get("User-Agent")

	db := DbClient(cos.Get("DB_USERAGENT"))

	data := &UserAgent{
		Time: time.Now(),
	}

	data.Document.ID = userAgent

	db.Post(data)

	return nil
}
