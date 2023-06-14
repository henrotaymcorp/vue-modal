import { Component } from "vue";
import { Modal } from "../models";
import mitt from "mitt";

type Events = {
  store: Modal;
  destroy: Component;
};

const emitter = mitt<Events>();

export default emitter;
