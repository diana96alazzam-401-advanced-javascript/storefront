import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import products from './products';
import categories from './categories';
import cart from './cart';



const rootReducer = combineReducers({ products, categories, cart });

const store = () => {
  return createStore(rootReducer, composeWithDevTools());
};

export default store();
