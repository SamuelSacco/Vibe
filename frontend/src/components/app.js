import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import '../styling/application.scss'
// import NavBarContainer from './nav/navbar_container';

// import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

const App = () => (
  <div className="splash-wrapper">
    {/* <NavBarContainer /> */}
    <Switch>
        <Route exact path="/" />
        <Route exact path="/login" component={LoginFormContainer} />
        <Route exact path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
);

export default App;