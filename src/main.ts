import { createApp } from "vue";
import App from "./App.vue";

// Pinia
import { createPinia } from "pinia";

// Vue Router
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "@/router";

// Vue i18n
import { createI18n } from "vue-i18n";
import { getLocaleLang } from "@/locale/unitls";
import i18Messages from "@/locale";

// Style
import "./style/global.less";

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

const vueI18n = createI18n({
  locale: getLocaleLang(),
  legacy: false,
  fallbackLocale: "en-US",
  messages: i18Messages,
});

createApp(App).use(createPinia()).use(router).use(vueI18n).mount("#app");
