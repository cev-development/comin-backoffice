import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { TablePage } from "../../components";
import { getAllUsersRequest } from "../../store/modules/users/actions";
import { Container, Content } from "./styles";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state: any) => state.users);
  const history = useHistory();

  useEffect(() => {
    dispatch(getAllUsersRequest());
  }, [dispatch]);

  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "Nome",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Senha",
      dataIndex: "password",
      key: "password",
    },
    {
      title: "Ações",
      render: (user: any) => {
        return (
          <>
            <button
              onClick={() =>
                history.push(`/user/${user._id}/edit`, { ...user })
              }
            >
              Editar
            </button>
            <button>Visualizar</button>
          </>
        );
      },
    },
  ];

  return (
    <Container>
      <Content>
        {!loading && <TablePage columns={columns} dataSource={data} />}
      </Content>
    </Container>
  );
};

export default Home;
