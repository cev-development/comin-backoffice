import { useRef } from "react";
import Input from "../../components/Input/style";
import { Button, Container, Content, Form, Label, Title } from "./styles";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const Login: React.FC = () => {
  const history = useHistory();
  const userIdRef = useRef<HTMLInputElement>(null);
  const clients_ids = ["278487", "6284387"];

  return (
    <Container>
      <Content>
        <Title>LOGIN</Title>
        <Form>
          <Label htmlFor="labelForId">User ID:</Label>
          <Input id="labelForId" ref={userIdRef} />
          <Button
            onClick={() => {
              if (clients_ids.includes(`${userIdRef?.current?.value}`)) {
                toast.success("Logado com sucesso");
                localStorage.setItem(
                  "comin@client_id",
                  `${userIdRef?.current?.value}`
                );
                history.push("/home");
              } else {
                toast.error("Token errado");
              }
            }}
          >
            Entrar
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Login;
