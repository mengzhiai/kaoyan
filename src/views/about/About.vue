<template>
<div class="about page-module">
  <div class="top-img">
    <img :src="aboutObj.topImg" alt="">
  </div>
  <div class="max-content">
    <div class="wrap flex-between">
      <div class="side">
        <side-menu sideChinese="关于我们" sideEnglish="About us"></side-menu>
      </div>
      <div class="content">
        <div class="content-title">
          <div class="title">{{aboutObj.maxTitle}}</div>
          <div class="line"></div>
        </div>
        <div class="detail">
          <div v-for="(item,i) in aboutObj.aboutList" :key="i">
            <p>{{item.text}}</p>
            <img :src="item.imgUrl" alt="" v-if="item.imgUrl != undefined && item.imgUrl != ''">
          </div>

        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import sideMenu from '@/components/SideMenu.vue'
export default {
  components: {
    sideMenu
  },
  data() {
    return {
      aboutObj: {
        topImg: '',
        maxTitle:'',
        aboutList:[]
      }
    }
  },
  mounted(){
    this.axios.get('/data').then(res=>{
      this.aboutObj = res.data.aboutObj;
    })
  }
}
</script>

<style lang="scss" scoped>
.about {
  /* .content {
    width: calc(100% - 300px);
  } */
  .detail{
    img{
      margin: 30px 0;
    }
  }
}
@media screen and (max-width: 1200px){
  .about{
    .detail{
      img{
        width: 100%;
      }
    }
  }
}
</style>
