import { Table, Button as RAButton } from "reactstrap";
import { useListEleitor } from "./state";
import { Logo, CardTitle, Button, MiniFooter } from "../../components";

import * as S from "./styles";

export const ListEleitor = () => {
  const { voters, handleDelete, navigate } = useListEleitor();

  return (
    <S.Container>
      <Logo />
      <S.Form>
        <CardTitle title="Listar Eleitores" />
        <Table style={{ marginBottom: 25 }} striped>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Apelido</th>
              <th>BI</th>
              <th>Eliminar</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            {!voters?.value?.length ? (
              <tr>
                <td colSpan={5} className="text-center">
                  Nenhum Registro!
                </td>
              </tr>
            ) : (
              <></>
            )}
            {voters?.value?.map((voter) => {
              return (
                <tr>
                  <td>{voter?.nome}</td>
                  <td>{voter?.sobrenome}</td>
                  <td>{voter?.bi}</td>
                  <td>
                    <RAButton
                      onClick={() => handleDelete(voter?.id)}
                      color="danger"
                    >
                      Eliminar
                    </RAButton>
                  </td>
                  <td>
                    <RAButton
                      onClick={() => navigate(`/edit-eleitor/${voter?.id}`)}
                    >
                      Editar
                    </RAButton>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Button title="Voltar" onClick={() => history.go(-1)} />
      </S.Form>
      <MiniFooter title="Aproveite, é simples e sempre será!" />
    </S.Container>
  );
};
