package cos

var m = map[string]string{
	"PORT":         ":3000",
	"STATIC_PATH":  "/web/",
	"WEBSITE_HTML": "./web/index.html",
	"WEBSITE_CSS":  "./web/eaves.css",
	"WEBSITE_JS":   "./web/app.js",
}

func Get(key string) string {
	return m[key]
}
