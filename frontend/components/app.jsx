import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import Header from './header/header';
import LoginContainer from './session_form/login_container'
import SignupContainer from './session_form/signup_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LogoutContainer from './session_form/logout_container';
import HeaderContainer from './header/header_container';


const App = () => (
  <div className="app">
    <Switch>
      <Route exact path="/login" component={LoginContainer} />
      <Route exact path="/signup" component={SignupContainer} />
      <Route exact path="/logout" component={LogoutContainer} />
      <Route exact path="/" component={HeaderContainer}/>
    </Switch>
  </div>
);

export default App;