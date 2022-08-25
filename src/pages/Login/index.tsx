import Input from "../../components/Input/style";
import { Button, Container, Content, Form, Label, Title } from "./style";

const Login: React.FC = () => {
  return (
    <Container>
      <Content>
        <Title>LOGIN</Title>
        <Form>
          <Label htmlFor="labelForEmail">Email:</Label>
          <Input id="labelForEmail" />
          <Label htmlFor="labelForPassword">Senha:</Label>
          <Input id="labelForPassword" type="password" />
          <Button
            onClick={() => {
              // dispatch(authRequest({ email, password }));
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
