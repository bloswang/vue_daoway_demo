<template>
  <div>
    <Vheader></Vheader>
    <!--内容部分-->
    <div class="conents">
      <div class="con_top">
        <div class="c_left">
          <div class="pos_text">
            <span class="big_text">云家政</span>
            <span class="smol_text">营业时间:</span>
            <span class="black_text">08:00-20:00</span>
            <span class="smol_text">最近可预约时间：</span>
            <span class="red_text">07月12日 10:00</span>
          </div>
        </div>
        <ul class="c_right">
          <li class="red_text">
            23212
          </li>
          <li class="red_text">
            96%
          </li>
          <li class="red_text">
            86%
          </li>
          <li>
            成功接单
          </li>
          <li>
            接单率
          </li>
          <li>
            好评率
          </li>
        </ul>
      </div>
      <div class="con_btn">
        <div class="btn1"><a href="#ser">服务项目</a></div>
        <div class="btn1"><a href="#sel">商家简介</a></div>
        <div class="btn1"><a href="#com">用户评论</a></div>
      </div>
      <div class="con_list">
        <div class="lists">
          <!--服务项-->
          <div class="list_name" >
            <div class="name" id='ser'>服务项目</div>
          </div>
          <router-link to="/seller_list" class="no_line" v-for="(sel,index) in seller" :key="index">
            <div class="list">
              <div class="list_img">
                <img :src="sel.list_img" alt="">
              </div>
              <div class="list_text">
                <p class="p1">{{sel.list_name}}</p>
                <p class="p2">{{sel.list_time}}</p>
                <p class="p3"><span class="big_red">{{sel.list_price}}</span>元/小时 <span>原价{{sel.list_old_price}}元</span> <span class="rignt_text">已售{{sel.list_num}}</span></p>
              </div>
            </div>
          </router-link>

            <!--服务商简介-->
          <div class="list_name m_t" id='sel' >
            <div class="name">商家简介</div>
          </div>
          <div class="list">
            <div class="seler_text">
              <span>{{seller2.server_name}}</span>
              <img src="./menu-clean/seller-logo.jpg" alt="">

            <p>{{seller2.seller_massage}}
            </p>
            </div>
          </div>
          <!--服务评价-->
          <div class="list_name" id="com">
            <div class="name">用户评论</div>
          </div>
          <div class="list">
            <div class="user">
              <img src="./menu-clean/user.jpg" alt="">
            </div>
            <p>傻逼小子</p>
            <ul class="stars">
              <li class="star">
                <img src="./menu-clean/red_star.png" alt="">
              </li>
              <li class="star">
                <img src="./menu-clean/red_star.png" alt="">
              </li>
              <li class="star">
                <img src="./menu-clean/red_star.png" alt="">
              </li>
              <li class="star">
                <img src="./menu-clean/red_star.png" alt="">
              </li>
              <li class="star">
                <img src="./menu-clean/red_star.png" alt="">
              </li>
            </ul>
            <span class="time">2017/1/25</span>
            <p class="howTime">准时到达</p>
            <p class="weizhi">
              <img src="./menu-clean/position.jpg" alt="">
              北京朝阳 &nbsp;&nbsp;
            </p>
          </div>
          <div class="list_name">
            <div class="name">用户评论</div>
          </div>
          <div class="list">
            <div class="user">
              <img src="./menu-clean/user.jpg" alt="">
            </div>
            <p>傻逼小子</p>
            <ul class="stars">
              <li class="star">
                <img src="./menu-clean/red_star.png" alt="">
              </li>
              <li class="star">
                <img src="./menu-clean/red_star.png" alt="">
              </li>
              <li class="star">
                <img src="./menu-clean/red_star.png" alt="">
              </li>
              <li class="star">
                <img src="./menu-clean/red_star.png" alt="">
              </li>
              <li class="star">
                <img src="./menu-clean/red_star.png" alt="">
              </li>
            </ul>
            <span class="time">2017/1/25</span>
            <p class="howTime">准时到达</p>
            <p class="weizhi">
              <img src="./menu-clean/position.jpg" alt="">
              北京朝阳 &nbsp;&nbsp;
            </p>
          </div>

        </div>
        <div class="evms">
          <img src="./menu-clean/seller-pic.png" alt="">
        </div>
        <div class="evms">
          <img src="./menu-clean/yuyue.png" alt="">
        </div>
      </div>
      <fenye></fenye>
    </div>
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
        seller:[],
        seller2:{}
      }
    },
    created(){
        const result = this.$route.query.seller
        this.seller2 = result
        this.seller = result.server_list
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
  #sel:target{
    transition: 0.5s;
  }
  .no_line{
    text-decoration: none;
  }
  .m_t{
    margin-top: 50px;
  }

  .con_list{
    margin:20px auto;
    width:90%;
    overflow: hidden;
  }
  .lists{
    width: 960px;
    float: left;
  }
  .list{
    width: 100%;
    height: 200px;
    padding-top: 25px;
    padding-left: 25px;
    border-bottom: 1px solid rgba(191,191,191,.5);
  }

    .seler_text span{
      font-size: 20px;
      margin-bottom: 20px;
    }
    .seler_text p{
      margin-top: 20px;
      line-height: 1.5em;
      color: #5e5e5e;
    }
    .list_name{
    width:100%;
    height: 60px;
    padding:10px 10px 0;
    border-bottom: 1px solid rgba(191,191,191,.5);
  }
  .name{
    line-height: 50px;
    width: 65px;
    height: 100%;
    border-bottom: 3px solid darkred;
  }
  .list_img{
    float: left;
    width: 150px;
    height: 150px;
    margin-right: 20px;
  }
  .list_img img{
    width: 150px;
    height: 150px;
  }
  .list_text{
    padding-top: 10px;
    padding-left: 20px;
  }
  .list_text .p1{
    font-size: 18px;
    margin: 20px;
  }
  .list_text .p2{
    font-size: 14px;
    margin: 20px;
    color: #999;
  }
  .list_text .p3{
    font-size: 14px;
    margin: 20px;
    color: #999;
  }
  .list_text .p3 .big_red{
    font-size: 30px;
    color: red;
  }
  .rignt_text{
    margin-left: 500px;
  }
  .evms{
    width: 230px;
    height: 300px;
    background: #000;
    float: right;
    margin-bottom: 20px;
  }
    .evms img{
      width: 100%;
      height:100%;
    }

    .user{
      width: 40px;
      height:200px;
      float: left;
      margin-right: 20px;
    }
    .user img{
      width: 100%;
    }
    .stars{
      margin-top: 10px;
    }
    .star{
      width: 10px;
      height: 10px;
      float: left;
    }
    .star img{
      width: 10px;
      height: 10px;
    }
  .time{
    margin-left: 20px;
  }
  .howTime{
    margin-top: 20px;
    margin-bottom: 30px;
  }
  .weizhi{
    color: #5e5e5e;
    font-size: 14px;

  }

</style>
