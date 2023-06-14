import { Component, ref } from "vue";
import { Modal } from "../models";
import { emitter } from "../mitt";

class ModalContainerService {
  public readonly modals;

  public constructor() {
    this.modals = ref<Modal[]>([]);
    emitter.on("destroy", (component) => this.destroy(component));
    emitter.on("store", (modal) => this.store(modal));
  }

  public destroy<TComponent extends Component>(component: TComponent) {
    const index = this.modals.value.findIndex(
      (modal) => modal.component === component
    );
    if (index === -1) return;
    this.modals.value.splice(index, 1);
  }

  public store<TModal extends Modal>(modal: TModal) {
    this.destroy(modal.component);
    this.modals.value.push(modal);
  }

  public get hasModals() {
    return this.modals.value.length !== 0;
  }

  public destroyLast() {
    if (!this.hasModals) return;
    this.modals.value.splice(-1, 1);
  }
}

export default ModalContainerService;
