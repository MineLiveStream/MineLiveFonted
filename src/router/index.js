import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    { path: '/', component: () => import('../views/Home.vue'), name: 'Home', meta: {title: '首页'}},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title || "404"} - MineLive`;
    next();
})

export default router