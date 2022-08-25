import { useHistory } from "react-router-dom";
import { Button, Container } from "./style";

const Header: React.FC = () => {
  const history = useHistory();
  return (
    <Container>
      <Button onClick={() => history.push("/criancas")}>Crianças</Button>
      <Button onClick={() => history.push("/mover")}>Mover</Button>
      <Button onClick={() => history.push("/local")}>Localização</Button>
    </Container>
  );
};

export default Header;
