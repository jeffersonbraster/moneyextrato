import { Summary } from "../Summary";
import { TraansactionTable } from "../TransactionsTable";
import { Container } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TraansactionTable />
    </Container>
  );
}
