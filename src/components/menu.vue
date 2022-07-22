<template>
  <el-scrollbar height="100vh">
    <el-row>
      <el-col>
        <el-menu
            class="el-menu-vertical"
            :default-active="$route.meta.menuKey"
        >
          <el-menu-item v-for="item in route_paths" :key="item.meta.menuKey">
            <template v-if="item.meta.menuKey !== '/'">
              <el-icon>
                <icon-menu/>
              </el-icon>
              <span>{{ item.meta.title }}</span>
            </template>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </el-scrollbar>
</template>

<script setup lang="ts">
import router from '../router/index'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

const routes = router.getRoutes()
const route_paths = routes.filter(item => {
  return item.path !== '/'
})
console.log(routes)

</script>

<style lang="scss" scoped>
@import '../styles/variable.scss';
@import '../styles/common.scss';

.el-menu-vertical {
  //position: fixed;
  //top: 0;
  //bottom: 0;
  //left: 0;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  @include base-scrollbar;

  &:not(.el-menu--collapse) {
    width: 180px;
  }
}
</style>