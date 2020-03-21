<template>
<div>
  <div class="swiper-container" ref="slider">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,i) in bannerList" :key="i">
        <img :src="item.imgURL" alt="">
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
  <div class="introduce common-module">
    <div class="max-content">
      <common-title titleName="2020年一个硕士文凭，跑赢80%职场人" :imgSrc="require('@/assets/take-tit.png')"></common-title>
      <div class="introduce-wrap flex-center">
        <div class="item" v-for="(item,i) in introduceList" :key="i" @mouseover="mouseOver(item)" @mouseleave="mouseLeave(item)">
          <div class="pic">
            <img v-if="active" :class="{active: item.active == true}" :src="item.imgSrc" />
            <img v-if="!active" :class="{active: item.active == false}" :src="item.imgSrcActive" />
          </div>
          <div class="txt">
            {{item.name}}
          </div>
          <div class="box">
            {{item.txt}}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="consult common-module common-bac">
    <common-title :titleCol="titleWhite" titleName="在职硕士报名咨询" :imgSrc="require('@/assets/consult-tit.png')"></common-title>
    <div class="max-content">
      <div class="wrap flex-center">
        <div class="item" v-for="(item,i) in consultList" :key="i">
          <div class="pic">
            <img :src="item.imgSrc" alt="">
          </div>
          <div class="txt">{{item.txt}}</div>
          <div class="more">{{item.more}}</div>
        </div>
      </div>
    </div>

  </div>
  <div class="flow common-module" v-if="false">
    <common-title titleName="2020年在职硕士报考流程" :imgSrc="require('@/assets/flow-tit.png')"></common-title>
    <div class="max-content flex-baseline">
      <div class="wrap">
        <div class="step flex">
          <div class="item" v-for="(item,i) in flowObject.stepList" :key="i">{{item}}</div>
        </div>
        <div class="line flex">
          <div class="item" v-for="(item, i) in flowObject.stepList.length" :key="i"></div>
        </div>

        <div class="date flex">
          <div class="item" v-for="(item, i) in flowObject.dateList" :key="i">{{item}}</div>
        </div>
      </div>
      <div class="import">
      </div>
    </div>

  </div>
  <div class="select-major common-module">
    <common-title :titleCol="titleWhite" titleName="2020在职硕如何选择报考院校" :imgSrc="require('@/assets/major-tit.png')"></common-title>
    <div class="max-content">
      <div class="wrap">
        <div class="item flex" v-for="(item,i) in majorList" :key="i">
          <div class="school max">{{item.school}}</div>
          <div class="min"><img src="@/assets/arrow.png" alt=""></div>
          <div class="specialty max">{{item.specialty1}}</div>
          <div class="min"><img src="@/assets/arrow.png" alt=""></div>
          <div class="specialty max">{{item.specialty2}}</div>
          <div class="min"><img src="@/assets/arrow.png" alt=""></div>
          <div class="more max pointer">{{item.more}}</div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Swiper from 'swiper';
