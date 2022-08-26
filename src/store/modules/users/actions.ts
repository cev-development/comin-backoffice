/* eslint-disable no-console */
import { Dispatch } from "redux";
import {
  LIST_USERS_SUCCESS,
  LIST_USERS_FAILURE,
  LIST_USERS_LOGOUT,
} from "./types";
import { api } from "../../../services/api";

interface ICreateUserDTO {
  id?: string;
  name: string;
  username: string;
  password: string;
}

interface IResult {
  account: {
    firstName: string;
    lastName: string;
    email: string;
    id: string | number;
  };
}

const getAllUsersRequest = () => async (dispatch: Dispatch, getState: any) => {
  const { users } = getState();
  console.log(users);
  const response = await api.get(`/user`);

  if (response.status === 200) {
    return dispatch({
      type: LIST_USERS_SUCCESS,
      payload: {
        data: response.data,
      },
    });
  } else {
    return dispatch({
      type: LIST_USERS_FAILURE,
    });
  }
};

const createUserRequest =
  ({ id, name, username, password }: ICreateUserDTO) =>
  async () => {
    if (id) {
      const response = await api.put(`/user/${id}`, {
        name,
        username,
        password,
      });

      if (response.status === 201) {
        return response.data;
      } else {
        return response.data;
      }
    } else {
      const response = await api.post(`/user`, {
        name,
        username,
        password,
      });

      if (response.status === 201) {
        return response.data;
      } else {
        return response.data;
      }
    }
  };

const loadToken =
  (result: IResult) =>
  (dispatch: Dispatch): any => {
    return dispatch({
      type: LIST_USERS_SUCCESS,
      payload: {
        isLogged: true,
        data: result,
      },
    });
  };

const logout =
  () =>
  (dispatch: Dispatch): any => {
    return dispatch({
      type: LIST_USERS_LOGOUT,
      payload: {
        isLogged: false,
        data: [],
      },
    });
  };

export { getAllUsersRequest, createUserRequest, logout, loadToken };
