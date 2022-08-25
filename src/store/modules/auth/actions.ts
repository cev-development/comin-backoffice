/* eslint-disable no-console */
import { Dispatch } from "redux";
import jwt from "jsonwebtoken";
import SessionService from "../../../services/authService";
import {
  LOAD_SUCCESS,
  LOAD_FAILURE,
  LOAD_LOGOUT,
  IPropsAuthRequest,
} from "./types";

interface IResult {
  account: {
    firstName: string;
    lastName: string;
    email: string;
    id: string | number;
  };
}

const authRequest = (base: IPropsAuthRequest) => async (dispatch: Dispatch) => {
  try {
    const request = await SessionService.auth({
      email: base.email,
      password: base.password,
    });
    const token = jwt.decode(request.token);
    // api.defaults.headers['api-token'] = request.data.token;
    const result = {
      accessToken: request.token,
      account: {
        firstName: request.user.first_name,
        lastName: request?.user.last_name,
        email: base.email || "",
        photo: false,
        id: token?.sub,
      },
    };

    sessionStorage.setItem("token", JSON.stringify(result));
    sessionStorage.setItem("accessToken", request.token);

    return dispatch({
      type: LOAD_SUCCESS,
      payload: {
        isLogged: true,
        data: result,
      },
    });
  } catch (e) {
    return dispatch({
      type: LOAD_FAILURE,
      payload: "",
    });
  }
};

const loadToken =
  (result: IResult) =>
  (dispatch: Dispatch): any => {
    return dispatch({
      type: LOAD_SUCCESS,
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
      type: LOAD_LOGOUT,
      payload: {
        isLogged: false,
        data: {},
      },
    });
  };

export { authRequest, logout, loadToken };
