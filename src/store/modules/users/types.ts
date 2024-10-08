const prev = "@comin";

const LIST_USERS_REQUEST = `${prev}/LIST_USERS_REQUEST`;
const LIST_USERS_SUCCESS = `${prev}/LIST_USERS_SUCCESS`;
const LIST_USERS_FAILURE = `${prev}/LIST_USERS_FAILURE`;
const CREATE_USER_REQUEST = `${prev}/CREATE_USER_REQUEST`;
const CREATE_USER_SUCCESS = `${prev}/CREATE_USER_SUCCESS`;
const CREATE_USER_FAILURE = `${prev}/CREATE_USER_FAILURE`;
const LIST_USERS_LOGOUT = `${prev}/LIST_USERS_LOGOUT`;

export interface IPropsAuthRequest {
  email: string;
  password: string;
}

export {
  LIST_USERS_REQUEST,
  LIST_USERS_SUCCESS,
  LIST_USERS_FAILURE,
  LIST_USERS_LOGOUT,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
};
