<template>
  <div class="fenye">
    <a href="#" class="pageup greycolor">&lt;上一页</a>
    <div id="showPage">
      <a href="#" class="num">1</a>
      <a href="#" class="num">2</a>
      <a href="#" class="num">3</a>
      <a href="#" class="num">4</a>
      <a href="#" class="num">5</a>
      ...
  </div>
    <a href="#" class="pagedown ">下一页&gt;</a>
  </div>
</template>

<script>
    export default {}
</script>

<style>
  /*底部翻页*/
  .fenye{
    width: 100%;
    overflow: hidden;
    height: 50px;
    padding-left: 500px;
    line-height: 50px;
    margin-bottom: 50px; ;
  }
  .fenye a{
    color: #000000;
    text-decoration: none;
  }
  .pageup,#showPage,.pagedown{
    float: left;
  }
  .pagedown:hover{
    background: red;
    color: white;
    transition: 0.5s;
  }
  .pageup:hover{
    background: red;
    color: white;
    transition: 0.5s;
  }
  .num:hover{
    background: red;
    color: white;
    transition: 0.5s;
  }
  .num{
    display: inline-block;
    line-height: 30px;
    text-align: center;
    width: 30px;
    height: 30px;
    border: 1px solid rgba(191,191,191,.5);
  }
  .pageup,.pagedown{
    line-height: 30px;
    text-align: center;
    width: 80px;
    height: 30px;
    border: 1px solid rgba(191,191,191,.5);
    margin: 10px;
  }

  /*底部翻页*/
  .con_top{
    overflow: hidden;
    width:100%;
    margin-top: 65px;
    padding-top: 30px;
  }
  .c_left{
    height: 120px;
    margin-left: 30px;
    float: left;
    padding-top: 50px;
    padding-left: 50px;
  }
  .big_text{
    font-size: 35px;
    font-weight: bold;
  }
  .smol_text{
    margin-left: 10px;
    color: #5e5e5e;
  }
  .red_text{
    color: red;
  }
  .c_right{
    width: 300px;
    height: 120px;
    margin-right: 80px;
    float: right;
    padding-top: 40px;
  }
  .c_right li{
    margin-top: 10px;
    text-align: center;
    width: 33.33%;
    float: left;
  }

  .con_btn{
    width:100%;
    height: 40px;
    background-color: #323434;
    padding-left: 70px;
  }
  .con_btn .btn1{
    width: 140px;
    height: 100%;
    float: left;
    line-height: 40px;
    text-align: center;
  }
  .con_btn .btn1 a{
    color: #ffffff;
    text-decoration: none;
  }
  .con_btn .btn1:hover{
    background: #444;
  }

</style>
