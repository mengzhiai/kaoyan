<template>
<div class="home">
  <header-component></header-component>
  <div class="container-box">
    <router-view></router-view>
  </div>
  <footer-component></footer-component>
</div>
</template>

<script>
// @ is an alias to /src
import headerComponent from '@/components/Header.vue'
import footerComponent from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    headerComponent,
    footerComponent
  },
  data() {
    return {

    }
  },
  mounted() {
    /* window.addEventListener('beforeunload', e => {
      window.localStorage.removeItem('menuActive')
    }); */
    window.onbeforeunload = function (e) {
      var storage = window.localStorage;
      storage.clear()
    }
  },
}
</script>

<style scoped>
@media screen and (max-width: 800px) {
  .container-box {
    padding-top: 60px;
  }
}
</style>
