import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index.js";


//PrimeVue
import PrimeVue from "primevue/config";

//PrimeVue Material Design Theme

import 'primevue/resources/themes/mdc-light-indigo/theme.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

//Toast Service
import ToastService from "primevue/toastservice";

//PrimeVue Components
import Card from "primevue/card";
import Button from "primevue/button";
import InputText from "primevue/inputtext";

createApp(App)
    .use(router)
    .use(PrimeVue, {ripple: true})
    .use(ToastService)
    .component('pv-card', Card)
    .component('pv-button',Button)
    .component('pv-inputText',InputText)
    .mount('#app')
