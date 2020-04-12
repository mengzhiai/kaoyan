<template>
  <div>
    <div class="swiper-container" ref="slider">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(item, i) in bannerList"
          :key="i"
          @click="goSession"
        >
          <img :src="item.imgURL" alt="" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="introduce common-module">
      <div class="max-content">
        <common-title
          :titleName="introduceObj.titleName"
          :imgSrc="require('@/assets/take-tit.png')"
        ></common-title>
        <div class="introduce-wrap flex-center">
          <div
            class="item"
            v-for="(item, i) in introduceObj.introduceList"
            :key="i"
            @click="goSession"
          >
            <div>
              <div class="pic pic1">
                <img :src="item.imgSrc" />
              </div>
              <div class="pic pic2">
                <img :src="item.imgSrcActive" />
              </div>
            </div>
            <div class="txt">
              {{ item.name }}
            </div>
            <div class="box">
              {{ item.txt }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="consult common-module">
      <common-title
        :titleCol="titleWhite"
        :titleName="consultObj.titleName"
        :imgSrc="require('@/assets/consult-tit.png')"
      ></common-title>
      <div class="max-content">
        <div class="wrap flex-center">
          <div
            class="item"
            v-for="(item, i) in consultObj.consultList"
            :key="i"
            @click="goSession"
          >
            <div class="pic">
              <img :src="item.imgSrc" alt="" />
            </div>
            <div class="txt">{{ item.txt }}</div>
            <div class="more" @click.stop="goSession">{{ item.more }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="main-two">
      <div class="two-content">
        <div class="two-content-title"></div>
        <common-title
          :titleName="programObj.titleName"
          :imgSrc="require('@/assets/two-content-text.png')"
        ></common-title>
        <div class="two-content-img2 clearfloat">
          <div class="two-content-img2-left">
            <ul class="labels clearfloat">
              <li @click="goSession()">提前面试</li>
              <li @click="goSession()">网上报名</li>
              <li @click="goSession()">现场确认</li>
              <li @click="goSession()">笔试考试</li>
              <li @click="goSession()">院校复试</li>
            </ul>
            <ul class="lines clearfloat">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li class="noneRight"></li>
            </ul>
            <ul class="btns clearfloat">
              <li @click="goSession()">2020年3 - 10月</li>
              <li @click="goSession()">2020年10月开始</li>
              <li @click="goSession()">2020年11月开始</li>
              <li @click="goSession()">2020年12月考试</li>
              <li @click="goSession()" class="noneRight">2021年3 - 4月</li>
            </ul>
          </div>
          <div class="two-content-img2-right">
            <div class="studio" @click="goLink()">
              <div class="studio-inner">
                <p class="p1">录取入学</p>
                <p class="p2">2021年4-10月</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flow common-module" v-if="false">
      <common-title
        titleName="2020年在职硕士报考流程"
        :imgSrc="require('@/assets/flow-tit.png')"
      ></common-title>
      <div class="max-content flex-baseline">
        <div class="wrap">
          <div class="step flex">
            <div class="item" v-for="(item, i) in flowObject.stepList" :key="i">
              {{ item }}
            </div>
          </div>
          <div class="line flex">
            <div
              class="item"
              v-for="(item, i) in flowObject.stepList.length"
              :key="i"
            ></div>
          </div>

          <div class="date flex">
            <div class="item" v-for="(item, i) in flowObject.dateList" :key="i">
              {{ item }}
            </div>
          </div>
        </div>
        <div class="import"></div>
      </div>
    </div>
    <div class="select-major common-module">
      <common-title
        :titleCol="titleWhite"
        :titleName="majorObj.titleName"
        :imgSrc="require('@/assets/major-tit.png')"
      ></common-title>
      <div class="max-content">
        <div class="wrap">
          <div class="item" v-for="(item, i) in majorObj.majorList" :key="i">
            <div class="school max">{{ item.school }}</div>
            <div class="min"><img src="@/assets/arrow.png" alt="" /></div>
            <div class="specialty max">{{ item.specialty1 }}</div>
            <div class="min"><img src="@/assets/arrow.png" alt="" /></div>
            <div class="specialty max">{{ item.specialty2 }}</div>
            <div class="min"><img src="@/assets/arrow.png" alt="" /></div>
            <div class="more max pointer" @click="goSession">
              {{ item.more }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="problem common-module">
      <common-title
        :titleName="problemObj.titleName"
        :imgSrc="require('@/assets/problem-tit.png')"
      ></common-title>
      <div class="max-content">
        <div class="wrap flex-between">
          <div class="pic">
            <img :src="problemObj.imgUrl" alt="" />
          </div>
          <div class="content">
            <div
              class="item"
              v-for="(item, i) in problemObj.problemList"
              :key="i"
              @click="goSession"
            >
              {{ item }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="curriculum common-module">
      <common-title
        :titleCol="titleWhite"
        :titleName="curriculumObj.titleName"
        :imgSrc="require('@/assets/curriculum-tit.png')"
      ></common-title>
      <div class="max-content">
        <div class="wrap flex-between">
          <div
            class="item"
            v-for="(item, i) in curriculumObj.curriculumList"
            :key="i"
            @click="goSession"
          >
            <div class="box">
              <div class="pic">
                <img :src="item.imgUrl" alt="" />
              </div>
              <div class="title">{{ item.title }}</div>
              <div class="type">{{ item.type }}</div>
              <div class="text overflow">{{ item.text }}</div>
              <div class="more" @click.stop="goSession">{{ item.more }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="service common-module">
      <common-title
        :titleName="serviceObj.titleName"
        :imgSrc="require('@/assets/service-tit.png')"
      ></common-title>
      <div class="max-content">
        <div class="wrap flex-between">
          <div
            class="item"
            v-for="(item, i) in serviceObj.serviceList"
            :key="i"
            @click="goSession"
          >
            <div class="pic"><img src="@/assets/people.png" alt="" /></div>
            <div class="tit">{{ item.title }}</div>
            <div class="text">
              <div>{{ item.text1 }}</div>
              <div>{{ item.text2 }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="interview common-module">
      <common-title
        :titleCol="titleWhite"
        :titleName="interviewObj.titleName"
        :imgSrc="require('@/assets/intervice-tit.png')"
      ></common-title>
      <div class="max-content">
        <div class="wrap flex-center">
          <div
            class="item"
            v-for="(item, i) in interviewObj.interviewList"
            :key="i"
            @click="goSession"
          >
            <div class="pic pic1">
              <img :src="item.imgUrl" alt="" class="img1" />
            </div>
            <div class="pic pic2">
              <img :src="item.imgActive" alt="" class="img2" />
            </div>
            <div class="description">{{ item.description }}</div>
          </div>
        </div>
        <div class="more" @click="goSession">查看更多</div>
      </div>
    </div>
    <div class="adventage common-module">
      <common-title
        :titleName="adventageObj.titleName"
        :imgSrc="require('@/assets/adventage-tit.jpg')"
      ></common-title>
      <div class="max-content">
        <div class="wrap flex">
          <div
            class="item"
            v-for="(item, i) in adventageObj.adventageList"
            :key="i"
            @click="goSession"
          >
            <div class="pic pic1">
              <img :src="item.imgUrl" alt="" />
            </div>
            <div class="pic pic2">
              <img :src="item.imgActive" alt="" />
            </div>
            <div class="view">{{ item.view }}</div>
            <div class="text">{{ item.text }}</div>
            <div class="other">{{ item.other }}</div>
          </div>
        </div>
        <div class="more" @click="goSession">查看更多</div>
      </div>
    </div>
  </div>
</template>

<script>
import { commonLink, blank } from "../until/common";
import Swiper from "swiper";
import commonTitle from "@/components/CommonTitle.vue";
import data from "@/data.json";
export default {
  components: {
    commonTitle,
  },
  data() {
    return {
      bannerList: [
        {
          imgURL: "/images/banner-new1.jpg",
          id: 1,
        },
        {
          imgURL: "/images/banner-new2.png",
          id: 2,
        },
        {
          imgURL: "/images/banner-new3.jpg",
          id: 3,
        },
      ],
      introduceObj: {},
      active: true,
      titleWhite: "title-white",

      //报名咨询
      consultObj: {},
      //报考流程
      flowObject: {},

      //报考院校
      majorObj: {},

      problemObj: {},

      curriculumObj: {},

      serviceObj: {},

      interviewObj: {},

      adventageObj: {},
      programObj: {},
    };
  },
  created() {},
  mounted() {
    console.log(JSON.stringify(this._data.serviceObj));
    this.init();
    var swiper = new Swiper(".swiper-container", {
      // slidesPerView: 1,
      // freeMode: true,
      // loop: true,
      speed: 2000,
      // spaceBetween: 30,
      autoplay: true,
      autoplayDisableOnInteraction: false,
      lazyLoading: true,
      lazyLoadingInPrevNext: true,
      lazyLoadingInPrevNextAmount: 1,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      paginationClickable: true,
    });
    this.interview();
  },
  methods: {
    init() {
      this.bannerList = data.bannerList;
      this.introduceObj = data.introduceObj;
      this.consultObj = data.consultObj;
      this.flowObject = data.flowObject;
      this.majorObj = data.majorObj;
      this.problemObj = data.problemObj;
      this.curriculumList = data.curriculumList;
      this.interviewList = data.interviewList;
      this.adventageObj = data.adventageObj;
      this.serviceObj = data.serviceObj;
      this.curriculumObj = data.curriculumObj;
      this.interviewObj = data.interviewObj;
      this.programObj = data.programObj;
    },
    interview() {
      this.init = setInterval(() => {
        this.light = this.light + 1;
        if (this.light > 3) {
          this.light = 1;
        }
      }, 3000);
    },
    goLink() {
      //window.open("http://www.kaoyanzhichuang.com/", '_blank')
      let doms = document.getElementById("nb_icon_wrap");
      const event = new Event("click");
      if (doms) {
        doms.dispatchEvent(event);
      }
    },
    goSession() {
      window.open(commonLink, "framename");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/swiper.css";

.swiper-container {
  .swiper-slide {
    cursor: pointer;

    img {
      cursor: pointer;
    }
  }
}

.swiper-container {
  z-index: -1;

  img {
    width: 100%;
    max-height: 700px;
  }
}

@media screen and (max-width: 600px) {
  .swiper-container {
    img {
      max-height: 200px;
    }
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

      .pic {
        text-align: center;
      }

      .pic1 {
        display: block;
      }

      .pic2 {
        display: none;
      }

      transition: all 0.3s;

      &:hover {
        border: 1px solid #ccc;
        color: #fff;

        .pic1 {
          display: none;
        }

        .pic2 {
          display: block;
        }
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

@media screen and(max-width: 800px) {
  .introduce {
    padding: 20px 0;

    .introduce-wrap {
      margin: 10px 0;
      flex-direction: row;
      flex-wrap: wrap;

      .item {
        width: calc(100% / 2 - 4px);
        padding: 20px 0;

        .box {
          width: 80%;
          margin: 0 auto;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
      }
    }
  }
}

@media screen and(max-width: 600px) {
  .introduce {
    .introduce-wrap {
      .item {
        padding: 10px 0;

        .pic {
          img {
            width: 60%;
          }
        }

        .txt {
          font-size: 14px;
          padding: 5px 0;
        }

        .box {
          font-size: 12px;
        }
      }
    }
  }
}

.consult {
  padding: 80px 0;
  width: 100%;
  // height: 600px;
  background: url("~@/assets/common-bac.png") no-repeat;
  background-size: 100% 500px;

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

@media screen and(max-width: 1200px) {
  .consult {
    margin: 0 0 80px;
    padding: 50px 0;
    height: auto;
    background-size: 100% 600px;
  }
}

@media screen and(max-width: 1000px) {
  .consult {
    .wrap {
      margin-top: 30px;

      .item {
        .txt {
          font-size: 20px;
          padding: 20px 0;
        }

        .more {
          font-size: 18px;
          height: 30px;
          line-height: 30px;
        }
      }
    }
  }
}

@media screen and(max-width: 800px) {
  .consult {
    padding: 20px 0;
    background-size: 100% 100%;

    .wrap {
      margin-top: 20px;
      justify-content: start;
      flex-direction: row;
      flex-wrap: wrap;

      .item {
        width: calc(100% / 2);
        margin-bottom: 30px;

        .pic {
          img {
            width: 30%;
            height: auto;
          }
        }
      }

      .item:nth-of-type(3) {
        display: none;
      }
    }
  }
}

@media screen and(max-width: 600px) {
  .consult {
    margin-bottom: 30px;

    .wrap {
      padding-top: 20px;

      .item {
        margin-bottom: 20px;

        .pic {
          height: 60px;
        }

        .txt {
          font-size: 16px;
          padding: 10px 0;
        }

        .more {
          height: 26px;
          line-height: 28px;
          font-size: 16px;
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
      background: url("~@/assets/label.png") no-repeat 100% 100%;
    }
  }

  .line {
    margin-top: 20px;

    .item {
      width: 158px;
      height: 118px;
      margin-right: 67px;
      background: url("~@/assets/lines.png") no-repeat 100% 100%;
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

@media screen and(max-width: 600px) {
}

.select-major {
  height: 660px;
  background: url("~@/assets/bg-4.png") no-repeat;
  background-size: 100% 100%;
  padding: 60px 0 0;

  .wrap {
    margin: 60px 0;

    .item {
      display: flex;

      > div {
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

    .more {
      &:hover {
        background-color: #fff489;
      }
    }
  }
}

@media screen and(max-width: 1000px) {
  .select-major {
    // height: 600px;
    height: auto;
    background-size: 100% 100%;
    padding: 30px 0;

    .wrap {
      margin: 20px 0 10px;

      .item {
        > div {
          font-size: 20px;

          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}

@media screen and(max-width: 800px) {
  .select-major {
    background-size: 100% 100%;
    padding: 20px 0;

    .wrap {
      margin: 10px 0 0;

      .item {
        > div {
          font-size: 16px;
          height: 30px;
          line-height: 30px;
        }
      }
    }
  }
}

@media screen and(max-width: 800px) {
  .select-major {
    .wrap {
      .item {
        > div {
          font-size: 14px;
          margin: 1px;
          line-height: 34px;
        }

        .max {
          padding: 0 2px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
}

.problem {
  margin: 60px 0;

  .wrap {
    margin: 50px 0;

    .pic,
    .content {
      width: 48%;
    }

    .pic {
      margin: 30px 0;

      img {
        width: 100%;
      }
    }

    .content {
      .item {
        width: 100%;
        height: 66px;
        line-height: 54px;
        color: #666;
        font-size: 28px;
        padding-left: 20px;
        margin-bottom: 15px;
        cursor: pointer;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        background: url("~@/assets/problem-bg.png") no-repeat 100% 100%;

        &:hover {
          color: #fff;
          background: url("~@/assets/problem-bg-active.png") no-repeat 100% 100%;
        }
      }

      .item:nth-child(2n) {
        color: #fff;
        background: url("~@/assets/problem-bg-active.png") no-repeat 100% 100%;
      }
    }
  }
}

@media screen and (max-width: 1000px) {
  .problem {
    margin: 40px 0;

    .wrap {
      .content {
        .item {
          height: 50px;
          line-height: 40px;
          font-size: 20px;
          padding-left: 10px;
          margin-bottom: 10px;
        }
      }
    }
  }
}

@media screen and (max-width: 800px) {
  .problem {
    .flex-between {
      display: block;
    }

    .wrap {
      .pic {
        width: 100%;
        margin: 10px 0;
      }

      .content {
        width: 100%;
        overflow: hidden;

        .item {
          background-size: 100% 100%;

          &:hover {
            color: #fff;
            background: url("~@/assets/problem-bg-active.png") no-repeat;
            background-size: 100% 100%;
          }
        }

        .item:nth-child(2n) {
          background-size: 100% 100%;
        }
      }
    }
  }
}

@media screen and (max-width: 800px) {
  .problem {
    margin: 30px 0 20px;

    .wrap {
      margin: 10px 0;
    }
  }
}

.curriculum {
  height: 760px;
  background: url("~@/assets/curriculum-bg.png") no-repeat;
  background-size: 100% 100%;
  padding: 50px 0 0;

  .wrap {
    padding: 50px 0;

    .item {
      width: 28%;
      padding: 20px;
      text-align: center;
      background-color: #fff;

      overflow: hidden;

      .box {
        transition: all 0.3s;

        &:hover {
          transform: scale(1.03, 1.03);
        }
      }

      .pic {
        img {
          width: 100%;
        }
      }

      .title {
        font-size: 24px;
        font-weight: bold;
        margin: 20px 0;
      }

      .type {
        font-size: 18px;
        font-weight: 700;
        margin: 10px 0;
      }

      .text {
        line-height: 26px;
      }

      .more {
        width: 173px;
        height: 33px;
        margin: 15px auto;
        background: #378fd0;
        color: #fff;
        text-align: center;
        line-height: 33px;
        font-size: 18px;
        border-radius: 5px;
        cursor: pointer;

        &:hover {
          background-color: #2768b6;
        }
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .curriculum {
    height: auto;
    padding: 30px 0;

    .wrap {
      padding: 30px 0;
    }
  }
}

@media screen and (max-width: 800px) {
  .curriculum {
    .wrap {
      padding: 10px 0;

      .item {
        width: calc(100% / 3 - 1%);
        padding: 0;

        .title {
          font-size: 18px;
          margin: 10px 0;
        }

        .type {
          font-size: 16px;
          margin: 5px 0;
        }

        .text {
          font-size: 14px;
          padding: 0 5px;
          line-height: 24px;
        }

        .more {
          width: 60%;
        }
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .curriculum {
    padding: 10px 0;

    .wrap {
      .item {
        padding-bottom: 20px;

        .title {
          font-size: 16px;
          margin: 5px 0;
        }

        .type {
          font-size: 14px;
        }

        .text {
          font-size: 12px;
          line-height: 20px;
        }

        .more {
          display: none;
          height: 20px;
          line-height: 22px;
          font-size: 14px;
        }
      }
    }
  }
}

.service {
  margin: 60px 0;

  .wrap {
    margin: 50px 0;

    .item {
      width: calc(100% / 4 - 20px);
      text-align: center;
      border: 1px solid #ccc;
      cursor: pointer;
      transition: all 0.2s linear;

      &:hover {
        // color: #fff;
        // background-color: #0672C2;
        box-shadow: 0 0 10px 1px #ddd;
        transform: translate3d(0, -2px, 0);
      }

      .pic {
        margin: 30px 0;
      }

      .tit {
        font-size: 30px;
        margin: 20px 0;
      }

      .text {
        font-size: 26px;

        > div {
          margin: 15px 0;
        }
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .service {
    .wrap {
      .item {
        .tit {
          font-size: 22px;
        }

        .text {
          font-size: 18px;
        }
      }
    }
  }
}

@media screen and (max-width: 800px) {
  .service {
    margin: 30px 0;

    .wrap {
      margin: 20px 0;

      .item {
        width: calc(100% / 2 - 10px);
        margin-bottom: 20px;

        .pic {
          margin: 10px 0;
        }

        .tit {
          font-size: 18px;
        }

        .text {
          font-size: 16px;
        }
      }
    }
  }
}

@media screen and (max-width: 800px) {
  .service {
    .wrap {
      .item {
        .pic {
          margin: 5px 0;

          img {
            width: 40%;
          }
        }

        .tit {
          font-size: 16px;
          margin: 5px 0;
          font-weight: bold;
        }

        .text {
          font-size: 14px;

          > div {
            margin: 10px 0;
          }
        }
      }
    }
  }
}

.interview {
  padding: 40px 0;
  width: 100%;
  // height: 940px;
  background: url("~@/assets/interview-bg.jpg") no-repeat;
  background-size: 100% 100%;

  .wrap {
    flex-direction: row;
    flex-wrap: wrap;
    background-color: #fff;
    margin: 50px 0;
  }

  .item {
    width: calc(100% / 4);
    text-align: center;
    // margin-bottom: 30px;
    padding: 50px 0;
    overflow: hidden;
    cursor: pointer;

    &:hover {
      color: #fff;
      background-color: #2768b6;

      .pic1 {
        display: none;
      }

      .pic2 {
        display: block;
      }
    }

    .pic {
      margin: 30px 50px;
    }

    .pic1 {
      display: block;
    }

    .pic2 {
      display: none;
    }

    .description {
      font-size: 22px;
    }
  }

  .item:nth-last-child(1) {
    display: none;
  }

  .more {
    width: 191px;
    height: 55px;
    line-height: 55px;
    text-align: center;
    color: #fff;
    background: #2768b6;
    margin: 50px auto;
    cursor: pointer;
  }
}

@media screen and (max-width: 1200px) {
  .interview {
    padding: 30px 0 20px;
    margin: 30px 0;

    .wrap {
      margin: 30px 0;
    }

    .item {
      padding: 30px 0;

      .description {
        font-size: 18px;
      }
    }
  }
}

@media screen and (max-width: 1000px) {
  .interview {
    .item {
      padding: 15px 0;

      .pic {
        img {
          width: 70%;
        }
      }

      .description {
        font-size: 16px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

    .more {
      width: 100px;
      height: 40px;
      line-height: 40px;
    }
  }
}

@media screen and (max-width: 800px) {
  .interview {
    .flex-center {
      justify-content: start;
    }

    .item {
      width: calc(100% / 3);

      .pic {
        img {
          width: 90%;
        }
      }
    }

    .item:nth-last-child(1) {
      display: block;
    }
  }
}

@media screen and (max-width: 600px) {
  .interview {
    margin: 20px 0;
    padding: 10px 0;

    .wrap {
      margin: 10px 0;
    }

    .item {
      padding: 5px 0;

      .pic {
        margin: 20px 30px;
      }

      .description {
        font-size: 14px;
        overflow: inherit;
        white-space: inherit;
        /* overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap; */
        height: 40px;
        padding: 0 3px;
      }
    }

    .more {
      margin: 20px auto 10px;
      height: 30px;
      line-height: 32px;
      font-size: 16px;
      border-radius: 5px;
    }
  }
}

.adventage {
  padding: 60px 0;
  background-color: #f0f0f0;

  .wrap {
    margin: 40px 0;
  }

  .item {
    width: calc(100% / 5);
    text-align: center;
    padding: 30px;
    cursor: pointer;

    &:hover {
      color: #fff;
      background: #2768b6;

      .pic1 {
        display: none;
      }

      .pic2 {
        display: block;
      }
    }

    .pic {
      height: 170px;
      line-height: 170px;
    }

    .pic1 {
      display: block;
    }

    .pic2 {
      display: none;
    }

    .view {
      margin: 20px 0;
      font-size: 22px;
      font-weight: bold;
    }
  }

  .item:nth-child(3) {
    .pic {
      img {
        margin: 50px 0;
      }
    }
  }

  .more {
    color: #fff;
    background: #2768b6;
    width: calc(100% / 5);
    height: 70px;
    margin: 0 auto;
    line-height: 70px;
    font-size: 24px;
    text-align: center;
    cursor: pointer;
  }
}

@media screen and (max-width: 1200px) {
  .adventage {
    .item {
      padding: 15px;
      width: 20%;

      .pic {
        width: 80%;
        margin: 0 auto;
        height: auto;
        line-height: normal;

        img {
          width: 100%;
        }
      }

      .text {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
    }

    .item:nth-child(3) {
      .pic {
        img {
          margin: 0;
        }
      }
    }
  }
}

@media screen and (max-width: 1000px) {
  .adventage {
    .item {
      .view {
        font-size: 18px;
        margin: 10px 0;
      }
    }
  }
}

@media screen and (max-width: 800px) {
  .adventage {
    padding: 30px 0;

    .flex {
      flex-direction: row;
      flex-wrap: wrap;
    }

    .item {
      width: calc(100% / 2);
      padding: 20px 0;

      .pic {
        text-align: center;

        img {
          width: 80%;
        }
      }
    }
    .item:nth-last-child(1) {
      display: none;
    }

    .more {
      width: 160px;
      height: 40px;
      border-radius: 5px;
      line-height: 40px;
      font-size: 20px;
    }
  }
}

@media screen and (max-width: 600px) {
  .adventage {
    padding: 10px 0 20px;

    .wrap {
      margin: 20px 0;
    }

    .item {
      .pic {
        height: 150px;

        img {
          width: 60%;
        }
      }

      .text {
        padding: 0 5px;
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .adventage {
    .item {
      .pic {
        height: 100px;
      }
    }

    .more {
      width: 100px;
      height: 30px;
      line-height: 30px;
      font-size: 16px;
    }
  }
}

.main-two {
  width: 100%;
  // height: 1304px;
  position: relative;

  .two-title {
    width: 100%;
    height: 482px;
    background: url("~@/assets/two-bg.png") no-repeat 100% 100%;

    .two-title-text {
      padding-top: 65px;
      font-size: 36px;
      color: #fff;
      text-align: center;
      font-weight: bold;
      letter-spacing: 3px;
    }

    .two-img {
      width: 100%;
      text-align: center;
      margin-top: 38px;

      img {
        margin: 0 auto;
      }
    }
  }

  .two-content {
    width: 100%;
    height: 560px;

    .two-content-title {
      font-size: 36px;
      text-align: center;
      font-weight: bold;
      letter-spacing: 2px;
    }

    .two-content-img {
      width: 100%;
      text-align: center;
      margin-top: 20px;

      img {
        margin: 0 auto;
      }
    }

    .two-content-img2 {
      width: 1366px;
      text-align: center;
      margin: 40px auto;

      .two-content-img2-right {
        cursor: pointer;
        width: 220px;
        height: 220px;
        margin-left: 10px;
        background: #e8f2fe;
        border-radius: 50%;
        overflow: hidden;
        float: left;
        text-align: center;

        .studio-inner {
          text-align: center;
          width: 186px;
          height: 186px;
          overflow: hidden;
          background: #8dbdfc;
          border-radius: 50%;
          margin: 0 auto;
          margin-top: 17px;

          .p1 {
            font-size: 30px;
            color: #fff;
            margin-top: 70px;
          }

          .p2 {
            font-size: 12px;
            color: #000;
            margin-top: 2px;
            font-weight: bold;
          }
        }
      }

      .two-content-img2-left {
        width: 1107px;
        padding-top: 34px;
        float: left;

        .labels {
          width: 100%;
          margin-left: 78px;

          li {
            width: 230px;
            height: 58px;
            line-height: 58px;
            background: url("~@/assets/label.png") no-repeat 100% 100%;
            text-align: center;
            float: left;
            margin-left: -25px;
            font-size: 24px;
            color: #666;
            cursor: pointer;

            &:hover {
              font-weight: bold;
            }
          }
        }

        .lines {
          margin-left: 87px;
          margin-top: 25px;

          li {
            width: 158px;
            height: 118px;
            background: url("~@/assets/lines.png") no-repeat 100% 100%;
            float: left;
            margin-right: 39px;
          }
        }

        .btns {
          li {
            width: 172px;
            height: 57px;
            line-height: 57px;
            font-size: 18px;
            box-sizing: border-box;
            float: left;
            border: 1px solid #0877c2;
            color: #0877c2;
            margin-right: 30px;
            cursor: pointer;

            &:hover {
              background: #0877c2;
              color: #fff;
            }
          }
        }
      }
    }

    .two-content-absolute {
      top: 238px;
      left: 0;
      right: 0;
      margin: auto;
      position: absolute;
      width: 83.3%;
      height: 375px;
      background: #fff;
      box-shadow: 2px 10px 1px rgba(73, 18, 19, 0.1);

      .two-content-absolute-ul {
        display: flex;
        height: 100%;
        width: 100%;
        justify-items: center;
        align-items: center;

        & > li {
          width: 100%;
          flex: 1;
          text-align: center;

          & > p {
            color: #666;
            font-size: 30px;
            font-weight: bold;
            margin: 33px 0 68px 0;
          }

          .two-content-absolute-btn {
            background: #0877c2;
            border-radius: 5px;
            font-size: 24px;
            color: #fff;
            width: 72%;
            margin: 0 auto;
            padding: 5px 0 8px 0;
            cursor: pointer;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1000px){
  .main-two{
    display: none;
  }
}
</style>
