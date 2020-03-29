<template>
<div class="tutoring page-module">
  <div class="top-img">
    <img :src="tutoringObj.topImg" alt="">
  </div>
  <div class="max-content">
    <div class="wrap flex-between">
      <div class="side">
        <side-menu sideChinese="辅导体系" sideEnglish="Tutoring system"></side-menu>
      </div>
      <div class="content">
        <div class="content-title">
          <div class="title">{{tutoringObj.maxTitle1}}</div>
          <div class="line"></div>
        </div>
        <div class="detail flex-center">
          <div class="item" v-for="(item,i) in tutoringObj.tutoringList" :key="i">
            <div class="pic">
              <img :src="item.imgUrl" alt="">
            </div>
            <div class="des">{{item.description}}</div>
            <div class="text">{{item.text}}</div>
          </div>
        </div>
        <div class="coach">
          <div class="content-title">
            <div class="title">{{tutoringObj.maxTitle2}}</div>
            <div class="line"></div>
          </div>
          <div class="detail">
            <img :src="tutoringObj.coachMore" alt="">
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
      tutoringObj: {
        topImg:'',
        maxTitle1:'',
        maxTitle2:'',
        tutoringList:[]

      }
    }
  },
  mounted() {
    this.init();
  },
  methods:{
    init(){
      this.tutoringObj = data.tutoringObj;
    }
  }
}
</script>

<style lang="scss" scoped>
.tutoring {
  .detail {
    .item {
      width: calc(100% / 2);
      text-align: center;
      margin-bottom: 60px;

      .des {
        font-size: 18px;
        font-weight: bold;
        padding: 20px 0;
      }

      .text {
        width: 80%;
        margin: 0 auto;
      }
    }
  }

  .coach {
    .detail {
      text-align: center;
    }
  }
}

@media screen and (max-width: 800px) {
  .tutoring {
    .detail {
      flex-direction: row;
      flex-wrap: wrap;

      .item {
        width: calc(100% / 2);
        margin-bottom: 25px;

        .text {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
      }
    }
  }

  .coach {
    .detail {
      img {
        width: 100%;
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .tutoring {
    .detail {
      .item {
        .pic {
          height: 40px;
        }

        .des {
          padding: 15px 0;
        }
      }
    }
  }
}
</style>
