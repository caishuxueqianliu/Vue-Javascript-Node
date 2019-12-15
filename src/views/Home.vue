<template>
  <div id="app">

<el-container>
  <el-header>Header</el-header>
  <el-container>
    <el-aside width="400px">Aside</el-aside>
    <el-main>
<el-menu :default-active="activeIndex" class="el-menu-demo" active-text-color="#409eff" mode="horizontal"   @select="handleSelect">
  <el-menu-item index="1">HTML5</el-menu-item>
  <el-menu-item index="2">CSS3</el-menu-item>
  <el-menu-item index="3">JavaScript</el-menu-item>
 <el-menu-item index="4">Vue</el-menu-item>
 <el-menu-item index="5">React</el-menu-item>
 <el-menu-item index="6">Ajax</el-menu-item>
 <el-menu-item index="7">Jquery</el-menu-item>
 <el-menu-item index="8">Responsive</el-menu-item>
 <el-menu-item index="9">Node</el-menu-item>
</el-menu>
<div  style="margin-top: 15px;">
<el-card v-if="index=='3'">

<el-row>
  <el-col :span="12">
<div class='box'>
  <a class='tilte' href='javascript:void(0)' @click="js1()">变量</a>
  <p class='content'>var-const-let的区别基本认识</p>
</div>
</el-col>

  <el-col :span="12">
<div class='box'>
  <a class='tilte' href='javascript:void(0)' @click="js2()">数组</a>
  <p class='content'>数组的方法</p>
</div>
</el-col>
 </el-row>

<el-row>
  <el-col :span="12">
<div class='box'>
  <a class='tilte' href='javascript:void(0)' @click="js1()">变量</a>
  <p class='content'>var-const-let的区别基本认识</p>
</div>
</el-col>

  <el-col :span="12">
<div class='box'>
  <a class='tilte' href='javascript:void(0)' @click="js1()">变量</a>
  <p class='content'>var-const-let的区别基本认识</p>
</div>
</el-col>
 </el-row>

 <el-row>
  <el-col :span="12">
<div class='box'>
  <a class='tilte' href='javascript:void(0)' @click="js1()">变量</a>
  <p class='content'>var-const-let的区别基本认识</p>
</div>
</el-col>

  <el-col :span="12">
<div class='box'>
  <a class='tilte' href='javascript:void(0)' @click="js1()">变量</a>
  <p class='content'>var-const-let的区别基本认识</p>
</div>
</el-col>
 </el-row>
</el-card>


</div>


</el-main>
  </el-container>
</el-container>


  </div>
</template>

<script>


export default {


  data() {
  
    return {
       activeIndex: '3',
       index:'3'
      }
    },
    
  created() {

  },
  mounted() {
  
  },
  destroyed() {
   
  },
  methods: {
  handleSelect(index){
    console.log(index)
         this.index=index;
  },
  js1(){


    this.$router.push('./js1')

  },

  js2(){


    this.$router.push('./js2')

  }



 }
}
</script>

<style lang="less" scoped="" type="">
@he:#24292e;
@wi:100px;
.el-header{
background:@he;

}
.box{
width:4.5*@wi;
height:1.2*@wi;
border:1px solid #d1d5da;
border-radius: 3px;

}
.tilte{
 margin-left:10%;
 position: relative;
 top:20px;
}
.content{
 margin-top: 30px;
  margin-left:10%;
}
.el-row{
  margin-bottom: 20px;
}
</style>
