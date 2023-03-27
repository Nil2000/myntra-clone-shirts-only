import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from "./store/store";
import { products } from "./utils/Product";
import { Provider } from 'react-redux';
import { setAllProducts } from './store/bag/reducer';
import AppRoutes from './routes/AppRoutes';
import 'react-image-lightbox/style.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
store.dispatch(setAllProducts(products));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRoutes/>
    {/* <App /> */}
    </Provider>
  </React.StrictMode>
);

