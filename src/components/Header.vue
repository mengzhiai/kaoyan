<template>
<div class="header">
  <div class="top-txt">
    <div class="max-content">
      欢迎光临考研之窗MBA官方网站！
    </div>
  </div>
  <div class="nav max-content clearfix">
    <div class="logo fl">
      <img src="@/assets/logo.png" alt="考研之窗" />
    </div>
    <div class="nav-content fl">
      <ul>
        <li v-for="(item,i) in navList" :key="i" @click="clickMenu(i, item.id)">
          <span :class="{active : active == i}">{{item.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
export default {
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
    }
  },
  methods: {
    clickMenu(i, id) {
      this.active = i;
      /* switch (id) {
        case 1:
          this.$router.push({
            name: 'main'
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
            name: 'system'
          });
          break;
        case 5:
          this.$router.push({
            name: 'interview'
          });
          break;
        case 6:
          this.$router.push({
            name: 'news'
          });
          break;
        case 7:
          this.$router.push({
            name: 'tel'
          });
          break;
        default:
          return;
      } */
    },
  }
}
</script>

<style lang="scss" scoped>
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
      float: left;
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
</style>
