import Modal from "react-modal";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { Container, TransactionTypeContainer } from "./styles";
import Close from "../../assets/close.svg";

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
      <button type="button">
        <img
          src={Close}
          alt="fechar modal"
          onClick={onRequestClose}
          className="react-modal-close"
        />
      </button>
      <Container>
        <h2>Cadastrar nova transação</h2>

        <input type="text" placeholder="Titulo" />

        <input type="number" placeholder="Valor" />

        <TransactionTypeContainer>
          <button type="button">
            <img src={incomeImg} alt="Entrada" /> <span>Entrada</span>
          </button>

          <button type="button">
            <img src={outcomeImg} alt="Saida" /> <span>Saida</span>
          </button>
        </TransactionTypeContainer>

        <input type="text" placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
