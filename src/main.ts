import { createApp } from "vue";
import App from "./App.vue";

import { createPinia } from "pinia";

// Style
import "./style/global.less";

createApp(App).use(createPinia()).mount("#app");
