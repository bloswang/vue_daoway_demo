<template>
    <div>
      <div class="footer">
        <h3>到位服务保障</h3>
        <p>到位平台担保交易安全，交易未成功100%退款</p>
        <div class="yes">
          <div class="quan">
            <img src="./images/quan.png" alt="">
            <span>服务多</span>
          </div>
          <div class="quan" id="quan2">
            <img src="./images/quan.png" alt="">
            <span>上门快</span>
          </div>
          <div class="quan">
            <img src="./images/quan.png" alt="">
            <span>有保障</span>
          </div>
        </div>
        <div class="hotCity">
          <div class="cityName">热门城市</div>
          <ul>
            <li>北京</li>
            <li>北京</li>
            <li>北京</li>
            <li>北京</li>
            <li>北京</li>
            <li>北京</li>
            <li>北京</li>
            <li>北京</li>
            <li>北京</li>
            <li>北京</li>
            <li>北京</li>
            <li>北京</li>
            <li>北京</li>
            <li>北京</li>
          </ul>
        </div>
        <div class="footerB">
          <p>©2015 版权所有 到位 daoway.com 京ICP备15001471号-1</p><br>
          <p>北京邻家科技有限公司</p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped>
  .footer{
    text-align: center;
  }
  .footer h3 {
    color: #333333;
    font-weight: bold;
  }
  .footer p{
    display: inline-block;
    font-size: 16px;
    margin-bottom: 40px;
  }
  .yes{
    width: 600px;
    margin:0 auto;
    overflow: hidden;
  }
  .yes .quan{
    position:relative;
    float: left;
    width: 50px;
    text-align: center;
  }
  #quan2{
    margin:0 220px;
  }
  .hotCity{
    overflow: hidden;
    width:80%;
    margin:50px auto;
    text-align: left;
  }
  .cityName{
    margin-right: 100px;
    height: 100px;
    color: #000;
    float: left;
  }
  .hotCity li{
    margin-right: 30px;
    font-size: 18px;
    float: left;
    color: #999;
  }
  .footerB{
    text-align: center;
    margin-top: 50px;
    color: #8c8c8c;
  }
</style>
