<template>
  <div class="login">
    <div class="login_1">
      <div class="logo">
        <img src="./login_img/houtai-logo.png">
      </div>
      <div class="logo_box" v-show="isShow_g">
        <div class="input-group">
            <span class="input-group-addon" id="basic-addon1">
                <label class="glyphicon glyphicon-user"></label>
            </span>
          <input type="text" class="form-control" placeholder="输入昵称或手机号" aria-describedby="basic-addon1">
        </div>
        <div class="input-group">
            <span class="input-group-addon">
                <label class="glyphicon glyphicon-lock"></label>
            </span>
          <input type="text" class="form-control" placeholder="输入密码" aria-describedby="basic-addon1">
        </div>
        <button type="button" class="btn btn-primary btn-lg btn-block">登录</button>
        <div class="text">
          <a href="#">
            <span>忘记密码</span>
          </a>
          <a class="text_right" @click="changed_g">
            <a href="javascript:;">注册</a>
          </a>
        </div>
      </div>
      <div class="register" v-show="isShow_r">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Username" aria-describedby="basic-addon1">
        </div>
        <div class="code_box">
          <div class="yan">
            <img src="./login_img/code.jpg">
            <input type="text" placeholder="请输入图片中的字符串">
          </div>
          <div class="get">
            <a>获取验证码</a>
          </div>
        </div>
        <div class="register_1">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Username" aria-describedby="basic-addon1">
          </div>

        </div>
        <div class="register_2">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Username" aria-describedby="basic-addon1">
          </div>
        </div>
        <div class="duo">
          <a>
            <input type="checkbox" id="checkbox">
            <label for="checkbox">您确认并同意到位用户协议</label>
          </a>
        </div>
        <button type="button" class="btn btn-primary btn-lg btn-block">注册</button>
        <a class="qie" @click="changed_r">以有账号？登录</a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                isShow_g : true,
                isShow_r : false
            }
        },
      methods : {
        changed_g () {
            this.isShow_g = !this.isShow_g
            this.isShow_r = true
        },
        changed_r(){
          this.isShow_r = !this.isShow_r
          this.isShow_g = true
        }
      }
    }
</script>

<style scoped>
  .login{
    width: 100%;
    height: auto;
  }
  .login_1{
    width: 330px;
    height: auto;
    margin: 200px auto;
    border: 1px solid #e4e4e4;
    border-radius: 5px;
  }
  .logo{
    width: 300px;
    height: 60px;
    margin: 20px auto;
  }
  .logo img{
    width: 100%;
  }
  .input-group{
    width: 280px;
    height: 50px;
    margin-left: 25px;
  }
  .logo_box{
    overflow: hidden;
    padding-bottom: 10px;
  }
  .input-group input{
    height: 50px;
  }
  .btn{
    margin-top: 20px;
    width: 280px;
    margin-left: 25px;
  }
  .text{
    margin-top: 20px;
    width: 330px;
    height: auto;
  }
  .text a span{
    float: left;
    margin-left: 25px;
  }
  .text .text_right a{
    float: right;
    margin-right: 25px;
  }
  .register{
    width: 330px;
    height: 450px;
  }
  .code_box{
    margin-top: 10px;
    width: 300px;
    margin-left: 25px;
    overflow: hidden;
  }
  .yan{
    float: left;
    width: 202px;
  }
  .get{
    float: left;
    width: 80px;
    height:100px;
    background-color: #e4e4e4;
  }
  .get a{
    display:block;
    line-height: 100px;
    text-align: center;
    text-decoration: none;
    color: black;
    cursor: pointer;
  }
  .yan img{
    width: 202px;
    height: 50px;
  }
  .yan input{
    width: 202px;
    height: 50px;
  }
  .register_1{
    margin-top: 10px;
  }
  .register_2{
    margin-top: 10px;
  }
  .duo {
    margin-top: 10px;
    margin-left: 25px;

  }
  .duo a{
    text-decoration: none;

  }
  .duo label{
    line-height: 13px;
    vertical-align: middle;
  }
  .qie{
    text-align: center;
    display: block;
    margin-top: 10px;
    text-decoration: none!important;
    cursor: pointer;
  }



</style>
