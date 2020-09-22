import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'




Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path:"/",
            name:'home',
            component: Home
        },
        {
            path:"/login",
            name:'login',
            meta: {layout: 'empty'},
            component: () =>import('./views/Login')
        },
        {
            path:"/categories",
            name:'categories',
            meta: {layout: 'main'},
            component: () =>import('./views/Categories')
        }
    ]
})