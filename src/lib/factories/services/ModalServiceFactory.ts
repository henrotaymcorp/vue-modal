import { Component } from "vue";
import { ModalService } from "../../services";
import { ModalFactory } from "../models";

class ModalServiceFactory {
  public create<TComponent extends Component>(component: TComponent) {
    return new ModalService({
      component,
      uuid: crypto.randomUUID(),
      modalFactory: new ModalFactory(),
    });
  }
}

export default ModalServiceFactory;
