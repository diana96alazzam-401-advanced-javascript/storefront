import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import stateStore from './state-store';

const rootReducer = combineReducers({ stateStore });

const store = () => {
  return createStore(rootReducer, composeWithDevTools());
};

export default store();
