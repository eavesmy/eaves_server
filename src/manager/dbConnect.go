package manager

import (
	"../cos"
	"github.com/zemirco/couchdb"
	"net/url"
)

func DbClient(dbName string) couchdb.DatabaseService {
	u, err := url.Parse(cos.Get("COUCHPATH"))

	if err != nil {
		panic(err)
	}

	client, err := couchdb.NewClient(u)
	db := client.Use(dbName)

	return db
}
