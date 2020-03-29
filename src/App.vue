<template>
<div id="app">
  <router-view />
</div>
</template>

<script>
export default {
  data() {
    return {
      a: '1',
    }
  },
  mounted() {
    /* if (this._isMobile()) {
      this.$router.push({
        name: 'HomeH5'
      })
    } else {
      this.$router.push({
        name: 'HomePC'
      })
    } */
  },
  methods: {
    _isMobile() {
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag;
    }
  }

}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
