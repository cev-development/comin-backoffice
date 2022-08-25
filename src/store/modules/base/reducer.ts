import { Reducer } from 'react';
import { CREATE_BASE } from './types';

const INITIAL_STATE = {
  base: null,
};

const reducer: Reducer<any, any> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_BASE: {
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default reducer;
