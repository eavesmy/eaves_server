package manager

import (
	"io/ioutil"
	"os"
)

func ReadFile(path string) []byte {

	fi, err := os.Open(path)

	if err != nil {
		panic(err)
	}

	defer fi.Close()

	fd, err := ioutil.ReadAll(fi)

	return fd
}
