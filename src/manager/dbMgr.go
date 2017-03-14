package manager

import(
	"gopkg.in/redis.v5"
)

type DBdata struct {
	Name    string
	Handler string
	Data	string
}

var DBpip []DBdata

func DBinsert(insertData *DBdata) {
	DBpip = append(DBpip,insertData)
}

func DBcheck() {

}

func DBloop() {
	if len(DBpip) != 0 {
		dealData(DBpip[0,1])
	}
}

func dealData(_data *DBdata) {
	_handler := _data.Handler
	
	switch handler{
		case "insert":
			

	}
}
