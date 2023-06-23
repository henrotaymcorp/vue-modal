import { computed, reactive } from "vue";
import ModalContainerServiceFactory from "./ModalContainerServiceFactory";
import { ModalEmitter } from "../../types";

class ReactiveModalContainerFactory {
  private factory;
  public constructor() {
    this.factory = new ModalContainerServiceFactory();
  }
  public create(emitter: ModalEmitter) {
    const service = reactive(this.factory.create(emitter));
    service.setup();

    return {
      emitter,
      modals: computed(() => service.modals),
      hasModals: computed(() => service.hasModals),
      store: service.store.bind(service),
      destroy: service.destroy.bind(service),
      destroyLast: service.destroyLast.bind(service),
      destroyAll: service.destroyAll.bind(service),
    };
  }
}

export default ReactiveModalContainerFactory;
