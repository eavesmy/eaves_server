package tools

import (
	"time"
)

func TimeTemp() int64 {
	return time.Now().Unix()
}
