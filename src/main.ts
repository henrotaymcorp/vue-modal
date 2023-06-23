import { createApp } from "vue";
import App from "./App.vue";
import { vueModal } from "./lib/plugins";

createApp(App).use(vueModal).mount("#app");
