package main

import (
	"github.com/zemirco/couchdb"
	"log"
	"net/url"
)

func dbConnect(dbName string) couchdb.DatabaseService {
	u, err := url.Parse("http://127.0.0.1:5984/")

	if err != nil {
		panic(err)
	}

	client, err := couchdb.NewClient(u)
	db := client.Use(dbName)

	return db

}

func main() {
	articleDB := dbConnect("article")

	name := articleDB.Name()

	log.Println(name)
}
