<template>
<div class="pc">
  <div class="header">
    <div class="top-txt">
      <div class="max-content">
        欢迎光临考研之窗MBA官方网站！
      </div>
    </div>
  </div>
  <content-wrap></content-wrap>
</div>
</template>

<script>
import {
  commonLink,
  blank
} from '@/until/common'
import contentWrap from '../page'
export default {
  components: {
    contentWrap
  },
  data() {
    return {
      navList: [{
          name: "网站首页",
          id: 1
        },
        {
          name: "关于我们",
          id: 2
        },
        {
          name: "专业类别",
          id: 3
        },
        {
          name: "辅导体系",
          id: 4
        },
        {
          name: "提前面试",
          id: 5
        },
        {
          name: "新闻资讯",
          id: 6
        },
        {
          name: "联系我们",
          id: 7
        }
      ],
      active: 0,
      menuList: true,
      screenWidth: document.body.clientWidth,
      routeType: '',
      flagMenu: 'flagMenu'
    }
  },
  mounted() {
    if (sessionStorage.getItem("menuActive") == null) {
      sessionStorage.setItem("menuActive", 0)
    }
    this.active = sessionStorage.getItem("menuActive");
    //判断浏览器可可视宽度
    if (document.body.clientWidth < 800) {
      this.menuList = false;
    }
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        this.screenWidth = window.screenWidth;
        this.init(window.screenWidth)
      })()
    }
  },
  methods: {
    init(width) {
      if (width < 800) {
        this.menuList = false;
        this.flagMenu = 'flagMenu'
      } else {
        this.menuList = true;
      }
    },
    clickMenu(i, id) {
      window.open(commonLink, "framename");
      debugger
      if (this.screenWidth < 800) {
        this.menuList = false;
        this.flagMenu = 'flagMenu';
      }
      // sessionStorage.setItem("menuActive", i)
      /* this.active = i;
      switch (id) {
        case 1:
          this.$router.push({
            name: 'page'
          });
          break;
        case 2:
          this.$router.push({
            name: 'about'
          });
          break;
        case 3:
          this.$router.push({
            name: 'professional'
          });
          break;
        case 4:
          this.$router.push({
            name: 'tutoring'
          });
          break;
        case 5:
          this.$router.push({
            name: 'interview'
          });
          break;
        case 6:
          this.$router.push({
            name: 'information'
          });
          break;
        case 7:
          this.$router.push({
            name: 'contact'
          });
          break;
        default:
          return;
      } */
    },

    clickIcon() {
      this.flagMenu = '';
      this.menuList = !this.menuList
    },
    goSession() {
      window.open(commonLink, "framename")
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: relative;

  .menu-icon {
    position: fixed;
    right: 10px;
    display: none;
  }
}

.top-txt {
  width: 100%;
  height: 39px;
  background-image: url('~@/assets/nav.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: relative;

  >div {
    color: #fff;
    font-size: 14px;
    height: 39px;
    line-height: 39px;
  }
}

.nav {
  height: 100px;

  .logo {
    width: 30%;

    img {
      padding: 31px 0;
    }
  }

  .nav-content {
    width: 70%;

    padding: 30px 0;

    li {
      width: calc(100% / 7);
      text-align: center;
      cursor: pointer;

      span {
        display: block;
        width: 80px;
        height: 40px;
        line-height: 40px;
        margin: 0 auto;
        border-radius: 5px;

        &.active {
          color: #fff;
          background-color: #0672c2;
        }
      }
    }
  }
}

@media screen and (max-width: 800px) {
  .top-txt {
    display: none;
  }

  .header {
    background-color: #fff;

    .menu-icon {
      display: block;
      right: 10px;
      top: 15px;
      z-index: 1000;

      img {
        width: 36px;
        height: 36px;
      }
    }
  }

  .nav {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: block;
    width: 100%;
    max-width: 100%;
    height: 60px;
    z-index: 100;
    background-color: #fff;

    .logo {
      img {
        padding: 15px 10px;
        width: 150px;
      }
    }

    .nav-content {
      width: 100%;
      background-color: #fff;
      padding: 0;
      transition: all 0.3s initial;

      .flex-between {
        display: block;
      }

      li {
        width: 100%;
        border-bottom: 1px solid #ccc;

        span {
          width: 100%;
          height: 40px;
          line-height: 40px;
        }
      }
    }
  }
}

.flagMenu {
  display: block;
}

.mybox-enter-active {
  transition: all .3s ease;
}

.mybox-leave-active {
  // transition: all .1s;
}

.mybox-leave-active,
.mybox-enter {
  height: 0px !important;
}

.mybox-leave,
.mybox-enter-active {
  height: 300px;
}
</style>
