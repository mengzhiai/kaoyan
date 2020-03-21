<template>
<div class="max-content">
  <div class="common-title">
    <div class="title" :class="titleCol">{{titleName}}</div>
    <div class="title-en">
      <img :src="imgSrc" alt="">
    </div>
  </div>
</div>
</template>

<script>
export default {
  props:{
    titleName: String,
    imgSrc: String,
    titleCol: String
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.common-title{
}
</style>
