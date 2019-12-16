<template>

  <div >
    <el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>JavaScript</el-breadcrumb-item>
  <el-breadcrumb-item>Array</el-breadcrumb-item>
</el-breadcrumb>  

<el-alert
    title="遍历数组"
    type="warning"
    show-icon
     :closable="false">
  </el-alert>
  <el-alert
    title="const,let:增加了块级作用域"
    type="warning"
    show-icon
     :closable="false">
  </el-alert>
  <el-alert
    title="const：用于常量 不可改变"
    type="warning"
    show-icon
     :closable="false">
  </el-alert>

 <el-row>  
    

    <el-col :span="6">       
<el-card class='card'>
<pre>
var fruits, text, fLen, i;
fruits = [&quot;B&quot;, &quot;O&quot;, &quot;A&quot;, &quot;M&quot;];
fLen = fruits.length;
text = "&lt;ul&gt;";
for (i = 0; i &lt; fLen; i++) {
  text+=&quot;&lt;li&gt;&quot;+fruits[i]+&quot;&lt;/li&gt;&quot;;
} 
text += "&lt;/ul&gt;";
console.log(text);
<b style="white-space:normal;"id='t1'></b>
</pre>

</el-card>
</el-col> 

  <el-col :span="6">     
<el-card class='card'>
 <pre>
var fruits, text;
fruits = [&quot;B&quot;, &quot;O&quot;, &quot;A&quot;, &quot;M&quot;];
text = "&lt;ul&gt;";
fruits.forEach(myFunction);
text += "&lt;/ul&gt;";
function myFunction(value) {
text += &quot;&lt;li&gt;&quot;+value+&quot;&lt;/li&gt;&quot;;
}
console.log(text);
<b style="white-space:normal;" id='t2'></b>
</pre>
</el-card>
</el-col> 

  <el-col :span="6">     
<el-card class='card'>
 <pre>
var fruits, text;
fruits = [&quot;B&quot;, &quot;O&quot;, &quot;A&quot;, &quot;M&quot;];
text = "&lt;ul&gt;";
fruits.forEach(item=>{
  console.log(item);
   <b style="white-space:normal;"id='i1'></b>
  text += &quot;&lt;li&gt;&quot;+item+&quot;&lt;li&gt;&quot;;
});
text += "&lt;/ul&gt;";
console.log(text);
<b style="white-space:normal;"id='t3'></b>
</pre>
</el-card>
</el-col> 


    <el-col :span="6"> 
      <el-button type='danger' @click="reset()">reset</el-button>
<el-button type='primary' @click="ce1()">执行1</el-button>
<el-button type='primary' @click="ce2()">执行2</el-button>
<el-button type='primary' @click="ce3()">执行3</el-button>
<el-button type='primary' @click="ce4()">执行4</el-button>
       </el-col> 
</el-row>

   </div>

</template>

<script>


export default {


  data() {
  
    return {
 item:[]
      }
    },
    
  created() {

  },
  mounted() {
  
  },
  destroyed() {
   
  },
  methods: {
  reset(){

    location.reload()
  },
  ce1(){

var fruits, text, fLen, i;

fruits = ["B", "O", "A", "M"];
fLen = fruits.length;
text = "<ul>";
for (i = 0; i < fLen; i++) {
     text += "<li>" + fruits[i] + "</li>";
} 
text += "</ul>";
console.log(text)
document.getElementById('t1').innerText=(text)
  },

ce2(){
  var fruits, text;
fruits = ["B", "O", "A", "M"];

text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";

function myFunction(value) {
  text += "<li>" + value + "</li>";
}
  
console.log(text)
document.getElementById('t2').innerText=(text)
},
ce3(){
  var fruits, text;
fruits = ["B", "O", "A", "M"];

text = "<ul>";
fruits.forEach(item=>{
  this.item.push(item)
  console.log(item)
  document.getElementById('i1').innerText=(this.item.join(' '))
  text += "<li>" + item + "</li>";

});
text += "</ul>";
console.log(text)
document.getElementById('t3').innerText=(text)

},
ce4(){

//  var a=['1','5','1'];
//    console.log(a);
//    console.log(a.toString());
//    console.log(a.valueOf());
// console.log(a.splice(0,1))

//  var i= a.push(4,4,5,7);
//  console.log(a);
//  console.log(i);
//  console.log(a.length);

// var j=a.pop();
//  console.log(a);
//  console.log(j);
//  console.log(a.length);

// var first=a.shift();
// console.log(first);
// console.log(a.length);
// console.log(a);

// a.unshift(0);
// console.log(a);

// var aa=a.reverse();
// console.log(aa)

// console.log(aa.sort())

var a=['a','b','c'];
console.log(a)
var b=['e','f'];
console.log(b)
a.splice(1,1,'e','f'); 
console.log(a)
var c=a.concat(b)
console.log(c)
var d=a.slice(0,1)
console.log(d)
b.push('g')
console.log(b)
b.pop()
console.log(b)
b.unshift('d')
console.log(b)

b.shift()
console.log(b)

console.log('----')
var c=[1,8,4,5]
console.log(c)
c.reverse()
console.log(c)
c.sort()
console.log(c)

console.log(Math.min.apply(c,c))

console.log(Math.max.apply(null,c))

//  map() 方法通过对每个数组元素执行函数来创建新数组。

// map() 方法不会对没有值的数组元素执行函数。

// map() 方法不会更改原始数组。
console.log(c.map((item,index)=>{
  
	return item*2;
}))

console.log(c.filter((item,index)=>{
	index=2;
	return item>4;
}))
 
console.log(c.reduce((total,item)=>{
	return total+item
}))

console.log(c.every(item=>{
	return item>5;
}))

console.log(c.some(item=>{
	return item>5;
}))

console.log(c.indexOf(4, 0))
console.log(c.lastIndexOf(4,3))


console.log(c.find(item=>{
	return item>5
}))

console.log(c.findIndex(item=>{
	return item>5
}))

}


 }
}
</script>

<style lang="less" scoped="" type="">
.el-alert{
  margin-bottom: 20px;
}

.card {
  height: 300px;
     width: 350px;
     border-radius: 5px;
    background-color: gray;
    color: white;
}

</style>
