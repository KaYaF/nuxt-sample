import {en, ja} from 'vuetify/src/locale';
import customEn from './../i18n/en.lang.yml';
import customJa from './../i18n/ja.lang.yml';

Object.assign(customEn, en);
Object.assign(customJa, ja);

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.nuxt2Context.$vuetify.lang.locales = {
    en: customEn,
    ja: customJa,
  };
});
