import { Reducer } from "react";
import {
  LIST_USERS_REQUEST,
  LIST_USERS_FAILURE,
  LIST_USERS_SUCCESS,
} from "./types";

const INITIAL_STATE = {
  loading: false,
  data: [],
  erro: false,
};

const reducer: Reducer<any, any> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LIST_USERS_REQUEST: {
      return { ...state, loading: true, erro: false };
    }
    case LIST_USERS_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        erro: false,
      };
    }
    case LIST_USERS_FAILURE: {
      return { ...state, loading: false, erro: true, data: [] };
    }
    default:
      return { ...state };
  }
};

export default reducer;

// import { Reducer } from 'redux';
// import { IRepositoriesState, RepositoriesTypes, LogoutTypes } from './types';

// const INITIAL_STATE: IRepositoriesState = {
//   data: {
//     accessToken: '',
//     account: {
//       firstName: '',
//       lastName: '',
//       email: '',
//       photo: false,
//       id: 0,
//     },
//     permissions: [],
//   },
//   error: false,
//   loading: false,
//
// };

// const reducer: Reducer<IRepositoriesState> = (
//   state = INITIAL_STATE,
//   action,
// ) => {
//   switch (action.type) {
//     case RepositoriesTypes.LIST_USERS_REQUEST:
//       return { ...state, loading: true };
//     case RepositoriesTypes.LIST_USERS_SUCCCES:
//       return {
//         ...state,
//         loading: false,
//         error: false,
//         data: action.payload.data,
//
//       };
//     case RepositoriesTypes.LIST_USERS_FAILURE:
//       return {
//         ...state,
//         loading: false,
//         error: true,
//       };
//     case RepositoriesTypes.LIST_USERS_RESET:
//       return {
//         ...state,
//         error: false,
//         loading: false,
//
//       };
//     case LogoutTypes.LOGOUT:
//       return {
//         ...INITIAL_STATE,
//       };

//     default:
//       return state;
//   }
// };

// export default reducer;
