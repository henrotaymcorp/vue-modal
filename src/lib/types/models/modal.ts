import { Component } from "vue";

export type ComponentProps<TComponent extends Component> =
  TComponent extends new () => {
    $props: infer P;
  }
    ? P
    : never;

export type ModalConstructorOptions<TComponent extends Component = Component> =
  {
    component: TComponent;
    props: ComponentProps<TComponent>;
    uuid: string;
  };
