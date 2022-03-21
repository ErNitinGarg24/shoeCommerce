import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import router from './router';
import App from './App.vue'

library.add(fas, fab, far);

createApp(App).use(router).component('fa', FontAwesomeIcon).mount('#app');
