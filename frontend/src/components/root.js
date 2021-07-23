import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './app';
import NavBarContainer from './navbar/navbar_container';
import {Footer} from './footer/footer'

const Root = ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
        <App />
      <Footer/>
    </HashRouter>
  </Provider>
);

export default Root;