import { Component, ComputedRef, Raw } from "vue";
import { Modal } from "../models";

// Silence is golden 🤫
export * from "./models";

export type Testastos = {
  modals: {
    readonly component: Raw<Component>;
    readonly props: unknown;
    readonly uuid: string;
  }[];
  hasModals: ComputedRef<boolean>;
  store: <TModal extends Modal>(modal: TModal) => void;
  destroy: <TComponent extends Component>(component: TComponent) => void;
  destroyLast: () => void;
  destroyAll: () => void;
};
