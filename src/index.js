import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './assets/sass/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import 'styles/main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/wallet-reactor/">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
