// var a='hello';
// console.log(a);
// 成功
// data  数据
// error  null
// 失败
// data  undefined
// error 错误对象


// var fs=require('fs')
//读取文件
// fs.readFile('./ces.txt',(error,data)=>{
// 	if(error){
// 		console.log('error')
// 	}else{
// 		console.log(data.toString())
// 	}
	
// });
//写入文件
// fs.writeFile('./ces.txt', '111', error=>{
// 	if(error){
// 		console.log('error')
// 	}else{
// 		console.log('success')
// 	}
	
// });

//服务器请求与响应
// JSON.stringify(value)
 //转字符串
// JSON.parse(json: string)
//字符串转数组
// var http=require('http')
// var server=http.createServer()
// server.on('request',(request,response)=>{
// 	console.log(request.url)
// 	if(request.url==='/login'){
// 		var sz=[{
// 			name:'iphone x',
// 			price:'8888',
// 	     	color:'black'
// 		},
// 		{
// 			name:'iphone',
// 			price:'888',
// 	     	color:'green'
// 		},
// 		{
// 			name:'iphone',
// 			price:'88',
// 	     	color:'red'
// 		}
// 		]
// 		response.end(JSON.stringify(sz))
// 	}
// 	else if(request.url==='/register'){
// 		response.write('register')
// 		response.end()
// 	}
// 	else
// 		response.write('error')

// response.end()

// })



// server.listen(80,(aa)=>{
// 	console.log(aa)
// 	console.log('服务器启动成功')
// })


