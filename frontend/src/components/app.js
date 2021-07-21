import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import '../styling/application.scss'
import PlaylistGenerator from './playlist/playlist_generator';
import Quiz from './quiz/quiz';
// import NavBarContainer from './nav/navbar_container';

// import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

const App = () => (
  <div className="splash-wrapper">
    {/* <NavBarContainer /> */}
    <Switch>
        <Route exact path="/" />
        <Route exact path="/quiz" component={Quiz}/>
        <Route exact path="/login" component={LoginFormContainer} />
        <Route exact path="/signup" component={SignupFormContainer} />
        <Route exact path="/playlists" component={PlaylistGenerator} />
    </Switch>
  </div>
);

export default App;