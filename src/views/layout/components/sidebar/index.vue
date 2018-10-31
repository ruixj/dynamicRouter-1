<template>
    <el-menu mode="vertical" unique-opened :default-active="$route.path" background-color="#304156" text-color="#fff" active-text-color="#409EFF">
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
      routes: state =>  state.pagestate["approutes"] || []
    }),
  }
  
 
}
</script>
