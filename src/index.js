import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import cartReducer from './redux/cart';
import productsReducer from './redux/product';
import productsData from './productData';


import App from './App';

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer
});

let store = createStore(
  rootReducer,
  {
      products: productsData // initial store values
  }
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

