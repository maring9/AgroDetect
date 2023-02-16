import {createRouter, createWebHistory} from 'vue-router';
import NotFoundPage from './pages/NotFoundPage.vue';
import HomePage from './pages/home/HomePage.vue';
import Authentication from './pages/getstarted/Authentication.vue';
const routerConfig = {
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/home'},
        { path: '/home', component: HomePage},
        { path: '/getstarted', component: Authentication},
        { path: '/:noFound(.*)', component: NotFoundPage}
    ]
};

const router = createRouter(routerConfig);

export default router;