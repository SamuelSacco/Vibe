import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import '../styling/application.scss'
import PlaylistGenerator from './playlist/playlist_generator';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import PlaylistGeneratorContainer from './playlist/playlist_generator_container';

const App = () => (
  <div className="splash-wrapper">
    <Switch>
        <Route exact path="/" />
        <Route exact path="/login" component={LoginFormContainer} />
        <Route exact path="/signup" component={SignupFormContainer} />
        <Route exact path="/playlists" component={PlaylistGeneratorContainer} />
    </Switch>
  </div>
);

export default App;