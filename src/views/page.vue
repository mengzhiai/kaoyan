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
        <div class="item" v-for="(item,i) in introduceList" :key="i">
          <div class="pic" v-if="false">
            <img v-if="active" :class="{active: item.active == true}" :src="item.imgSrc" />
            <img v-if="!active" :class="{active: item.active == false}" :src="item.imgSrcActive" />
          </div>
          <div>
            <div class="pic pic1">
              <img :src="item.imgSrc" />
            </div>
            <div class="pic pic2">
              <img :src="item.imgSrcActive" />
            </div>
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
  <div class="problem common-module">
    <common-title titleName="在职考研人，你是否面临以下问题？" :imgSrc="require('@/assets/problem-tit.png')"></common-title>
    <div class="max-content">
      <div class="wrap flex-between">
        <div class="pic">
          <img :src="problemObj.imgUrl" alt="">
        </div>
        <div class="content">
          <div class="item" v-for="(item,i) in problemObj.problemList" :key="i">{{item}}</div>
        </div>
      </div>
    </div>
  </div>
  <div class="curriculum common-module common-bac">
    <common-title :titleCol="titleWhite" titleName="在职考研就来考研之窗" :imgSrc="require('@/assets/curriculum-tit.png')"></common-title>
    <div class="max-content">
      <div class="wrap flex-between">
        <div class="item" v-for="(item,i) in curriculumList" :key="i">
          <div class="box">
            <div class="pic">
              <img :src="item.imgUrl" alt="">
            </div>
            <div class="title">{{item.title}}</div>
            <div class="type">{{item.type}}</div>
            <div class="text overflow">{{item.text}}</div>
            <div class="more">{{item.more}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="service common-module">
    <common-title titleName="专业的服务体系，享受私人订制" :imgSrc="require('@/assets/service-tit.png')"></common-title>
  </div>
  <div class="interview common-module">
    <common-title titleName="考研之窗提前面试课程内容" :imgSrc="require('@/assets/intervice-tit.png')"></common-title>
    <div class="max-content">
      <div class="wrap flex-center">
        <div class="item" v-for="(item,i) in interviewList" :key="i">
          <div class="box">
            <div class="pic">
              <img :src="item.imgUrl" alt="">
            </div>
            <div class="description">{{item.description}}</div>
          </div>
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
        name: '升职加薪',
        txt: '升职压力大，工作遇瓶颈，薪资停滞不前，职场越来越迷茫......',
        imgSrc: require('@/assets/introduce-pic2.png'),
        imgSrcActive: require('@/assets/introduce-pic2a.png'),
        imgActive: true
      }, {
        id: 3,
        name: '人脉圈子',
        txt: '人脉圈子越来越窄，视野和信息频频受阻，难有新发展......',
        imgSrc: require('@/assets/introduce-pic3.png'),
        imgSrcActive: require('@/assets/introduce-pic3a.png'),
        imgActive: true
      }, {
        id: 4,
        name: '自我提升',
        txt: '不想放弃赚钱的职场黄金期，又想拿个管理硕士文凭提升自己的竞争力......',
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
        },
        {
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
        },
        {
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
      ],

      problemObj: {
        imgUrl: require('@/assets/problem-left.jpg'),
        problemList: ['怎么结合自己的工作选择专业及院校？', '在职研究生的认可度如何？', '在职研跟全日制有什么区别？', '离开学校好多年,好多知识都忘了,怕考不过？', '我的工作忙，平时都没有时间学习？', '在职研究生，是双证学位吗？']
      },

      curriculumList: [{
          imgUrl: require('@/assets/curriculum-item1.jpg'),
          title: '笔试普通班',
          type: '院校：双非院校',
          text: '服务内容：报考指导 + 在线答疑 + 跟踪管理 + 信息更新 + 延保服务+模拟真题 +考试计划 + 报考指南 +随堂课件+重播视频了解详情',
          more: '了解更多'
        },
        {
          imgUrl: require('@/assets/curriculum-item2.jpg'),
          title: '笔面联报班',
          type: '院校：211高校',
          text: '服务内容：报考指导 + 在线答疑 + 跟踪管理 + 延保服务 + 模拟真题 +考试计划 + 报考指南 +随堂课件 + 重播视频+周末面授+面授材料+提面指导',
          more: '了解更多'
        },
        {
          imgUrl: require('@/assets/curriculum-item3.jpg'),
          title: '笔面保录班',
          type: '院校：985高校',
          text: '服务内容：报考指导 + 在线答疑 + 跟踪管理 + 模拟真题 + 报考指南 + 随堂课件 + 重播视频 + 周末面授 + 面试材料 + 提面指导',
          more: '了解更多'
        }
      ],

      interviewList: [{
          imgUrl: require('@/assets/interview1.png'),
          description: '专业一对一综合素质评估'
        },
        {
          imgUrl: require('@/assets/interview2.png'),
          description: '针对不同院校解读申请材料'
        },
        {
          imgUrl: require('@/assets/interview3.png'),
          description: '实战案例面试能力强化提升'
        },
        {
          imgUrl: require('@/assets/interview4.png'),
          description: '全真模拟面试'
        },
        {
          imgUrl: require('@/assets/interview5.png'),
          description: '面试资料准备填写指导'
        },
        {
          imgUrl: require('@/assets/interview6.png'),
          description: ''
        },
        {
          imgUrl: require('@/assets/interview7.png'),
          description: '面试英语个面指导'
        },
        {
          imgUrl: require('@/assets/interview8.png'),
          description: '实战模拟个面组面'
        },
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
  methods: {}
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

    .more {
      &:hover {
        background-color: #fff489;
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
        background: url('~@/assets/problem-bg.png') no-repeat 100% 100%;

        &:hover {
          color: #fff;
          background: url('~@/assets/problem-bg-active.png') no-repeat 100% 100%;
        }
      }

      .item:nth-child(2n) {
        color: #fff;
        background: url('~@/assets/problem-bg-active.png') no-repeat 100% 100%;
      }
    }
  }
}

.curriculum {
  height: 760px;
  background: url('~@/assets/curriculum-bg.png') no-repeat;
  padding: 60px 0 0;

  .wrap {
    padding: 50px 0;

    .item {
      width: 28%;
      padding: 20px;
      text-align: center;
      background-color: #fff;

      overflow: hidden;

      .box {
        transition: all .3s;

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
        background: #378FD0;
        color: #fff;
        text-align: center;
        line-height: 33px;
        font-size: 18px;
        border-radius: 5px;
        cursor: pointer;

        &:hover {
          background-color: #2768B6;
        }
      }
    }
  }
}

.service {
  margin: 60px 0;
}

.interview {
  padding: 60px 0;
  width: 100%;
  height: 1000px;
  background: url("~@/assets/interview-bg.jpg") no-repeat;
  background-size: cover;

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
    // padding: 30px;
    overflow: hidden;
    .box{
      transition: all .3s;
      &:hover{
        transform: scale(1.03,1.03);
        color: #fff;
        background-color: #2768b6;
      }
    }
    .pic {
      margin: 30px 0;
    }
  }
}
</style>
