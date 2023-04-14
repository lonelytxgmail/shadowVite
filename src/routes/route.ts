import {createRouter, createWebHistory} from "vue-router";
import Economics from "../pages/Economics.vue";
import Moives from "../pages/Moives.vue";
import Home from "../pages/Home.vue";
import Stock from "../pages/Stock.vue";
export const router =createRouter({
    history:createWebHistory(),
    routes:[
        {path:"/economics",component:Economics},
        {path:"/moives",component:Moives},
        {path:"/",component:Home},
        {path:"/stock",component:Stock},

    ]
})

  
