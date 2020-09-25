import { createApp } from 'vue'
import App from './App'
import './index.css'
import router from './router';
import store from './store';

// TailwindCSS
import './assets/css/style.css'

createApp(App).use(router).use(store).mount('#app')
