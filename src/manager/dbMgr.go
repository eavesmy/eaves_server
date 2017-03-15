package manager

import (
	"github.com/zemirco/couchdb"
	"net/url"
)

type baseData struct {
	couchdb.Document
	_id     string `json:"_id"`
	title   string `json:"title"`
	contain string `json:"contain"`
	timeTmp string `json:"time"`
	author  string `json:author`
}

func dbConnect(dbName string) couchdb.DatabaseService {
	u, err := url.Parse("http://127.0.0.1:5984/")

	if err != nil {
		panic(err)
	}

	client, err := couchdb.NewClient(u)
	db := client.Use(dbName)

	return db

}
