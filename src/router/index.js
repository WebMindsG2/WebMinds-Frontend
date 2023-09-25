// Routing Module

import {createRouter, createWebHistory} from "vue-router";
import CardHostComponent from "../learning/pages/host-card.component.vue";

//const AboutComponent = () => import()
const router = createRouter({

    history : createWebHistory(),
    routes:[

        {path: '/searchhost', component: CardHostComponent},
        {path: '/', redirect: 'home'},


    ]


});

export default router;