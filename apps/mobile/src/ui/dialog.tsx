import { ReactNode } from "react";
import { Modal, Pressable } from "react-native";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
};
export const Dialog = (props: Props) => {
  const { isOpen, onClose, children } = props;
  return (
    <Modal visible={isOpen} onRequestClose={onClose} transparent={true} animationType="fade">
      {children}
    </Modal>
  );
};
