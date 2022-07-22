import {Component, createApp} from 'vue'
import App from './App.vue'
import router from "./router";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const app = createApp(App)
app.use(router)
app.use(ElementPlus, {locale: zhCn})

import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

app.use(VXETable)
// icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, <Component>component)
}

// @ts-ignore
import { VueClipboard } from '@soerenmartius/vue3-clipboard';
app.use(VueClipboard);
app.mount('#app')
