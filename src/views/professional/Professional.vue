<template>
<div class="professional page-module">
  <div class="top-img">
    <img :src="professionalObj.topImg" alt="">
  </div>
  <div class="max-content">
    <div class="wrap flex-between">
      <div class="side">
        <side-menu sideChinese="专业类别" sideEnglish="Professional category"></side-menu>
      </div>
      <div class="content">
        <div class="content-title">
          <div class="title">{{professionalObj.maxTitle}}</div>
          <div class="line"></div>
        </div>
        <div class="detail flex-between">
          <div class="item" v-for="(item,i) in professionalObj.professionalList" :key="i">
            <div class="pic">
              <img :src="item.imgUrl" alt="">
            </div>
            <div class="text">{{item.text}}</div>
          </div>
          <div class="view-more">查看更多</div>
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
      professionalObj: {
        topImg:'',
        maxTitle: '',
        professionalList:[]
      }
    }
  },
  mounted(){
    this.init();
  },
  methods:{
    init(){
      this.professionalObj = data.professionalObj;
    }
  }
}
</script>

<style lang="scss" scoped>
.professional {
  .content {
    .detail {
      .item {
        width: calc(100% / 4 - 25px);
        overflow: hidden;
        text-align: center;
        border: 1px solid #ccc;
        margin-bottom: 30px;
        cursor: pointer;

        .pic {
          width: 200px;
          margin: 0 auto;
          overflow: hidden;

          &:hover {
            img {
              transform: scale(1.07, 1.07);
            }
          }

          img {
            width: 100%;
            transition: all 0.5s;
          }
        }

        .text {
          line-height: 60px;
          font-size: 18px;
          color: #333;
          font-weight: bold;
        }
      }
    }
  }
}

@media screen and (max-width: 800px) {
  .professional {
    .content {
      .detail {
        .item {
          width: calc(100% / 3 - 10px);
          .pic{
            width: auto;
            img{
              width: 100%;
            }
          }
          .text{
            font-size: 16px;
            line-height: 40px;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 800px) {
  .professional{
    .content{
      .detail{
        .item{
          width: calc(100% / 2 - 5px);
          margin-bottom: 20px;
          .text{
            font-size: 14px;
            line-height: 30px;
          }
        }
      }
    }
  }
}
</style>
