import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '../store/index'
Vue.use(VueRouter);

// check for authentication
// const ifAuthenticated = (to, from, next) => {
//     if (store.getters.isAuthenticated) {
//       next()
//       return
//     }
//     next('/Login')
//   }
// const ifNotAuthenticated = (to, from, next) => {
//     if (!store.getters.isAuthenticated) {
//       next()
//       return
//     }
//     next('/Dashboard')
//   }

let Home = require('../components/Home.vue');
let Groups = require('../components/Groups.vue');
let Notify = require('../components/Notify.vue');
let login = require('../components/login.vue');
let register = require('../components/register.vue');
let chat = require('../components/chat.vue');
let wall = require('../components/wall.vue');

const routes = [
    { path: '/', component:Home},
    { path: '/Home', component:Home},
    { path: '/Groups', component:Groups},
    { path: '/Notify', component:Notify},
    { path: '/login', component:login},
    { path: '/register', component:register},
    { path: '/chat', component:chat},
    { path: '/wall', component:wall},
]

export default new VueRouter({
    // mode:'history',
    routes,
});