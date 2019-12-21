
var url = require('url')
var template = require('art-template')
var fs=require('fs')
var express = require('express')
   
// 2. 创建你服务器应用程序
//    也就是原来的 http.createServer
var app = express()
app.use('/public/', express.static('./public/'))

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
app.get('/',(req,res)=>{

            fs.readFile('./views/index.html',(err,data)=>{

                if(err){
                  res.end('404')
                }
 var htmlStr=template.render(data.toString(),{

      comments:comments

 })
              res.end(htmlStr)
            })

})
  

    
        
  app.get('/post',(req,res)=>{

     fs.readFile('./views/post.html',(err,data)=>{

                if(err){
                  res.end('404')
                } 
                res.end(data)

          
        })

   })
      
 
app.get('/pinglun',(req,res)=>{

     var parseObj = url.parse(req.url, true)
      var comment = parseObj.query
      comment.dateTime = new Date().toLocaleString()

      comments.unshift(comment)
      res.statusCode = 302
      res.setHeader('Location', '/')
      res.end()
   

   
         
})

app.get('/pinglun',(req,res)=>{

     var parseObj = url.parse(req.url, true)
      var comment = parseObj.query
      comment.dateTime = new Date().toLocaleString()

      comments.unshift(comment)
      res.statusCode = 302
      res.setHeader('Location', '/')
      res.end()
   
         
})







app.listen(8080,()=>{
  console.log('success...')
})