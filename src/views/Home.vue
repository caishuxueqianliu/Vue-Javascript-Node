<template>
  <div id="app">
    <div>
      
         <el-row :gutter="0">
  <el-col :xs="8" :sm="6" :md="4" :lg="2" :xl="2"><div class="grid-content bg-purple">1</div></el-col>
<el-col :xs="4" :sm="6" :md="8" :lg="10" :xl="10"><div class="grid-content bg-purple-light">4</div></el-col>
  <el-col :xs="4" :sm="6" :md="8" :lg="2" :xl="10"><div class="grid-content bg-purple">3</div></el-col>
  <el-col :xs="8" :sm="6" :md="4" :lg="10" :xl="2"><div class="grid-content bg-purple-light">4</div></el-col>
</el-row>
    </div>
    <div class="container">
<!-- Stack the columns on mobile by making one full-width and the other half-width -->
<div class="row">
  <div class="col-xs-4 col-sm-3 col-md-2 col-xl-1 col-1"><div class="grid-content bg-purple">1</div></div>
  <div class="col-xs-2 col-sm-3 col-md-4 col-xl-5 col-5"><div class="grid-content bg-purple-light">1</div></div>
    <div class="col-xs-2 col-sm-3 col-md-4 col-xl-1 col-5"><div class="grid-content bg-purple">1</div></div>
      <div class="col-xs-4 col-sm-3 col-md-2 col-xl-5 col-1"><div class="grid-content bg-purple-light">1</div></div>
</div>
      </div>



  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
    }
  }
}
</script>

<style scoped>
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .no-gutters {
  margin-right: 0;
  margin-left: 0;

  > .col,
  > [class*="col-"] {
    padding-right: 0;
    padding-left: 0;
  }
}
</style>
