import Vue from 'vue'
import Router from 'vue-router'
import bpp from './component/bpp.vue'
import level2 from './component/level2.vue'
import level3 from './component/level3.vue'

Vue.use(Router);

export default new Router({
    routes:[
        {
            path:'/',
            name:'bpp',
            component:bpp
        },
        {
            path:'/level2',
            name:'level2',
            component:level2
        },
        {
            path:'/level3',
            name:'level3',
            component:level3
        }
    ]
})