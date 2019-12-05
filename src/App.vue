<template>
  <div id="app">
  
     



   
<router-view> </router-view>




  <div id="nav">
  
<mt-tabbar >
     <router-link to="/home">
  <mt-tab-item id="1">
    <img slot="icon" >
   1
  </mt-tab-item>

 </router-link> 
  <router-link to="/about">
  <mt-tab-item id="2">
    <img slot="icon" >
   2
  </mt-tab-item>
   </router-link> 
  <mt-tab-item id="3">
    <img slot="icon" >
    3
  </mt-tab-item>
  <mt-tab-item id="4">
    <img slot="icon" >
    4
  </mt-tab-item>
</mt-tabbar>    
    </div>

  </div>
</template>

<style>

</style>

