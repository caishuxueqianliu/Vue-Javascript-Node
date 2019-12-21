//异步请求：异步请求的好处是代码不用等待ajax返回数据结果，代码就继续往下执行，
//这种做法的好处是页面数据相互不影响，不会因为某个模块的数据没有返回，
//页面其他数据就不能加载。使用异步请求就是页面的各个模块相互不影响，用户体验较好。
//异步请求
console.log(1);
$.ajax（{
    type    :"POST",
    url     :url,
    dataType:"JSON",
    async   :true,
    data    :data,
    success :function(){
        console.log(2);
   }
}）;
console.log(3);
//控制台打印结果：1 3 2
// 同步请求：同步请求就是代码执行到这里会等待后台数据的响应，不再往下执行，页面会停在某个地方，用户体验较差。但是有时代码执行必须要获取某个数据，这个数据是其他代码执行的前提，这时候就必须使用同步请求。

//同步请求
console.log(1);
$.ajax（{
    type    :"POST",
    url     :url,
    dataType:"JSON",
    async   :false,
    data    :data,
    success :function(){
        console.log(2);

