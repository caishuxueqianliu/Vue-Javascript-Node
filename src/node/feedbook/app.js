// app application 应用程序
// 把当前模块所有的依赖项都声明再文件模块最上面
// 为了让目录结构保持统一清晰，所以我们约定，把所有的 HTML 文件都放到 views（视图） 目录中
// 我们为了方便的统一处理这些静态资源，所以我们约定把所有的静态资源都存放在 public 目录中
// 哪些资源能被用户访问，哪些资源不能被用户访问，我现在可以通过代码来进行非常灵活的控制
// / index.html
// /public 整个 public 目录中的资源都允许被访问
// 前后端融会贯通了，为所欲为

var http = require('http')
var fs = require('fs')
var url = require('url')
var template = require('art-template')
var server=http.createServer()
var comments = [
  {
    name: '张三',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三2',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三3',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三4',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三5',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  }
]

// server.on('request'(req,res)=>{

// })

http.createServer((req,res)=>{
  var parseObj = url.parse(req.url, true)
  console.log(parseObj)
    // 单独获取不包含查询字符串的路径部分（该路径不包含 ? 之后的内容）
    var pathname = parseObj.pathname
    console.log(pathname)
          if(pathname==='/'){
            fs.readFile('./views/index.html',(err,data)=>{

                if(err){
                  res.end('404')
                }
 var htmlStr=template.render(data.toString(),{

      comments:comments

 })
              res.end(htmlStr)
            })
          }
     else if(pathname==='/post'){

     fs.readFile('./views/post.html',(err,data)=>{

                if(err){
                  res.end('404')
                } 
                res.end(data)

          
        })
   }
          else if(pathname.indexOf('/public/')===0){
            fs.readFile('.'+pathname,(err,data)=>{
                  if(err){
                  res.end('404')
                }

              res.end(data)

            })
          }
  else if (pathname === '/pinglun') {
      // 注意：这个时候无论 /pinglun?xxx 之后是什么，我都不用担心了，因为我的 pathname 是不包含 ? 之后的那个路径
      // 一次请求对应一次响应，响应结束这次请求也就结束了
      // res.end(JSON.stringify(parseObj.query))

      // 我们已经使用 url 模块的 parse 方法把请求路径中的查询字符串给解析成一个对象了
      // 所以接下来要做的就是：
      //    1. 获取表单提交的数据 parseObj.query
      //    2. 将当前时间日期添加到数据对象中，然后存储到数组中
      //    3. 让用户重定向跳转到首页 /
      //       当用户重新请求 / 的时候，我数组中的数据已经发生变化了，所以用户看到的页面也就变了
      var comment = parseObj.query
      comment.dateTime = new Date().toLocaleString()
      comments.unshift(comment)
      // 服务端这个时候已经把数据存储好了，接下来就是让用户重新请求 / 首页，就可以看到最新的留言内容了

      // 如何通过服务器让客户端重定向？
      //    1. 状态码设置为 302 临时重定向
      //        statusCode
      //    2. 在响应头中通过 Location 告诉客户端往哪儿重定向
      //        setHeader
      // 如果客户端发现收到服务器的响应的状态码是 302 就会自动去响应头中找 Location ，然后对该地址发起新的请求
      // 所以你就能看到客户端自动跳转了
      res.statusCode = 302
      res.setHeader('Location', '/')
      res.end()
    } 
          else {
                fs.readFile('./views/404.html',(err,data)=>{
                  if(err){
                  res.end('404')
                }

              res.end(data)

            })
          }













}).listen(8080,()=>{
  console.log('success...')
})