import { createApp } from 'vue';
import App from './App.vue';
import { createI18n } from 'vue-i18n';
import sk from '@/locales/sk.json';
import en from '@/locales/en.json';

const app = createApp(App);

const i18n = createI18n({
  locale: 'sk', // Default locale
  fallbackLocale: 'en',
  messages: {
    sk: (sk),
    en: (en)
  }
});

app.use(i18n);
app.mount('#app');
