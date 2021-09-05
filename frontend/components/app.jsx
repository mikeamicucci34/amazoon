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
import LoginContainer from './'
import GreetingContainer from "./homepage/greeting_container";

const App = () => (
  <div className="app">
    <header>
      <Header/>
    </header>
    <Switch>
    {/* <AuthRoute exact path="/login" component={LoginContainer} /> */}
    {/* <AuthRoute exact path="/signup" component={SignUpContainer} /> */}
    </Switch>
  </div>
);

export default App;