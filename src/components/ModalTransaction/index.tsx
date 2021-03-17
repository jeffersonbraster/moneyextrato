import Modal from "react-modal";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import Close from "../../assets/close.svg";
import React, { useState } from "react";
import { api } from "../../services/api";

type modalTransactionTypes = {
  isOpen: boolean;
  onRequestClose: () => void;
};

export function ModalTransaction({
  isOpen,
  onRequestClose,
}: modalTransactionTypes) {
  const [type, setType] = useState("deposit");

  const [title, setTitle] = useState("");
  const [values, setValues] = useState(0);
  const [category, setCategory] = useState("");

  function handleCreate(e: React.FormEvent) {
    e.preventDefault();

    const data = { title, type, values, category };

    api.post("/transactions", data);
  }

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
      <Container onSubmit={handleCreate}>
        <h2>Cadastrar nova transação</h2>

        <input
          type="text"
          placeholder="Titulo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Valor"
          value={values}
          onChange={(e) => setValues(Number(e.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => {
              setType("deposit");
            }}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" /> <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => {
              setType("widthdraw");
            }}
            isActive={type === "widthdraw"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saida" /> <span>Saida</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
