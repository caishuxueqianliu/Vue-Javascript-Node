//  JSON.parse(jsonString): 在一个字符串中解析出JSON对象
//  JSON.stringify(obj) : 将一个JSON对象转换成字符串
// npm init -y
//npm i -S express
// var a='hello';
// console.log(a);
// 成功3
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


// 分割线

//监听地址端口 Content-Type

// var http=require('http')
// var server=http.createServer()
// server.on('request',(req,res)=>{
// console.log(req.url)
// console.log(req.socket.remoteAddress,req.socket.remotePort)
// if(req.url==="/"){
// 	res.setHeader('Content-Type','text/plain;charset=utf-8')
// res.end('刘昊')
// }
// else {
// 	res.setHeader('Content-Type','text/html;charset=utf-8')
// res.end('<h1>刘昊啊</h1>')
// }

// })

// server.listen(8080,()=>{
// 	console.log('success')
// })


// 读取html文件

// var http=require('http')
// var server=http.createServer()
// var fs=require('fs')

// server.on('request',(req,res)=>{
// console.log(req.url)
// if(req.url==='/'){

//    fs.readFile('./html.html',(err,data)=>{

//    	if(err){
//    		res.setHeader('Content-Type','text/plain;charset=utf-8')
//    		res.end('文件读取失败')
//    	}
//    	else{
//    	res.setHeader('Content-Type','text/html;charset=utf-8')
//    		res.end(data)
//    	}
//    })

// }else if(req.url==='/img'){
// 	fs.readFile('./favicon.jpg',(err,data)=>{
//     if(err){
//     	res.setHeader('Content-Type','text/plain;charset=utf-8')
//    		res.end('文件读取失败')
//     }
//   else{
//   	 	res.setHeader('Content-Type','image/jpeg;charset=utf-8')
//    		res.end(data)
//   }

// 	})


// }else{

// 	res.end('404')
// }



// })



// server.listen(8080,()=>{
// 	console.log('success...')
// })



//require 和export

// var bExports=require('./011.js')
// var fs=require('fs')
// console.log(bExports.foo)
// console.log(bExports.add(3,5))

// bExports.readFile('./01.js');