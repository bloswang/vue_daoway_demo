<template>
  <div>
    <Vheader></Vheader>
    <div class="server_content">
      <div class="server_list" v-for="server in servers" v-if="server.id == $route.params.id">
        <div class="fenlei">
          <span>所有分类</span> &nbsp;&gt; <span>家庭保洁</span>&nbsp;&gt; <span>家庭保洁</span>
        </div>
        <div class="list">
          <div class="list_img">
            <img :src="server.image" alt="">
          </div>
          <ul class="list_des">
            <li class="des">
              {{server.seller_name}}
            </li>
            <li class="price">
              价格
              <p class="now"><b class="nowPr">{{server.price}}</b>元/小时</p>
              <p class="old">原价<b class="oldPr">{{server.old_price}}</b>元</p>
            </li>
            <li class="outNum">
              已售&nbsp;&nbsp;
              <p class="now">{{server.success_num}}</p>
            </li>
          </ul>
          <div class="tdc_list">
            <div class="tdc">
              <img src="./images/daowayApp.png" alt="">
            </div>
            <p>扫一扫</p>
            <p class="red">立即预约</p>
          </div>
        </div>
        <div class="server_seller">
          <div class="server_name">
            服务商
          </div>
          <div class="server_msg">
            <div class="yjz">
              <img :src="server.server_log" alt="">
              <p>{{server.seller_name}}</p>
            </div>
            <div class="server_num">
              <p>
                成功接单
                <i>{{server.success_num}}</i>
              </p>
              <p>
                接单率
                <i>{{server.numberes}}%</i>
              </p>
              <p>
                好评率
                <i>{{server.good_num}}%</i>
              </p>
            </div>
          </div>
          <div class="down_app">
            <div class="down">
              <img src="./images/daowayApp.png" alt="">
            </div>
          </div>
        </div>
        <div class="server_data">
          <div class="border_B">
            服务描述
          </div>
          <br>
          服务内容：
          <p>{{server.server_content}}</p>
          <br>
          服务保障：
          <p>1.根据满意度提交评价。</p>
          <p> 2.清洁内容丰富，专注卫生死角。</p>
          <p>3.价格透明，在规定服务时间内不现场加价。</p>
          <p>4.服务标准化，品质可预见。</p>
          <p>5.发现怠工，随即终止服务，联系我们为您处理，直到满意为止。</p>
          <p>6.出现服务质量问题，免费返工。</p>
          <p>7.19年品牌，自营技师，我们不外包。</p>
          <br>
          服务范围：
          <p>（可以在购买时间内自由安排服务项目，超出服务范围的服务要求可以现场与工人沟通）</p>
          <p>1.客餐厅：电视柜、茶几、桌面、门、餐桌、垃圾桶、沙发下、地面、卫生死角。</p>
          <p>2.卧室和阳台：阳台扶手、开关、插座、及其他。</p>
          <p>3.书房和储物间：桌面、书柜、垃圾桶、地面、卫生死角及其他。</p>
          <p>4.厨房：抽油烟机表面、橱柜、洗菜池、台面、地面、垃圾桶及其他。</p>
          <p>5.卫生间：洗漱台、沐浴房、马桶、垃圾桶、地面及其他。</p>
          <br>
          <div class="border_B">
            服务范围
          </div>

         {{server.server_range}}
          <br><br>
          <div class="border_B">
          服务时间
          </div>
          <p> {{server.server_time}}最近可预约时间:{{server.new_time}}</p>
          <br>
          <div class="border_B">
            订购须知
          </div>

          <p> 1.商家将在您下单后30分钟内确认是否接单；</p>
          <p>2.订单确认后，修改订单或退款需提前2小时通知；</p>
          <p>3.预约时间前2小时内退单将按30元/人扣取空单费；</p>
          <p>4.如商家接单后爽约将全额退款并向您额外赔付30元；</p>
          <p>5.为保障您的权益，所有费用请通过到位平台支付。</p>
          <div class="border_B">
            商家简介
          </div>
          <p>{{server.server_msg}}</p>
        </div>
      </div>
    </div>
    <Vfooter></Vfooter>
  </div>
</template>

<script>
  import Vheader from "./header.vue"
  import Vfooter from  "./footer.vue"
  export default {
      props:['servers'],
      components : {
        Vfooter,
        Vheader
      },

  }
</script>

<style scoped>
  .server_content{
    margin-top: 65px;
    width:100%;
  }
  .server_content .fenlei{
    padding-top: 25px;
    padding-bottom: 25px;
  }
  .server_content span{
    font-size: 20px;
    font-weight: bold;
  }
  .server_list{
    width:90%;
    margin: 0 auto;
    overflow: hidden;
  }
  .list{
    width: 960px;
    height: 220px;
    border: 1px solid rgba(191,191,191,0.5);
    float: left;
  }
  .list_img{
    width: 160px;
    height: 160px;
    margin: 30px;
    float: left;
  }
  .list_img img{
    width:100%;
    height:100%;
  }
  .list_des{
    float: left;
    margin-top: 35px;
  }
  .list_des p{
    display: inline-block;
  }
  .des{
    font-size: 20px;
    font-weight: 300;
    margin-bottom: 10px;
  }
  .price .nowPr{
    font-size: 25px;
    font-weight: 200;
    color: red;
  }
  .now{
    color: red;
    margin-right: 50px;
    margin-top: 20px;
  }
  .price .old{
    color: #999;
  }
  .tdc_list{
    width: 115px;
    float: right;
    margin: 30px;
    text-align: center;

  }
  .tdc_list .tdc{
    width: 115px;
    height: 115px;
  }
  .tdc_list .tdc img{
    width:100%;
    height:100%;
  }
  .tdc_list p{
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    margin-top: 10px;
  }
  .tdc_list .red{
    color: red;
    margin-top: 10px;
  }

  /*//////////////////////////////////////////////////////////////////*/

  .server_data{
    margin-top: 10px;
    margin-bottom: 30px;
    padding: 20px;
    width: 940px;
    border: 1px solid rgba(191,191,191,0.5);
    float: left;
  }
  .server_data p{
    line-height: 2em;
  }

  .border_B{
    width: 65px;
    border-bottom: 3px solid red;
    margin: 10px 0;
    font-size: 16px;
    font-weight: bold;
  }


  /*///////////////////////////////////////////////////////////////////*/

  .server_seller{
    width: 230px;
    float: right;
    margin-right: 10px;
  }
  .server_name{
    width: 230px;
    height: 60px;
    border: 1px solid rgba(191,191,191,0.5);
    padding-left: 10px;
    line-height: 60px;
    font-size: 20px;
    font-weight: bold;
  }
  .server_msg{
    width: 230px;
    height: 350px;
    border: 1px solid rgba(191,191,191,0.5);
    border-top: none;
  }
  .yjz{
    margin: 0 auto;
    padding-top: 50px;
    padding-bottom: 10px;
    width: 80px;
    text-align: center;
    font-size: 20px;
    font-weight: 300;
  }
  .yjz p{
    margin-top: 15px;
  }
  .yjz img{
    width: 100%;
  }
  .server_num p{
    margin : 20px;
    font-size: 16px;
  }
  .server_num p i{
    float: right;
    color: #d43f3a;
  }

  .down_app{
    width: 230px;
    height: 290px;
    background: red;
    float: right;
    margin-top: 20px;
    background: url("./images/fuwushang2_10.jpg");
  }

  .down{
    width: 130px;
    height: 130px;
    margin: 50px;
  }

  .down img{
    width:100%;
    height:100%;
  }




</style>
