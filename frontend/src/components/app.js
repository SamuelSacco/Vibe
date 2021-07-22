import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import '../styling/application.scss'
import PlaylistGenerator from './playlist/playlist_generator';
import Quiz from './quiz/quiz';
import NavBarContainer from './navbar/navbar_container';
import UserShowContainer from "./user_show/user_show_container"
import Splash from './splash/splash';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import PlaylistGeneratorContainer from './playlist/playlist_generator_container';

const App = () => (

    <div className="splash-wrapper">
      <Switch>
          <AuthRoute exact path="/" component={LoginFormContainer}/>
          <Route exact path="/quiz">
            <NavBarContainer />
            <Quiz/>
          </Route>
          <AuthRoute exact path="/signup" component={SignupFormContainer} />
          <Route exact path="/playlists">
            <NavBarContainer />
            <PlaylistGeneratorContainer/>
          </Route>
          <ProtectedRoute exact path="/user/:userId">
            <NavBarContainer />
            <UserShowContainer />
          </ProtectedRoute>
      </Switch>
    </div>
);

export default App;