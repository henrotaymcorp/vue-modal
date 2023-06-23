import { Plugin } from "vue";
import { ReactiveModalContainerFactory } from "../factories";
import { ModalEmitterEvents, ReactiveModalContainer } from "../types";
import mitt from "mitt";

declare global {
  interface Window {
    modalPlugin: {
      container: ReactiveModalContainer;
    };
  }
}

const modalPlugin: Plugin = {
  install() {
    const emitter = mitt<ModalEmitterEvents>();
    const factory = new ReactiveModalContainerFactory();
    window.modalPlugin = {
      container: factory.create(emitter),
    };
  },
};

export default modalPlugin;
