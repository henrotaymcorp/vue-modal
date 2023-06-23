import { Component } from "vue";
import { Modal } from "../models";
import { emitter } from "../mitt";

class ModalContainerService {
  private _modals: Modal[];

  public constructor() {
    this._modals = [];
  }

  public setup() {
    emitter.on("destroy", (component) => this.destroy(component));
    emitter.on("store", (modal) => this.store(modal));
  }

  public destroy<TComponent extends Component>(component: TComponent) {
    const index = this._modals.findIndex(
      (modal) => modal.component === component
    );
    if (index === -1) return;
    this._modals.splice(index, 1);
  }

  public store<TModal extends Modal>(modal: TModal) {
    this.destroy(modal.component);
    this._modals.push(modal);
  }

  public get hasModals() {
    return this._modals.length !== 0;
  }

  public destroyLast() {
    if (!this.hasModals) return;
    this._modals.splice(-1, 1);
  }

  public destroyAll() {
    this._modals = [];
  }

  public get modals() {
    return this._modals;
  }
}

export default ModalContainerService;
