import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './assets/sass/index.scss';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/wallet-reactor/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
