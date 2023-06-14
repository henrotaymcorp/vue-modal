import { Modal } from "../../models";
import { ModalConstructorOptions } from "../../types";

class ModalFactory {
  public create<TOptions extends Omit<ModalConstructorOptions, "uuid">>(
    options: TOptions
  ): Modal<TOptions["component"]> {
    return new Modal({
      ...options,
      uuid: crypto.randomUUID(),
    });
  }
}

export default ModalFactory;
