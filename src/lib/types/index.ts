import { Component, ComputedRef, Raw } from "vue";
import { Modal } from "../models";
import { Emitter } from "mitt";

export * from "./models";

export type ReactiveModalContainer = {
  modals: ComputedRef<
    {
      readonly component: Raw<Component>;
      readonly props: unknown;
      readonly uuid: string;
    }[]
  >;
  emitter: ModalEmitter;
  hasModals: ComputedRef<boolean>;
  store: <TModal extends Modal>(modal: TModal) => void;
  destroy: <TComponent extends Component>(component: TComponent) => void;
  destroyLast: () => void;
  destroyAll: () => void;
};

export type ModalEmitterEvents = {
  store: Modal;
  destroy: Component;
};

export type ModalEmitter = Emitter<ModalEmitterEvents>;
