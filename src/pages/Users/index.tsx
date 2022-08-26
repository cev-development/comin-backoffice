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
  const { id } = useParams<{ id?: string }>();

  const {
    state: {
      name: nameValue,
      username: usernameValue,
      password: passwordValue,
    },
  } = useLocation<any>();

  useEffect(() => {
    if (id) {
      console.log("EDIT");
      nameRef.current.value = nameValue;
      usernameRef.current.value = usernameValue;
      passwordRef.current.value = passwordValue;
    }
  }, [
    id,
    nameRef,
    usernameRef,
    passwordRef,
    nameValue,
    usernameValue,
    passwordValue,
  ]);

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
              if (id) {
                const user = await dispatch(
                  createUserRequest({
                    id,
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
