import { TestingModal } from "../components";
import { useModal } from "../lib";
import useRandomText from "./useRandomText";

const useFirstModal = () => {
  const { open: rawOpen, close } = useModal(TestingModal);
  const open = () =>
    rawOpen({
      name: useRandomText(),
      lastName: "first",
    });

  return { open, close };
};

export default useFirstModal;
