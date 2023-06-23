import { Component } from "vue";
import { ModalServiceFactory } from "../factories";

const useModal = <TComponent extends Component>(component: TComponent) => {
  const factory = new ModalServiceFactory();
  const service = factory.create(component);

  return {
    open: service.open.bind(service),
    close: service.close.bind(service),
  };
};

export default useModal;
