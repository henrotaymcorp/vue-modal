import { ModalContainerService } from "../../services";

class ModalContainerServiceFactory {
  public create() {
    return new ModalContainerService();
  }
}

export default ModalContainerServiceFactory;
