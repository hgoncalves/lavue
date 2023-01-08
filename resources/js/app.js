import './bootstrap';

import { createApp } from 'vue';

import app from './App.vue';
import router from './router';

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// Pinia
import { createPinia } from 'pinia';

const pinia = createPinia();

// MDI icons
import '@mdi/font/css/materialdesignicons.css';

// i18n
import { createI18n } from 'vue-i18n';
import messages from './locales/locales';

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  globalInjection: true,
  messages: messages,
})

window.i18n = i18n

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi'
  }
});

createApp(app)
  .use(i18n)
  .use(pinia)
  .use(router)
  .use(vuetify)
  .mount('#app');
