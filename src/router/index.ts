import type { RouteRecordRaw } from "vue-router";

type RouteRecord = {
  meta?: {
    i18nKey?: string;
  };
} & RouteRecordRaw;

// Views
import Home from "@/views/Home/index.vue";

export const routes: RouteRecord[] = [
  {
    path: "/",
    alias: "",
    component: Home,
    meta: {
      i18nKey: "home",
    },
  },
];
