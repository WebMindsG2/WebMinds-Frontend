// Routing Module

import {createRouter, createWebHistory} from "vue-router";
import StartComponent from "../public/pages/start.component.vue";
import SearchParkingComponent from "../public/pages/searchParking.component.vue";
import FrequentQuestionsComponent from "../public/pages/frequentQuestions.component.vue";

//const AboutComponent = () => import()
const router = createRouter({

    history: createWebHistory(),
    routes:[
        {path: '/start', component:StartComponent , meta: {title:'Start' }},
        {path:'/searchParking', component:SearchParkingComponent, meta: {title:'SearchParking'}},
        {path:'/frequentQuestions', component:FrequentQuestionsComponent, meta: {title:'FrequentQuestions'}},
        {path: '/', redirect:'/start'},

    ]


});

router.beforeEach((to, from, next) => {
    let baseTitle = 'ParkEasy';
    document.title = `${baseTitle} | ${to.meta['title']}`;
    next();
})


export default router;