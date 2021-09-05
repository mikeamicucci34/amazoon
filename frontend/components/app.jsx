import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import GreetingContainer from "./homepage/greeting_container";

const App = () => (
  <div className="app">
    <header>
      <h1>Amazoon!</h1>
      <Header/>
    </header>
    <Switch>
    <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </Switch>
  </div>
);

export default App;