import { Plugin } from "vue";
import { ReactiveModalContainerFactory } from "../factories";
import { Testastos } from "../types";

declare module "vue" {
  interface ComponentCustomProperties {
    $vueModal: Testastos;
  }
}

declare global {
  interface Window {
    vueModal: Testastos;
  }
}

const vueModal: Plugin = {
  install(app) {
    const factory = new ReactiveModalContainerFactory();
    const vueModal = factory.create();
    app.config.globalProperties.$vueModal = vueModal;
    window.vueModal = vueModal;
  },
};

export default vueModal;
