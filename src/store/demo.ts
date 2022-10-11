import { defineStore } from "pinia";

export const useStore = defineStore("demo", {
  state: () => ({
    counter: 0,
  }),
  actions: {
    increment() {
      this.counter++;
    },
  },
});
