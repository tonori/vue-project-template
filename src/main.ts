import { createApp } from "vue";
import App from "./App.vue";

// Pinia
import { createPinia } from "pinia";

// Vue Router
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "@/router";
import { beforeResolve } from "@/router/guards";

// Style
import "./style/global.less";

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

router.beforeResolve(beforeResolve);

createApp(App).use(createPinia()).use(router).mount("#app");
