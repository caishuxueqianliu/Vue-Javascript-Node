var express = require('express')
var bodyParser = require('body-parser')

var app = express()

app.use('/public/', express.static('./public/'))

// 配置使用 art-template 模板引擎
// 第一个参数，表示，当渲染以 .art 结尾的文件的时候，使用 art-template 模板引擎
// express-art-template 是专门用来在 Express 中把 art-template 整合到 Express 中
// 虽然外面这里不需要记载 art-template 但是也必须安装
// 原因就在于 express-art-template 依赖了 art-template
app.engine('html', require('express-art-template'))

// Express 为 Response 相应对象提供了一个方法：render
// render 方法默认是不可以使用，但是如果配置了模板引擎就可以使用了
// res.render('html模板名', {模板数据})
// 第一个参数不能写路径，默认会去项目中的 views 目录查找该模板文件
// 也就是说 Express 有一个约定：开发人员把所有的视图文件都放到 views 目录中

// 如果想要修改默认的 views 目录，则可以
// app.set('views', render函数的默认路径)

// 配置 body-parser 中间件（插件，专门用来解析表单 POST 请求体）
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
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

 //            fs.readFile('./views/index.html',(err,data)=>{

 //                if(err){
 //                  res.end('404')
 //                }
 // var htmlStr=template.render(data.toString(),{

 //      comments:comments

 // })
 //              res.end(htmlStr)
 //            })

res.render('index.html',{
  comments:comments
})
})
  

    
        
  app.get('/post',(req,res)=>{

     // fs.readFile('./views/post.html',(err,data)=>{

     //            if(err){
     //              res.end('404')
     //            } 
     //            res.end(data)

          
     //    })
  res.render('post.html')
   })
      
 
// app.get('/pinglun',(req,res)=>{

//      var parseObj = url.parse(req.url, true)
//       var comment = parseObj.query
//       comment.dateTime = new Date().toLocaleString()

//       comments.unshift(comment)
//       res.statusCode = 302
//       res.setHeader('Location', '/')
//       res.end()
   

   
         
// })



app.post('/post',(req,res)=>{
console.log(req.body)
 var comment=req.body
 comment.dateTime = new Date().toLocaleString()
 comments.unshift(comment)
  res.redirect('/')
})





app.listen(8080,()=>{
  console.log('success...')
})