<template>
  <div id="app">

<el-container>
  <el-header>Header</el-header>
  <el-container>
    <el-aside width="400px">Aside</el-aside>
    <el-main>
<el-menu :default-active="activeIndex" class="el-menu-demo" active-text-color="#409eff" mode="horizontal" @select="handleSelect">
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
<div style="margin-top: 15px;">
<el-card>
123

<div class='box'>
  <p>demo</p>
  <p>vue</p>
</div>
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
    
      }
    },
    
  created() {

  },
  mounted() {
  
  },
  destroyed() {
   
  },
  methods: {
  




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
</style>
