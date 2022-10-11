import { createApp } from "vue";
import App from "./App.vue";

// Pinia
import { createPinia } from "pinia";

// Vue Router
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "@/router";
import { beforeResolve } from "@/router/guards";

// Vue i18n
import { createI18n } from "vue-i18n";
import { getLocaleLang } from "@/locale";
import i18nMessage from "@/locale";

// Style
import "./style/global.less";

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

const vueI18n = createI18n({
  locale: getLocaleLang(),
  fallbackLocale: "en",
  messages: i18nMessage,
});

router.beforeResolve(beforeResolve);

createApp(App).use(createPinia()).use(router).use(vueI18n).mount("#app");
