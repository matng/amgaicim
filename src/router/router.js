import Login from '../component/login/login.vue';
import ImList from '../component/im/ImTest.vue';
import mobilim from '../component/im/MobileImContent.vue'
export const pageLogin = {
    path: '/',
    name: 'Login',
    component: Login
};

export const pageIm = {
    path: '/im',
    name: 'im',
    component: ImList
};

export const pageMobileIm = {
    path: '/mobilim',
    name: 'mobilim',
    component: mobilim
};

export const routers = [
    pageLogin,pageIm,pageMobileIm
];
