<template>
  <div class="app-wrapper">
    <screenbar class="sidebar-container"></screenbar>
    <div class="screen-container">
      <app-main></app-main>
    </div>
  </div>
</template>
a
<script>
import AppMain  from '@/components/applayout/AppMain'//页面布局的右侧区域
import screenbar  from '@/components/applayout/screenbar'//页面布局的左侧菜单 

export default {
  name: 'layout',
  components: {
    screenbar,
    AppMain
  }
}
</script>

<style scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
