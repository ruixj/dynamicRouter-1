<template>
    <el-menu mode="vertical" unique-opened :default-active="$route.path" @select="handleSelect" background-color="#304156" text-color="#fff" active-text-color="#409EFF">
      <sidebar-item :routes="routes"></sidebar-item>
    </el-menu>
</template>

<script>
import sidebarItem from './sidebarItem'
import { mapGetters, mapState} from 'vuex'

export default {
  components: { sidebarItem },
  computed: {
    ...mapState({
      routes: state =>  state.pagestate.pagestate["currentappscreens"] || []
    }),
  },
  methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
  }
 
}
</script>
