import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

type TransactionType = {
  id: string;
  title: string;
  amount: number;
  category: string;
  type: string;
  createdAt: string;
};

type TransactionsCreateType = Omit<TransactionType, "id" | "createdAt">;

type TransactionsProviderProps = {
  children: ReactNode;
};

type TransactionsContextData = {
  transactions: TransactionType[];
  createTransaction: (transaction: TransactionsCreateType) => void;
};

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionType[]>([]);

  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  function createTransaction(transaction: TransactionsCreateType) {
    api.post("/transactions", transaction);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}
