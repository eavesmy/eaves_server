package globalGet

import (
	"fmt"
	"io/ioutil"
	"os"
)

type Config struct {
	HtmlPath string
	HtmlPage string
	CssPath  string
	CssData  []byte
	JsPath   string
	JsData   []byte
}

var Gconfig Config

func GetConfig() {

	path := "./frontend/"

	Gconfig.HtmlPath = path + "index.html"
	Gconfig.CssPath = path + "eaves.css"
	Gconfig.JsPath = path + "main.js"
}

func PreHotStatic() {

	htmlfile, _ := os.Open(Gconfig.HtmlPath)
	defer htmlfile.Close()
	htmlData, _ := ioutil.ReadAll(htmlfile)

	cssfile, _ := os.Open(Gconfig.CssPath)
	defer cssfile.Close()
	cssData, _ := ioutil.ReadAll(cssfile)

	jsfile, _ := os.Open(Gconfig.JsPath)
	defer jsfile.Close()
	jsData, _ := ioutil.ReadAll(jsfile)

	Gconfig.HtmlPage = string(htmlData)
	Gconfig.CssData = cssData
	Gconfig.JsData = jsData

	fmt.Println("HTML file load finished.")
}

func GlobalData() Config {

	return Gconfig
}
