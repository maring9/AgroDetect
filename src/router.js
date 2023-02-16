import HomePage from './components/pages/home/HomePage.vue';
import InferencePage from './components/pages/inference/InferencePage.vue';
import GoPremiumPage from './components/pages/premium/GoPremiumPage.vue'
import { createRouter, createWebHistory } from "vue-router";
import NotFoundPage from './components/pages/not_found/NotFoundPage.vue';
const routerConfig = {
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', component: HomePage},
        {path: '/getstarted', component: InferencePage},
        {path: '/becomepremium', component: GoPremiumPage},
        { path: '/:noFound(.*)', component: NotFoundPage},
    ]
}

const router = createRouter(routerConfig);

export default router;