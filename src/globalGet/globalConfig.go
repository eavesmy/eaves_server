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

	path, _ := os.Getwd()
	Gconfig.HtmlPath = path + "/main.html"
	Gconfig.CssPath = path + "/static/eaves.css"
	Gconfig.JsPath = path + "/static/terminal.js"
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