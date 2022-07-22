<template>
  <el-container>
    <Menu/>
    <router-view></router-view>
  </el-container>
</template>

<script setup lang="ts">
import Menu from "@/components/menu.vue";
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@import "./styles/variable.scss";

.app-main-container {
  //position: relative;
  box-sizing: border-box;
  width: $base-width;
  overflow: hidden;
  text-align: left;
}

.footer-copyright {
  min-height: $footer-copyright-height;
  line-height: $footer-copyright-height;
  color: $base-color-3;
  text-align: center;
  border-top: 1px dashed $base-border-color;
}
</style>