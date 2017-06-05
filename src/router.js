import Vue from 'vue'
import Router from 'vue-router'
import bpp from './component/bpp.vue'

Vue.use(Router);

export default new Router({
    routes:[
        {
            path:'/',
            name:'bpp',
            component:bpp
        }
    ]
})