//
var http=require('http')
var server=http.createServer()
var fs=require('fs')
var wwwDir = 'D:/Movie/www'

server.on('request',(req,res)=>{
// var url=req.url

fs.readFile('./template.html', (err,data)=>{

if(err){
	return res.end('404')
}

fs.readdir(wwwDir,(err,files)=>{

	if(err){
		return res.end('Can not find www dir.')
	}
	 var content = ''
      files.forEach((item)=>{
        // 在 EcmaScript 6 的 ` 字符串中，可以使用 ${} 来引用变量
        content += `
          <tr>
            <td data-value="apple/"><a class="icon dir" href="/D:/Movie/www/apple/">${item}/</a></td>
            <td class="detailsColumn" data-value="0"></td>
            <td class="detailsColumn" data-value="1509589967">2017/11/2 上午10:32:47</td>
          </tr>
        `
      })
          data = data.toString()
      data = data.replace('^_^', content)
 // 3. 发送解析替换过后的响应数据
      res.end(data)

})


})





 })













server.listen(8080,()=>{
 
console.log('success...')


})