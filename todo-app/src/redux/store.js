// src/redux/store.js

import { createStore } from 'redux';
import taskReducer from './reducers';

const store = createStore(
  taskReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
