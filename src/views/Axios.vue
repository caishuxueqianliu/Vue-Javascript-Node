<template>

  <div>
Vue.axios.get(api).then((response) => {
  console.log(response.data)
})
  
<el-button @click='axios()' type="primary"></el-button>
<el-button @click='axios1()' type="primary"></el-button>
<el-button @click='axios2()' type="primary"></el-button>
<el-button @click='axios3()' type="primary"></el-button>
{{data}}

<div id='data'></div>
   </div>

</template>

<script>
import $ from 'jquery'
export default {


  data() {
  
    return {
data:''
      }
    },
    
  created() {

  },
  mounted() {
  

  },
  destroyed() {
   
  },
  methods: {
  
 async axios(){

  const res=await this.$http.get("http://www.liulongbin.top:3005/api/getnewslist")
 if(res.status!==200){
  return this.$message.error('获取用户列表失败')
 }
this.$message.success('获取用户列表成功')
  console.log(res.data)
  this.data=res.data



},
  axios3(){
this.$http.get("http://www.liulongbin.top:3005/api/getnewslist").then((response) => {
  console.log(response.data)
 document.getElementById('data').innerText=JSON.stringify(response.data)

})
  
},
  axios2(){
$.ajax({
   type:'get',
   url:"http://www.liulongbin.top:3005/api/getnewslist",
    //data:data,
   dataType:'JSON',
   success: function (res) {
 console.log(res)
   },
   error: function () {}
});

}


 }
}
</script>

<style lang="less" scoped="" type="">


</style>
