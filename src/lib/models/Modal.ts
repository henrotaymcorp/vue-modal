import { Component, markRaw } from "vue";
import { ModalConstructorOptions } from "../types";

class Modal<TComponent extends Component = Component> {
  private _component;
  private _props;
  private _uuid;

  constructor({ component, props, uuid }: ModalConstructorOptions<TComponent>) {
    this._component = markRaw(component);
    this._props = props;
    this._uuid = uuid;
  }

  public get component() {
    return this._component;
  }

  public get props() {
    return this._props;
  }

  public get uuid() {
    return this._uuid;
  }
}

export default Modal;
