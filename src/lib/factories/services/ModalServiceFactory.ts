import { Component } from "vue";
import { ModalService } from "../../services";
import { ModalFactory } from "../models";
import { ModalEmitter } from "../../types";

class ModalServiceFactory {
  public create<TComponent extends Component>({
    component,
    emitter,
  }: {
    emitter: ModalEmitter;
    component: TComponent;
  }) {
    return new ModalService({
      component,
      uuid: crypto.randomUUID(),
      modalFactory: new ModalFactory(),
      emitter,
    });
  }
}

export default ModalServiceFactory;
