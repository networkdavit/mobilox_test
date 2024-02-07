import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@fortawesome/fontawesome-free/css/all.css';
import nl from './locales/nl.json';
import { createI18n } from 'vue-i18n'; 

const app = createApp(App);
const i18n = createI18n({
    locale: 'nl', 
    messages: {
      nl, 
    }
  });

  createApp(App).use(router).use(i18n).mount('#app');

