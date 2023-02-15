import { createApp } from 'vue';
// import { createPinia } from 'pinia'

import router from './router.js';
import store from './store/index.js';
import App from './App.vue';


// const pinia = createPinia()
const app = createApp(App)

// app.use(pinia)
app.use(router);
app.use(store);
app.mount('#app');
