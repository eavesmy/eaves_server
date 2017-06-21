package manager

import (
	"github.com/zemirco/couchdb"
	"net/url"
)

func DBConnect(dbName string) couchdb.DatabaseService {
	u, err := url.Parse("http://127.0.0.1:5984/")

	if err != nil {
		panic(err)
	}

	client, err := couchdb.NewClient(u)
	db := client.Use(dbName)

	return db
}
