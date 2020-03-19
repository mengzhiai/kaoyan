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
  }
}
</script>
