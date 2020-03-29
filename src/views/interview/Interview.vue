<template>
<div class="interview page-module">
  <div class="top-img">
    <img :src="interviewObj.topImg" alt="">
  </div>
  <div class="max-content">
    <div class="wrap flex-between">
      <div class="side">
        <side-menu sideChinese="提前面试" sideEnglish="Advance interview"></side-menu>
      </div>
      <div class="content">
        <div class="content-title">
          <div class="title">{{interviewObj.maxTitle}}</div>
          <div class="line"></div>
        </div>
        <div class="detail flex-between">
          <div class="item" v-for="(item,i) in interviewObj.interviewList" :key="i">
            <div class="des">{{item.description}}</div>
            <div class="pic">
              <img :src="item.imgUrl" alt="">
            </div>
            <div class="text overflow">{{item.text}}</div>
            <div class="btn">了解详情</div>
          </div>
        </div>
        <div class="detail2">
          <div class="pic">
            <img src="@/assets/interview-pic1.jpg" alt="">
          </div>
          <div class="merit">
            <div class="merit-title">{{interviewObj.meritTitle}}</div>
            <p v-for="(item,i) in interviewObj.meritList" :key="i">{{item.text}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import sideMenu from '@/components/SideMenu.vue'
export default {
  components: {
    sideMenu
  },
  data() {
    return {
      interviewObj: {
        topImg: '',
        maxTitle: '',
        interviewList:[]

      }
    }
  },
  mounted() {
    this.axios.get('/data').then(res => {
      this.interviewObj = res.data.interviewObj;
    })
  }
}
</script>

<style lang="scss" scoped>
.interview {
  .detail {
    margin: 40px 0 0;

    .item {
      width: calc(100% / 3 - 20px);
      text-align: center;
      margin-bottom: 60px;
      border: 1px solid #ccc;
      padding: 30px 0;
      transition: all .2s linear;

      &:hover {
        box-shadow: 0 0 10px 1px #ddd;
        transform: translate3d(0, -2px, 0);
      }

      .des {
        font-size: 18px;
        font-weight: bold;
        margin: 20px 0;
      }

      .pic {
        height: 90px;
      }

      .text {
        width: 80%;
        margin: 0 auto;
        line-height: 30px;
        text-align: left;
      }

      .btn {
        width: 60%;
        height: 30px;
        line-height: 30px;
        border-radius: 20px;
        margin: 20px auto;
        border: 1px solid #ccc;
        cursor: pointer;

        &:hover {
          color: #fff;
          background-color: #0877c2;
        }
      }
    }
  }

  .merit {
    margin: 20px 0;
    text-indent: 30px;
    line-height: 30px;
  }
}

@media screen and (max-width: 800px){
  .interview{
    .detail{
      margin: 20px 0;
      .item{
        width: calc(100% / 3 - 10px);
        padding: 15px 0;
        margin-bottom: 20px;
        .pic{
          height: 70px;
        }
        .text{
          line-height: 24px;
        }
      }
    }
    .detail2{
      .pic{
        img{
          width: 100%;
        }
      }
    }
  }
}

@media screen and (max-width: 600px){
  .interview{
    .detail{
      .item{
        width: calc(100% / 3 - 5px);
        padding: 5px 0;
        margin-bottom: 10px;
        .des{
          margin: 10px 0;
          font-size: 14px;
        }
        .btn{
          color: #fff;
          background-color: #0877c2;
          height: 26px;
          line-height: 26px;
          margin: 10px auto;
        }
      }
    }
  }
}
</style>
