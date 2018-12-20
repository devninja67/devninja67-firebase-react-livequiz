import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next';
import './scss/main.css';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';
import i18n from './i18n';

ReactDOM.render((
  <I18nextProvider i18n={ i18n }>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </I18nextProvider>
), document.getElementById('root'));
registerServiceWorker();
