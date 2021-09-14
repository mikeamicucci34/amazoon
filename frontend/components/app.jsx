import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter,
  BrowserRouter
} from 'react-router-dom';

import Header from './header/header';
import LoginContainer from './session_form/login_container'
import SignupContainer from './session_form/signup_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LogoutContainer from './session_form/logout_container';
import HeaderContainer from './header/header_container';
import HomeContainer from './homepage/home_container';
import SpecificProductContainer from './product/specific_product_container';
import CartComponent from '../components/cart/cart_container'
import ReviewContainer from '../components/reviews/review_container';


const App = () => (
  <div className="app">
      <Switch>
        <AuthRoute exact path="/login" component={LoginContainer} />
        <AuthRoute exact path="/signup" component={SignupContainer} />
        <Route exact path="/logout" component={LogoutContainer} />
        <Route exact path="/products/:productId" component={SpecificProductContainer}/>
        <Route exact path="/carts" component={CartComponent}/>
        <ProtectedRoute exact path="/review" component={ReviewContainer}/>
        <Route exact path="/" component={HomeContainer}/>
      </Switch>
  </div>
);

export default App;