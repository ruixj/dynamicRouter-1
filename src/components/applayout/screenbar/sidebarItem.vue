<template>
  <div class="menu-wrapper">
    <template v-for="item in routes">
      <router-link  :to="item.path">
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
  },
  methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
  }
}
</script>
<style>
</style
