import type { NavigationGuardWithThis } from "vue-router";

export const beforeResolve: NavigationGuardWithThis<any> = (to) => {
  if (to.meta.title) {
    document.title = to.meta.title as string;
  }
};
