<template>
  <a-layout>
    <a-layout-content>
      <a-layout style="background: #fff">
        <Sidebar></Sidebar>
        <a-layout-content style="display: flex; flex-direction: column">
          <a-layout-header class="header">
            <Header></Header>
          </a-layout-header>
          <a-layout-content class="main-content">
            <router-link to="/">Home</router-link> | <router-link to="/tsxtest">tsx页面</router-link> | <router-link to="/about">About</router-link> | <router-link to="/contact">Contact</router-link> |
            <router-link to="/tests">组件测试</router-link>
            <router-link to="/testHome">test列表</router-link>
            <router-view></router-view>
          </a-layout-content>
          <a-layout-footer>
            <Footer></Footer>
          </a-layout-footer>
        </a-layout-content>
      </a-layout>
    </a-layout-content>
  </a-layout>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Footer from './Footer.vue'
import Header from './Header.vue'
import Sidebar from './Sidebar.vue'
export default defineComponent({
  components: {
    Footer,
    Header,
    Sidebar
  }
})
</script>
<style>
.ant-menu-root {
  height: calc(100vh - 48px);
}
.main-content {
  height: calc(100vh - 180px);
  overflow: scroll;
}
</style>
