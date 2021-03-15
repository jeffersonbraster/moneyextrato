import { Container } from "./styles";

export function TraansactionTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Salário</td>
            <td className="deposit">R$ 12.000</td>
            <td>Empresa</td>
            <td>20/02/2020</td>
          </tr>
          <tr>
            <td>Picolé</td>
            <td className="withdraw">- R$ 1.000</td>
            <td>Sobremesa</td>
            <td>20/02/2020</td>
          </tr>
          <tr>
            <td>Picolé</td>
            <td className="withdraw">- R$ 1.000</td>
            <td>Sobremesa</td>
            <td>20/02/2020</td>
          </tr>
          <tr>
            <td>Picolé</td>
            <td className="withdraw">- R$ 1.000</td>
            <td>Sobremesa</td>
            <td>20/02/2020</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
