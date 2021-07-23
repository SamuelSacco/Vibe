import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import '../styling/application.scss'
import PlaylistGenerator from './playlist/playlist_generator';
import Quiz from './quiz/quiz';
// import QuizForm from './quiz/quiz_form';
import NavBarContainer from './navbar/navbar_container';
import UserShowContainer from "./user_show/user_show_container"
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import PlaylistGeneratorContainer from './playlist/playlist_generator_container';
import {Footer} from './footer/footer'

const App = () => (
  
  <div className="splash-wrapper">

      <ProtectedRoute component={NavBarContainer}/>
      <Switch>
      {/* <Test /> */}
          <AuthRoute exact path="/" component={LoginFormContainer}/>
          <Route exact path="/quiz" component={Quiz}/>
          <AuthRoute exact path="/login" component={LoginFormContainer} />
          <AuthRoute exact path="/signup" component={SignupFormContainer} />
          <Route exact path="/playlists" component={PlaylistGeneratorContainer}/>
          <ProtectedRoute exact path="/user/:userId" component={UserShowContainer}/>
      </Switch>
      <Footer/>
    </div>
);

export default App;

