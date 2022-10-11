import type { RouteRecordRaw } from "vue-router";

type RouteRecord = {
  meta?: {
    title?: string;
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
      title: "Home",
    },
  },
];
