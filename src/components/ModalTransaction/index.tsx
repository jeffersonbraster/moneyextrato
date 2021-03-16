import Modal from "react-modal";
import { Container } from "./styles";

type modalTransactionTypes = {
  isOpen: boolean;
  onRequestClose: () => void;
};

export function ModalTransaction({
  isOpen,
  onRequestClose,
}: modalTransactionTypes) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <h2>Cadastrar nova transação</h2>

        <input type="text" placeholder="Titulo" />

        <input type="number" placeholder="Valor" />

        <input type="text" placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
