import { computed, reactive } from "vue";
import ModalContainerServiceFactory from "./ModalContainerServiceFactory";

class ReactiveModalContainerFactory {
  private factory;
  public constructor() {
    this.factory = new ModalContainerServiceFactory();
  }
  public create() {
    const service = reactive(this.factory.create());
    service.setup();

    return {
      modals: service.modals,
      hasModals: computed(() => service.hasModals),
      store: service.store.bind(service),
      destroy: service.destroy.bind(service),
      destroyLast: service.destroyLast.bind(service),
      destroyAll: service.destroyAll.bind(service),
    };
  }
}

export default ReactiveModalContainerFactory;
