//apache 目录功能&& 模板引擎 服务端渲染页面
// var http=require('http')
// var server=http.createServer()
// var fs=require('fs')
// var wwwDir = 'D:/Movie/www'

// server.on('request',(req,res)=>{
// // var url=req.url

// fs.readFile('./template.html', (err,data)=>{

// if(err){
// 	return res.end('404')
// }

// fs.readdir(wwwDir,(err,files)=>{
// 	if(err){
// 		return res.end('Can not find www dir.')
// 	}
// 	 var content = ''
//       files.forEach((item)=>{
//         // 在 EcmaScript 6 的 ` 字符串中，可以使用 ${} 来引用变量
//         content += `
//           <tr>
//             <td data-value="apple/"><a class="icon dir" href="/D:/Movie/www/apple/">${item}/</a></td>
//             <td class="detailsColumn" data-value="0"></td>
//             <td class="detailsColumn" data-value="1509589967">2017/11/2 上午10:32:47</td>
//           </tr>    `
//       })
//       data = data.toString()
//       data = data.replace('^_^', content)
//  // 3. 发送解析替换过后的响应数据
//       res.end(data)

// })

// })

//  })


//模板引擎 服务端渲染页面
// var http=require('http')
// var server=http.createServer()
// var fs=require('fs')
// var wwwDir = 'D:/Movie/www'
// var template = require('art-template')
// server.on('request',(req,res)=>{

 
//  fs.readFile('./template-apache.html',(err,data)=>{
//  	if(err){
//  		return res.end('404')
//  	}

// fs.readdir(wwwDir,(err,files)=>{
// 	if(err){
// 		return res.end('404')
// 	}
// 	 var htmlStr = template.render(data.toString(), {
//         title: '哈哈',
//         files: files
//       })


// res.end(htmlStr)
// })
//  })
// })


 // 1. 如果是文件，直接读取响应
 // 2. 如果是目录，读取渲染目录列表
 // 3. 如果目录并且有该目录中有 index.html 则直接渲染目录中的 index.html

// var http = require('http')
// var template = require('art-template')
// var path = require('path')
// var server = http.createServer()
// var wwwDir = 'D:/Movie/www'

// server.on('request',  (req,res)=> {

//   var url = req.url
//   var url='.'+url
//   var urlPath = path.join(wwwDir, url)
// 路径拼接问题  ？？？？？？？？？？？？
// //获取完整路径
// console.log(wwwDir)
// console.log(url)
// console.log(urlPath)
// var fs = require('fs')
//   fs.stat(url, (err, stats) =>{
//     if (err) {
//       return res.end('404 ')
//     }
//     if (stats.isFile()) {
//       fs.readFile(url,  (err, data)=>{
//         if (err) {
//           return res.end('404 Not Found.')
//         }
       
//         res.setHeader('Content-Type','text/plain;charset=utf-8')
//         res.end(data)
//       })
//     } else if (stats.isDirectory()) {
//       var templateStr = fs.readFileSync('./static-template.html').toString()
//       var files = fs.readdirSync(url)
//       // var data = files.map(function (item) {
//       //   return {
//       //     url: 
//       //     name: 
//       //     type: 
//       //   }
//       // })


//       var htmlStr = template.render(templateStr, {
//         files: files
//       })
//       res.end(htmlStr)
//     }
//   })
// })

























server.listen(8080,()=>{
 
console.log('success...')


})