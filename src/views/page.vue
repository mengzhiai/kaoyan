<template>
<div>
  <div class="swiper-container" ref="slider">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,i) in bannerList" :key="i">
        <img :src="item.imgURL" alt="">
      </div>
    </div>
    <div class="swiper-pagination"></div>
    <!--
      <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    -->
  </div>
  <div class="introduce">
    <div class="max-content">
      <div class="common-title">
        <div class="title">2020年一个硕士文凭，跑赢80%职场人</div>
        <div class="title-en">
          <img src="@/assets/take-tit.png" alt="">
        </div>
      </div>
      <div class="introduce-wrap">
        <div class="item" v-for="(item,i) in introduceList" :key="i">
          <div class="pic">

          </div>
          <div class="txt">
          </div>
          <div class="box">

          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Swiper from 'swiper';
export default {
  data() {
    return {
      bannerList: [{
          imgURL: require("@/assets/banner1.png"),
          id: 1
        },
        {
          imgURL: require("@/assets/banner2.png"),
          id: 2
        },
        {
          imgURL: require("@/assets/banner3.png"),
          id: 3
        }
      ],
      introduceList: [
        {

        }
      ]
    }
  },
  mounted() {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      // freeMode: true,
      // loop: true,
      speed: 1000,
      // autoplay: 1000,
      spaceBetween: 30,
      autoplay: true,
      autoplayDisableOnInteraction: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    });

  }
}
</script>

<style lang="scss" scoped>
@import '../styles/swiper.css';

.swiper-container {
  img {
    width: 100%;
    max-height: 600px;
  }
}

.introduce {
  padding: 80px 0;
  .introduce-wrap{
    margin: 0 -20px;
    .item{
      width: calc(100% / 4);
      padding: 0 20px;
    }
  }
}
</style>
