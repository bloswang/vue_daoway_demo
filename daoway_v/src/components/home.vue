<template>
    <div>
      <Vheader></Vheader>
      <div>
        <div class="banner">
          <!--在此放轮播图-->
            <el-carousel height="420px" class="imgwarpper">

              <el-carousel-item class="c_img">
                <img src="./images/banner1.jpg" alt="">
              </el-carousel-item>

              <el-carousel-item class="c_img">
                <img src="./images/banner2.jpg" alt="">
              </el-carousel-item>

              <el-carousel-item class="c_img">
                <img src="./images/banner3.jpg" alt="">
              </el-carousel-item>
            </el-carousel>

          <ul class="banner_left">
            <li>
              <a href="#">家庭保洁</a>
              <div class="leftB"></div>
              <div class="rightB"></div>
              <ul class="ulTwo">
                <li><a href="#">小时工</a></li>
                <li><a href="#">开荒保洁</a></li>
                <li><a href="#">擦玻璃</a></li>
                <li><a href="#">深度保洁</a></li>
                <li><a href="#">家具养护</a></li>
                <li><a href="#">杀虫灭鼠</a></li>
              </ul>
            </li>
            <li>
              <a href="#">上门按摩</a>
              <div class="leftB"></div>
              <div class="rightB"></div>
              <ul class="ulTwo">
                <li><a href="#">中医推拿</a></li>
                <li><a href="#">油压spa</a></li>
                <li><a href="#">局部理疗</a></li>
                <li><a href="#">足疗套餐</a></li>
                <li><a href="#">美体塑型</a></li>
                <li><a href="#">母婴保健</a></li>
              </ul>
            </li>
            <li>
              <a href="#">家电清洗</a>
              <div class="leftB"></div>
              <div class="rightB"></div>
              <ul class="ulTwo">
                <li><a href="#">手机维修</a></li>
                <li><a href="#">家电维修</a></li>
                <li><a href="#">电脑维修</a></li>
                <li><a href="#">家庭维修</a></li>
                <li><a href="#">开锁换锁</a></li>
                <li><a href="#">空气净化</a></li>
              </ul>
            </li>
            <li>
              <a href="#">衣物洗护</a>
              <div class="leftB"></div>
              <div class="rightB"></div>
              <ul class="ulTwo">
                <li><a href="#">洗衣</a></li>
                <li><a href="#">洗鞋修鞋</a></li>
                <li><a href="#">家纺清洗</a></li>
                <li><a href="#">箱包洗护</a></li>
                <li><a href="#">定制改衣</a></li>
              </ul>
            </li>
            <li>
              <a href="#">搬家速运</a>
              <div class="leftB"></div>
              <div class="rightB"></div>
              <ul class="ulTwo">
                <li><a href="#">搬家租车</a></li>
                <li><a href="#">开荒保洁</a></li>
                <li><a href="#">仓储寄存</a></li>
                <li><a href="#">搬家套餐</a></li>
              </ul>
            </li>
            <li>
              <a href="#">美容美妆</a>
              <div class="leftB"></div>
              <div class="rightB"></div>
              <ul class="ulTwo">
                <li><a href="#">化妆</a></li>
                <li><a href="#">美甲</a></li>
                <li><a href="#">美睫</a></li>
                <li><a href="#">美容</a></li>
                <li><a href="#">美发</a></li>
                <li><a href="#">半永久</a></li>
              </ul>
            </li>
            <li>
              <a href="#">鲜花绿植</a>
              <div class="leftB"></div>
              <div class="rightB"></div>
              <ul class="ulTwo">
                <li><a href="#">包月鲜花</a></li>
                <li><a href="#">礼品鲜花</a></li>
                <li><a href="#">绿植</a></li>
              </ul>
            </li>
            <li>
              <a href="#">上门医护</a>
              <div class="leftB"></div>
              <div class="rightB"></div>
              <ul class="ulTwo">
                <li><a href="#">护士上门</a></li>
                <li><a href="#">挂号陪诊</a></li>
                <li><a href="#">康复陪护</a></li>
                <li><a href="#">私人医生</a></li>
              </ul>
            </li>
            <li>
              <a href="#">样车用车</a>
              <div class="leftB"></div>
              <div class="rightB"></div>
              <ul class="ulTwo">
                <li><a href="#">上门养车</a></li>
                <li><a href="#">上门洗车</a></li>
                <li><a href="#">汽车陪练</a></li>
                <li><a href="#">机场泊车</a></li>
                <li><a href="#">验车</a></li>
              </ul>
            </li>

          </ul>
        </div>
      </div>
      <Vconent></Vconent>
      <Vfooter></Vfooter>
    </div>
</template>

<script>
    import Vue from  "vue"
    import {Carousel,CarouselItem} from "element-ui"
    Vue.use(Carousel)
    Vue.use(CarouselItem)
    import Vheader from "./header.vue"
    import Vfooter from  "./footer.vue"
    import Vconent from "./content.vue"

    export default {
        components : {
            Vfooter,
            Vheader,
            Vconent
        }
    }
</script>

<style>
  /*轮播图样式*/
  .c_img img{
    position: relative;
    top:0;
    left: -300px;
  }
  /*banner部分的样式*/
  .banner{
    width: 100%;
    height: 420px;
    margin-top: 65px;
    position : relative;
  }
  .banner .carousel .carousel-inner .item img{
    height: 100%;
  }
  .banner_left{
    width: 180px;
    height:100%;
    background-color: #8c8c8c;
    position: absolute;
    top:0;
    left: 100px;
    z-index: 5;
  }

  .banner_left .leftB{
    width: 6px;
    height: 11px;
    background: url("./images/right.png") no-repeat;
    float: right;
    margin-top: 15px;
    margin-right: 30px;
  }
  .banner_left .rightB{
    width: 10px;
    height: 10px;
    background: white;
    transform: rotate(40deg);
    opacity: 0.5;
    float: right;
    margin-top: 15px;
    margin-right: -6px;
    display: none;
  }

  .banner_left li{
    text-align: center;
    height: 10%;
  }
  .banner_left li:hover{
    background: #666;
  }
  .banner_left li:hover .leftB{
    display: none;
  }
  .banner_left li:hover .rightB{
    display: block;
  }
  .banner_left li:hover .ulTwo{
    display: block;
  }
  .banner_left li a{
    font-size: 16px;
    font-weight: bold;
    line-height: 42px;
    color: #ffffff;
    text-decoration: none;
  }
  .banner_left li .ulTwo{
    height: 420px;
    width: 180px;
    position: absolute;
    top:0;
    left: 180px;
    background: #ffffff;
    opacity: 0.7;
    display: none;
  }
  .banner_left li .ulTwo a {
    color: #000;
  }

</style>