import commonTitle from '@/components/CommonTitle.vue'
export default {
  components: {
    commonTitle
  },
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
      introduceList: [{
        id: 1,
        name: '学历受限',
        txt: '虽然已是管理层，但每次都不愿意透露自己专本科学历......',
        imgSrc: require('@/assets/introduce-pic1.png'),
        imgSrcActive: require('@/assets/introduce-pic1a.png'),
        imgActive: true
      }, {
        id: 2,
        name: '学历受限',
        txt: '虽然已是管理层，但每次都不愿意透露自己专本科学历......',
        imgSrc: require('@/assets/introduce-pic2.png'),
        imgSrcActive: require('@/assets/introduce-pic2a.png'),
        imgActive: true
      }, {
        id: 3,
        name: '学历受限',
        txt: '虽然已是管理层，但每次都不愿意透露自己专本科学历......',
        imgSrc: require('@/assets/introduce-pic3.png'),
        imgSrcActive: require('@/assets/introduce-pic3a.png'),
        imgActive: true
      }, {
        id: 4,
        name: '学历受限',
        txt: '虽然已是管理层，但每次都不愿意透露自己专本科学历......',
        imgSrc: require('@/assets/introduce-pic4.png'),
        imgSrcActive: require('@/assets/introduce-pic4a.png'),
        imgActive: true
      }],
      active: true,
      titleWhite: 'title-white',

      //报名咨询
      consultList: [{
          id: 1,
          imgSrc: require('@/assets/consult1.png'),
          txt: '报考条件查询',
          more: '了解更多'
        },
        {
          id: 2,
          imgSrc: require('@/assets/consult2.png'),
          txt: '报考院校选择',
          more: '了解更多'
        },
        {
          id: 3,
          imgSrc: require('@/assets/consult3.png'),
          txt: '报考专业选择',
          more: '了解更多'
        },
        {
          id: 4,
          imgSrc: require('@/assets/consult4.png'),
          txt: '提前面试信息',
          more: '了解更多'
        },
        {
          id: 5,
          imgSrc: require('@/assets/consult5.png'),
          txt: '考试科目信息',
          more: '了解更多'
        }
      ],
      //报考流程
      flowObject: {
        stepList: ["提前面试", "网上报名", "现场确认", "笔试考试", "院校复试"],
        dateList: ["2020年3 - 10月", "2020年10月开始", "2020年11月开始", "2020年12月考试", "2021年3 - 4月"]
      },

      //报考院校
      majorList: [{
          school: '东北大学',
          specialty1: '金融专业',
          specialty2: '财务专业',
          more: '了解详情>>'
        },
        {
          school: '东北大学',
          specialty1: '金融专业',
          specialty2: '财务专业',
          more: '了解详情>>'
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

  },
  methods: {
    mouseOver(item) {
      // item.imgActive = false;
      this.active = !item.imgActive;
    },
    mouseLeave(item) {
      this.active = item.imgActive;
    }
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
  padding: 60px 0 20px;

  .introduce-wrap {
    margin: 50px 0;

    .item {
      padding: 40px 20px;
      width: calc(100% / 4);
      border: 1px solid #fff;
      cursor: pointer;
      position: relative;
      transition: all 0.3s;

      &:hover {
        border: 1px solid #ccc;

        .cover {
          display: block;
        }

        color: #fff;
      }

      .pic,
      .txt {
        text-align: center;
      }

      /* .cover{
        position: absolute; left: 0; top: 0; width: 100%; height: 100%; background: url('~@/assets/black.png') repeat; display: none;
      } */

      .txt {
        font-size: 28px;
        font-weight: bold;
        padding: 20px 0;
      }

      .box {
        font-size: 18px;
      }
    }

    .item:nth-child(1) {
      &:hover {
        background: #e73641;
      }
    }

    .item:nth-child(2) {
      &:hover {
        background: #fcb201;
      }
    }

    .item:nth-child(3) {
      &:hover {
        background: #6bc624;
      }
    }

    .item:nth-child(4) {
      &:hover {
        background: #0c97d5;
      }
    }
  }
}

.consult {
  padding: 60px 0;

  .wrap {
    margin-top: 60px;
    padding: 30px 0;
    background-color: #fff;
    box-shadow: 2px 10px 1px rgba(73, 18, 19, 0.1);

    .item {
      text-align: center;
      width: calc(100% / 5);

      .pic {
        img {
          width: 60px;
          height: 60px;
        }
      }

      .txt {
        color: #666;
        font-size: 30px;
        font-weight: bold;
        padding: 50px 0;
      }

      .more {
        width: 60%;
        height: 44px;
        line-height: 44px;
        color: #fff;
        border-radius: 5px;
        margin: 0 auto;
        font-size: 22px;
        cursor: pointer;
        background-color: #0877c2;

        &:hover {
          background-color: #0b67a5;

        }
      }
    }
  }
}

.flow {
  margin: 60px auto;

  .wrap {
    width: 80%;
  }

  .step {
    margin-left: 80px;

    .item {
      width: 230px;
      height: 58px;
      line-height: 58px;
      text-align: center;
      margin-left: -25px;
      font-size: 24px;
      color: #666;
      cursor: pointer;
      background: url('~@/assets/label.png') no-repeat 100% 100%;
    }
  }

  .line {
    margin-top: 20px;

    .item {
      width: 158px;
      height: 118px;
      margin-right: 67px;
      background: url('~@/assets/lines.png') no-repeat 100% 100%;

    }
  }

  .date {
    .item {
      width: calc(100% / 5 - 80px);
      height: 57px;
      line-height: 57px;
      margin: 0 30px 0 -20px;
      font-size: 18px;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      border: 1px solid #0877c2;
      color: #0877c2;
      cursor: pointer;
    }
  }
}

.select-major {
  height: 700px;
  background: url('~@/assets/bg-4.png') no-repeat;
  padding: 60px 0 0;

  .wrap {
    margin: 60px 0;

    .item {
      >div {
        text-align: center;
        font-size: 24px;
        color: #333;
        margin: 2px;
      }
    }

    .max {
      width: 20%;
      height: 56px;
      line-height: 56px;
      background-color: #eee699;
    }

    .specialty {
      background-color: #cde0fa;
    }

    .min {
      width: calc((100% - 80%) / 3);
    }
    .more{
      &:hover{
        background-color: #fff489;
      }
    }
  }
}
</style>
