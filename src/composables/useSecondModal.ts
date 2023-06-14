import { TestingSecondModal } from "../components";
import { useModal } from "../lib";
import useRandomText from "./useRandomText";

const useFirstModal = () => {
  const { open: rawOpen, close } = useModal(TestingSecondModal);
  const open = () =>
    rawOpen({
      name: useRandomText(),
      lastName: "second",
    });

  return { open, close };
};

export default useFirstModal;
