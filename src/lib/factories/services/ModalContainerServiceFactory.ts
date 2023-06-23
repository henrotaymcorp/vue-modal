import { ModalContainerService } from "../../services";
import { ModalEmitter } from "../../types";

class ModalContainerServiceFactory {
  public create(emitter: ModalEmitter) {
    return new ModalContainerService({ emitter });
  }
}

export default ModalContainerServiceFactory;
