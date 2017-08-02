package manager

import (
	"io"
	"net/http"
)

type Config struct {
	Method string
	Url    string
}

func HttpClient(config *Config, body io.Reader) (*http.Request, error) {
	req, err := http.NewRequest(config.Method, config.Url, body)

	return req, err
}
