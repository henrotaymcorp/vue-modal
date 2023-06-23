import { Component } from "vue";
import { ModalFactory } from "../factories";
import { ComponentProps, ModalEmitter } from "../types";

class ModalService<TComponent extends Component> {
  private _component;
  private _uuid;
  private _modalFactory;
  private _emitter;

  public constructor({
    component,
    uuid,
    modalFactory,
    emitter,
  }: {
    component: TComponent;
    uuid: string;
    modalFactory: ModalFactory;
    emitter: ModalEmitter;
  }) {
    this._component = component;
    this._uuid = uuid;
    this._modalFactory = modalFactory;
    this._emitter = emitter;
  }

  public open(props: Omit<ComponentProps<TComponent>, "close">) {
    const modal = this._modalFactory.create({
      component: this._component,
      serviceUuid: this._uuid,
      props: { ...props, close: () => this.close() },
    });

    this._emitter.emit("store", modal);
  }
  public close() {
    this._emitter.emit("destroy", this._component);
  }
}

export default ModalService;
