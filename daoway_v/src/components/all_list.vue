<template>
  <div>
    <Vheader></Vheader>
    <div class="server_content">
      <div class="server_list">
        <div class="fenlei">
          <span>所有分类</span> &nbsp;&gt; <span>家庭保洁</span>&nbsp;&gt; <span>家庭保洁</span>
        </div>
        <div class="fl_list">
          <div class="fl">
            分类
          </div>
          <ul class="fl_es">
            <li><a href="#">全部</a></li>
            <li><a href="#">小时工</a></li>
            <li><a href="#">开荒保洁</a></li>
            <li><a href="#">擦玻璃</a></li>
            <li><a href="#">深度保洁</a></li>
            <li><a href="#">家具养护</a></li>
            <li><a href="#">杀虫灭鼠</a></li>
          </ul>
        </div>
        <ul class="sort_list">
          <li class="red_sort">推荐排序</li>
          <li>销量高</li>
          <li>评价多</li>
          <li>上门快</li>
          <li>价格低</li>
        </ul>

        <div class="server_seller">

          <div class="server_name">
            服务商
          </div>

          <!--每个服务商是一个server_msg-->
        <div class="server_msg" v-for="(server,index) in servers" :key="index">
          <div class="yjz">
            <img :src="server.server_log" alt="">
            <p>{{server.seller_name}}</p>
          </div>
          <span class="sm_text">已成功接单{{server.success_num}}&nbsp;&nbsp;&nbsp;&nbsp;好评{{server.good_num}}%</span>
        </div>


          <div class="down_app">
            <div class="down">
              <img src="./images/daowayApp.png" alt="">
            </div>
          </div>
        </div>

        <div class="list" v-for="(server,index) in servers" :key="index">
          <div class="list_img">
            <img :src="server.image" alt="">
          </div>
          <div>
            <p id="server_name">{{server.server_name}}</p>
            <p id="server_content">{{server.server_content}}</p>
            <span id="price">{{server.price}}</span><span id="text">元/每小时</span>
            <span id="old_price">{{server.old_price}}元</span>
            <p>
              <span class="seller_name">{{server.seller_name}}</span>
              <span class="seller_name">已售{{server.success_num}}</span>
              <span class="seller_name">好评{{server.good_num}}%</span>
            </p>
          </div>
        </div>

      </div>
    </div>
    <fenye></fenye>
    <Vfooter></Vfooter>
  </div>
</template>

<script>
  import Vheader from "./header.vue"
  import Vfooter from  "./footer.vue"
  import fenye from "./fenye/fenye.vue"
  export default {
    data () {
      return {
        servers:[]
      }
    },
    created(){
      const result = this.$route.query.servers
      this.servers=result
      console.log(result)
    },
    components : {
      Vfooter,
      Vheader,
      fenye
    }
  }
</script>

<style scoped>

  #server_name{
    display: inline-block;
    margin-top: 30px;
    margin-bottom: 25px;
    font-size: 18px;
  }
  #server_content{

    font-size: 14px;
    color: #999;
    margin-bottom: 20px;
  }
  #price{
    font-size: 30px;
    color: red;
  }
  #text{
    font-size: 16px;
    color: #999;
    margin-right: 30px;
  }
  #old_price{
    font-size: 16px;
    color: #999;
  }

  .seller_name{
    display: inline-block;
    margin-right: 20px;
    margin-top: 20px;
    font-size: 14px!important;
    color: #999;
  }


  /*排序列表 ul*/
  .sort_list{
    width: 99.2%;
    height: 60px;
    line-height: 60px;
    margin-bottom: 30px;
  }
  .sort_list li{
    float: left;
    margin: 0 20px;
  }
  .sort_list .red_sort{
    color: red;
    border-bottom:  3px solid red ;
  }

  /*分类列表*/
  .fl_list{
    width:99.2%;
    height: 50px;
    border: 1px solid rgba(191,191,191,0.5);
    margin-bottom: 10px;
    line-height: 50px;
    padding-left: 40px;
    overflow: hidden;
    background: white;
  }
  .fl{
    float: left;
    margin-right: 20px;
  }
  .fl_es{
    float: left;
  }
  .fl_es li{
    float: left;
    margin: 0 10px;

  }
  .fl_es li a{
    color: #5e5e5e;
    text-decoration: none;
  }
  .fl_es li a:hover{
    color: red;
  }

/*单独的样式右侧服务商头像的下边小字*/
  .server_msg .sm_text{
    display: inline-block;
    margin-left: 20px;
    margin-bottom: 20px;
    color: #999;
    font-size: 14px;
  }



  .server_content{
    margin-top: 65px;
    width:100%;
    background: rgba(191,191,191,0.1);
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
    margin-bottom: 20px;
    background: white;
  }
  .list:hover{
    background: rgba(191,191,191,0.1);
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


  /*//////////////////////////////////////////////////////////////////*/

  .server_data{
    margin-top: 10px;
    margin-bottom: 30px;
    padding: 20px;
    width: 960px;
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
    background: white;
  }
  .server_msg:hover{
    background: rgba(191,191,191,0.3);
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
