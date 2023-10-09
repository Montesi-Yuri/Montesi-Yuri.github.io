import { createApp } from 'vue';
import App from './App.vue';

import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

// init Swiper:
const swiper = new Swiper();

import { router } from './router';
 
createApp(App).use(router).mount('#app')
