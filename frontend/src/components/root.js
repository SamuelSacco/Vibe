import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './app';
import NavBarContainer from './navbar/navbar_container';

const Root = ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
        <App />
    </HashRouter>
  </Provider>
);

export default Root;