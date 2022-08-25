const prev = '@base';

const LOAD_REQUEST = `${prev}/LOAD_REQUEST`;
const LOAD_SUCCESS = `${prev}/LOAD_SUCCESS`;
const LOAD_FAILURE = `${prev}/LOAD_FAILURE`;
const LOAD_LOGOUT = `${prev}/LOAD_LOGOUT`;

export interface IPropsAuthRequest {
  email: string;
  password: string;
}

export { LOAD_REQUEST, LOAD_SUCCESS, LOAD_FAILURE, LOAD_LOGOUT };
