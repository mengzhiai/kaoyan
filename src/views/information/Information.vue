<template>
<div class="information page-module">
  <div class="top-img">
    <img :src="informationObj.topImg" alt="">
  </div>
  <div class="max-content">
    <div class="wrap flex-between">
      <div class="side">
        <side-menu sideChinese="新闻资讯" sideEnglish="News and information"></side-menu>
      </div>
      <div class="content">
        <div class="content-title">
          <div class="title">{{informationObj.maxTitle}}</div>
          <div class="line"></div>
        </div>
        <div class="detail">
          <div class="item flex pointer" v-for="(item,i) in informationObj.informationList" :key="i">
            <div class="pic">
              <img :src="item.imgUrl" alt="">
            </div>
            <div class="info">
              <div class="flex-between">
                <div class="tit">{{item.title}}</div>
                <div class="time">{{item.time}}</div>
              </div>
              <div class="text overflow-two">{{item.text}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import sideMenu from '@/components/SideMenu.vue'
import data from '@/data.json'
export default {
  components: {
    sideMenu
  },
  data() {
    return {
      informationObj: {
        topImg:'',
        maxTitle: '',
        informationList:[]
      }
    }
  },
  mounted(){
    this.init();
  },
  methods:{
    init(){
      this.informationObj = data.informationObj;
    }
  }
}
</script>

<style lang="scss" scoped>
.information {
  .detail {

    .item {
      margin-bottom: 10px;
      padding: 20px;
      background-color: #f7f7f7;
      transition: all .2s linear;

      &:hover {
        box-shadow: 0 0 10px 1px #ddd;
        // transform: translate3d(0, -2px, 0);
      }

      .pic {
        width: 180px;
      }

      .info {
        width: calc(100% - 200px);
      }

      .tit {
        font-weight: bold;
        margin: 10px 0;
      }

      .text {
        font-size: 14px;
        line-height: 28px;
      }
    }
  }
}

@media screen and (max-width: 800px) {
  .information {
    .detail {
      .item {
        padding: 10px 0;
        .tit{
          margin: 5px 0;
        }
        .text{
          line-height: 24px;
        }
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .information{
    .detail{
      .item{
        padding: 5px;
        .info{
          width: calc(100% - 140px);
        }
        .tit{
          margin: 2px 0;
        }
        .text{
          font-size: 12px;
          line-height: normal;
        }
      }
    }
  }
}
</style>
