/* eslint-disable no-console */
import { Dispatch } from 'redux';
import { CREATE_BASE } from './types';

const createBase =
  (base: string) =>
  (dispatch: Dispatch, getState: any): any => {
    /*
    toast.success('Chaaaaaaama 🔥');
    toast.warning('Chaaaaaaama 🔥');
    toast.error('Chaaaaaaama 🔥');
    toast.info('Chaaaaaaama 🔥');
    */
    console.log(base);
    console.log(getState());
    return dispatch({
      type: CREATE_BASE,
      payload: '',
    });
  };

export { createBase };
