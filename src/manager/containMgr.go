package manager

type Article struct {
	Id      string
	Title   string
	Contain string
	Time    string
}

var HomePagesStorage []Articles

func GetHomePages() []Articles {
	return HomePagesStorage
}

/*func UpdateAtricles() {

}*/
