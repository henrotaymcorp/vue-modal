import { Component } from "vue";
import { ModalServiceFactory } from "../factories";
import useModalContainer from "./useModalContainer";

const useModal = <TComponent extends Component>(component: TComponent) => {
  const { emitter } = useModalContainer();
  const factory = new ModalServiceFactory();
  const service = factory.create({ component, emitter });

  return {
    open: service.open.bind(service),
    close: service.close.bind(service),
  };
};

export default useModal;
