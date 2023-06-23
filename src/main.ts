import { createApp } from "vue";
import App from "./App.vue";
import { modalPlugin } from "./lib";

createApp(App).use(modalPlugin).mount("#app");
