<template>

  <div>
     <el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>JavaScript</el-breadcrumb-item>
  <el-breadcrumb-item>Var-Const-Let</el-breadcrumb-item>
</el-breadcrumb>  

<el-alert
    title=" var：没有块的概念，可以跨块访问"
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
    

    <el-col :span="4">       
<el-card class='card'>
    var x=10;<br>
        {<br>=
           var x3;<br>
           var x=4;<br>
           console.log(x) &nbsp; <b id='x1'></b><br>
        }<br>
  
    console.log(x) <b id='x2'></b>
</el-card>
</el-col> 

  <el-col :span="4">     
<el-card class='card'>
    const y=10;<br>
        {<br>
           const y=3;<br>
           console.log(y)  &nbsp; <b id='y1'></b><br>
        }<br>
    console.log(y)  &nbsp; <b id='y2'></b> 
</el-card>
</el-col> 

  <el-col :span="4">     
<el-card class='card'>
    let z=10;<br>
        {<br>
           let z=3;<br>
           z=4;<br>
           console.log(z) &nbsp; <b id='z1'></b><br>
        }<br>
    console.log(z)  &nbsp; <b id='z2'></b>
</el-card>
</el-col> 

  <el-col :span="4">  
<el-card class='card'>
   var a = [];<br>
for (var i = 0; i < 10; i++) {  <br>
    a[i] = function () { <br>
        console.log(i);  &nbsp; <b id='i1'></b> <br>
    }<br>
}<br>
 a[2]();
</el-card>
</el-col> 

  <el-col :span="4">    
<el-card class='card'>
     var b=[];<br>
    for (let i = 0; i < 10;i++){  <br> 
    b[i]=function () { <br>
        console.log(i);  &nbsp; <b id='i2'></b>  <br>
    }<br>
}<br>
b[2]()
</el-card>
</el-col> 

    <el-col :span="4"> 
   <el-button type='primary' @click="ces()">执行1</el-button><br><br><br><br>
       <el-button type='primary' @click="ce2()">执行2</el-button>
       </el-col> 
</el-row>
   </div>

</template>

<script>


export default {


  data() {
  
    return {
    
      }
    },
    
  created() {

  },
  mounted() {
  
  },
  destroyed() {
   
  },
  methods: {
  
    ces(){

        var x=10;
        {
           var x=3;
           var x=4;
           console.log(x)
           document.getElementById('x1').innerText=(x)
        }

  
    console.log(x)
document.getElementById('x2').innerText=(x)
       
      const y=10;
        {
           const y=3;
        
           console.log(y)
           document.getElementById('y1').innerText=(y)
        }

    
    console.log(y)     // const y=5;
  document.getElementById('y2').innerText=(y)
      let z=10;
        {
           let z=3;
           z=4;
           // let z=4;
           console.log(z)
             document.getElementById('z1').innerText=(z)
        }

          // let z=5;
    console.log(z)
      document.getElementById('z2').innerText=(z)
    },


ce2(){

   
var a = [];
 
for (var i = 0; i < 10; i++) {  
 
    a[i] = function () { 
 
        console.log(i);  
          document.getElementById('i1').innerText=(i)
 
    };

}

a[2]();
    var b=[];
    for (let i = 0; i < 10;i++){
     
    b[i]=function () { 
 
        console.log(i);
           document.getElementById('i2').innerText=(i)  
    }
 
}
    

b[2]()



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
     width: 200px;
     border-radius: 5px;
    background-color: gray;
    color: white;
}

</style>
