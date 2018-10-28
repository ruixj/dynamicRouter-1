<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <sidebar class="sidebar-container"></sidebar>
    <router-view/>
  </div>
</template>

<script>
import sidebar  from '@/views/layout/components/sidebar'//页面布局的左侧菜单
export default {
  name: 'App' ,
  components: {
    sidebar 
  }  
}
</script>

<style>
body{
  margin:0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
}
</style>
