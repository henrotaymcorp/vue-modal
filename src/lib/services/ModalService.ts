import { Component } from "vue";
import { ModalFactory } from "../factories";
import { ComponentProps } from "../types";
import { emitter } from "../mitt";

class ModalService<TComponent extends Component> {
  private _component;
  private _uuid;
  private _modalFactory;

  public constructor({
    component,
    uuid,
    modalFactory,
  }: {
    component: TComponent;
    uuid: string;
    modalFactory: ModalFactory;
  }) {
    this._component = component;
    this._uuid = uuid;
    this._modalFactory = modalFactory;
  }

  public open(props: Omit<ComponentProps<TComponent>, "close">) {
    const modal = this._modalFactory.create({
      component: this._component,
      serviceUuid: this._uuid,
      props: { ...props, close: () => this.close() },
    });

    emitter.emit("store", modal);
  }
  public close() {
    emitter.emit("destroy", this._component);
  }
}

export default ModalService;
