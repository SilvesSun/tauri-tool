import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            // component: Layout,
            redirect: 'list',
            meta: {
                title: '',
                menuKey: '/',
                icon: 'Histogram',
                affix: true,
                noKeepAlive: true,
            },
        },
        {
            path: '/list',
            component: () => import('@/components/items.vue'),
            meta: {
                title: '查看记录',
                menuKey: '/list',
                icon: 'Histogram',
                affix: true,
                noKeepAlive: true,
            },
        },
    ],
})

export default router
