import { Reducer } from 'react';
import { LOAD_REQUEST, LOAD_FAILURE, LOAD_SUCCESS, LOAD_LOGOUT } from './types';

const INITIAL_STATE = {
  isLogged: false,
  loading: false,
  data: {},
  erro: false,
};

const reducer: Reducer<any, any> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_REQUEST: {
      return { ...state, loading: true, erro: false };
    }
    case LOAD_SUCCESS: {
      return {
        ...state,
        loading: false,
        isLogged: action.payload.isLogged,
        data: action.payload.data,
        erro: false,
      };
    }
    case LOAD_FAILURE: {
      return { ...state, loading: false, erro: true };
    }
    case LOAD_LOGOUT: {
      return {
        ...state,
        loading: false,
        isLogged: false,
        data: {},
        erro: false,
      };
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
//   isLogged: false,
// };

// const reducer: Reducer<IRepositoriesState> = (
//   state = INITIAL_STATE,
//   action,
// ) => {
//   switch (action.type) {
//     case RepositoriesTypes.LOAD_REQUEST:
//       return { ...state, loading: true };
//     case RepositoriesTypes.LOAD_SUCCCES:
//       return {
//         ...state,
//         loading: false,
//         error: false,
//         data: action.payload.data,
//         isLogged: action.payload.islogged,
//       };
//     case RepositoriesTypes.LOAD_FAILURE:
//       return {
//         ...state,
//         loading: false,
//         error: true,
//       };
//     case RepositoriesTypes.LOAD_RESET:
//       return {
//         ...state,
//         error: false,
//         loading: false,
//         isLogged: false,
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
