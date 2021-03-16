import Modal from "react-modal";

type modalTransactionTypes = {
  isOpen: boolean;
  onRequestClose: () => void;
};

export function ModalTransaction({
  isOpen,
  onRequestClose,
}: modalTransactionTypes) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Cadastrar nova transação</h2>
    </Modal>
  );
}
