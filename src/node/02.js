
exports.foo='123'

exports.add=(x,y)=>{
	return x+y
}

exports.readFile=(path,callback)=>{
	var fs=require('fs')
	console.log(path)
	fs.readFile(path,(err,data)=>{
		console.log(data)
	})
}