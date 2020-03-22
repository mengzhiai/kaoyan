<template>
<div class="about">
  <div class="max-content">
    <div class="wrap flex-between">
      <div class="side">
        <side-menu sideChinese="专业类别" sideEnglish="Professional category"></side-menu>
      </div>
      <div class="content">
        <div class="content-title">
          <div class="title">在职硕士专业类别</div>
          <div class="line"></div>
        </div>
        
      </div>
    </div>
  </div>
</div>
</template>

<script>
import sideMenu from '@/components/SideMenu.vue'
export default {
  components: {
    sideMenu
  }
}
</script>

<style lang="scss" scoped>
.about{
  .content{
    width: calc(100% - 260px);
  }
}
</style>
