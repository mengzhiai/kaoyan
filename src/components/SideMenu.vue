<template>
<div class="side-menu">
  <div class="side-title">
    <div class="chinese">{{sideChinese}}</div>
    <div class="english">{{sideEnglish}}</div>
  </div>
  <div class="bac">
    <img :src="sideBac" alt="">
  </div>
  <div class="service-tel">
    <div class="tel">全国服务热线: {{serviceTel}}</div>
    <div class="chat">微博: {{servicChat}}</div>
  </div>
  <div class="account flex-center">
    <div>
      <img src="@/assets/wechat-1.png" alt="">
      <p>微信公众号</p>
    </div>
    <div>
      <img src="@/assets/wechat-1.png" alt="">
      <p>咨询微信</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    sideChinese: String,
    sideEnglish: String,
    // sideBac: String
  },
  data() {
    return {
      sideBac: require('@/assets/side-bacImg.jpg'),
      serviceTel: '400-969-0363',
      servicChat: '考研之窗2021'
    }
  }
}
</script>

<style lang="scss" scoped>
.side-title {
  width: 100%;
  height: 120px;
  background: url('~@/assets/side-bac.png') no-repeat 100% 100%;
  
}

.side-menu{
  width: 260px;
  background-color: #3d9fdb;
  .side-title{
    color: #fff;
    text-align: center;
    
  }
  .chinese{
    font-size: 30px;
    padding: 20px 0 10px;
  }
  .english{
    font-size: 20px;
  }
  .bac{
    img{
      width: 100%;
    }
  }
  .service-tel{
    color: #fff;
    padding: 10px 20px;
    font-size: 16px;
    .tel{
      margin-bottom: 20px;
    }
  }
  .account{
    padding: 20px 0;
    color: #fff;
    p{
      line-height: 30px;
    }
    >div{
      width: 50%;
      text-align: center;
    }
    img{
      display: block;
      margin: 0 auto;
    }
  }
}

@media screen and (max-width: 1000px){
  .side-menu{
    .chinese{
      font-size: 24px;
    }
  }
  
}
.side-title{
  height: 100px;
}
</style>
