<template>
  <div class="footer">
    <div class="max-content">
      <div class="qr-code">
        <img :src="footerObj.qrCode" alt="" />
      </div>
      <div class="des">
        <div class="bac"></div>
        <div class="text">考研之窗 直击双一流</div>
      </div>
      <div class="tel">TEL:{{ footerObj.tel }}</div>
      <div class="foot-list flex-between">
        <div
          class="item"
          v-for="(item, i) in footList"
          :key="i"
          @click="goMenu(item.id)"
        >
          {{ item.name }}
        </div>
      </div>
      <div class="copyright">版权所有 ©2019沈阳研窗教育科技有限公司</div>
    </div>
  </div>
</template>

<script>
import data from "@/data.json";
export default {
  data() {
    return {
      footerObj: {
        qrCode: "/images/qrcode.jpg",
        tel: "400-969-0363",
      },
      footList: [
        {
          name: "网站首页",
          id: 1,
        },
        {
          name: "关于我们",
          id: 2,
        },
        {
          name: "专业类别",
          id: 3,
        },
        {
          name: "辅导体系",
          id: 4,
        },
        {
          name: "提前面试",
          id: 5,
        },
        {
          name: "新闻资讯",
          id: 6,
        },
        {
          name: "联系我们",
          id: 7,
        },
      ],
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.footerObj = data.footerObj;
    },
    goMenu(id) {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      switch (id) {
        case 1:
          this.$router.push({
            name: "page",
          });
          break;
        case 2:
          this.$router.push({
            name: "about",
          });
          break;
        case 3:
          this.$router.push({
            name: "professional",
          });
          break;
        case 4:
          this.$router.push({
            name: "tutoring",
          });
          break;
        case 5:
          this.$router.push({
            name: "interview",
          });
          break;
        case 6:
          this.$router.push({
            name: "information",
          });
          break;
        case 7:
          this.$router.push({
            name: "contact",
          });
          break;
        default:
          return;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: #f0f0f0;
  .qr-code {
    padding: 40px 0;
    text-align: center;
  }
  .des {
    position: relative;
    .bac {
      width: 80%;
      height: 2px;
      margin: 0 auto;
      background-color: #ccc;
    }
    .text {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      width: 300px;
      margin: -20px auto 0;
      text-align: center;
      font-size: 26px;
      background-color: #f0f0f0;
    }
  }
  .tel {
    margin: 30px 0;
    text-align: center;
    font-size: 24px;
  }
  .foot-list {
    width: 80%;
    margin: 0 auto;
    font-size: 20px;
    .item {
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .copyright {
    text-align: center;
    font-size: 18px;
    padding: 30px 0 10px;
  }
}

@media screen and (max-width: 800px) {
  .footer {
    .qr-code {
      padding: 30px 0;
    }
    .des {
      .bac {
        display: none;
      }
      .text {
        font-size: 18px;
      }
    }
    .tel {
      margin: 10px 0;
    }
    .foot-list {
      display: none;
    }
    .copyright {
      padding: 10px 0;
    }
  }
}

@media screen and (max-width: 600px) {
  .footer {
    .qr-code {
      padding: 15px 0;
      img {
        width: 100px;
      }
    }
    .des {
      .text {
        margin-top: 0px;
        position: relative;
        font-size: 14px;
      }
    }
    .tel{
      font-size: 16px;
      margin: 5px 0;
    }
    .copyright{
      font-size: 14px;
      padding: 5px 0;
    }
  }
}
</style>
