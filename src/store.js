import { todoReducer } from 'reducers/todoReducer';
import { applyMiddleware, createStore, compose } from 'redux';
import { thunk } from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  todoReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk)),
);
