/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { createUserRequest } from "../../store/modules/users/actions";
import { Label } from "../Login/styles";
import { Button, Container, Content } from "./styles";
import Input from "../../components/Input/style";
import { useHistory, useLocation, useParams } from "react-router-dom";

const Users: React.FC = () => {
  const nameRef = useRef<HTMLInputElement | any>(null);
  const usernameRef = useRef<HTMLInputElement | any>(null);
  const passwordRef = useRef<HTMLInputElement | any>(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams<{ id?: string }>();

  const location = useLocation<any>();

  useEffect(() => {
    console.log(params?.id);
    if (params?.id) {
      console.log("EDIT");
      nameRef.current.value = location?.state?.name;
      usernameRef.current.value = location?.state?.username;
      passwordRef.current.value = location?.state?.password;
    }
  }, [params?.id, nameRef, usernameRef, passwordRef, location]);

  return (
    <Container>
      <Content>
        <Label htmlFor="labelForName">Nome:</Label>
        <Input id="labelForName" ref={nameRef} />
        <Label htmlFor="labelForUsername">Username:</Label>
        <Input id="labelForUsername" ref={usernameRef} />
        <Label htmlFor="labelForPassword">Password:</Label>
        <Input id="labelForPassword" ref={passwordRef} />
        <Button
          onClick={async () => {
            if (
              nameRef?.current?.value &&
              usernameRef?.current?.value &&
              passwordRef?.current?.value
            ) {
              if (params.id) {
                const user = await dispatch(
                  createUserRequest({
                    id: params.id,
                    name: nameRef?.current?.value,
                    username: usernameRef?.current?.value,
                    password: passwordRef?.current?.value,
                  })
                );
                if (user !== null) {
                  toast.success("Deu certo!");
                  history.push("/home");
                }
              } else {
                const user = await dispatch(
                  createUserRequest({
                    name: nameRef?.current?.value,
                    username: usernameRef?.current?.value,
                    password: passwordRef?.current?.value,
                  })
                );
                if (user !== null) {
                  toast.success("Deu certo!");
                  history.push("/home");
                }
              }
            } else toast.error("Validação falha");
          }}
        >
          Entrar
        </Button>
      </Content>
    </Container>
  );
};

export default Users;
