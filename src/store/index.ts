import { applyMiddleware, createStore, Store } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import rootReducer from './modules/rootReducer';

export type AppState = ReturnType<typeof rootReducer>;

const store: Store<any> = createStore(
  rootReducer,
  applyMiddleware(thunk as ThunkMiddleware<AppState>),
);

export { store };
