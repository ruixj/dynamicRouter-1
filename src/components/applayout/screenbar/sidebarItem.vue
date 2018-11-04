<template>
  <div class="menu-wrapper">
    <template v-for="item in routes">
      <router-link  :to="item.path" :key="item.name">
        <el-menu-item :index="item.path"  >
          <span >{{item.name}}</span>
        </el-menu-item>
      </router-link>
    </template>
  </div>
</template>

<script>
export default {
  name: 'sidebarItem',
  props: {
    routes: {
      type: Array
    },
    isNest: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style>
</style
