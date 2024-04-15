import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import DepartamentosView from "@/views/DepartamentosView.vue";

const router = createRouter({
    linkActiveClass: 'active',
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/departamentos',
            name: 'departamentos',
            component: DepartamentosView
        }
    ]
})

export default router
