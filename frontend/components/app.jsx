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
import ReviewContainer from '../components/reviews/review_container'
import AllContainer from '../components/product_pages/all/all_container';
import BestSellersContainer from '../components/product_pages/best_sellers/best_sellers_container'
import HumorousFictionContainer from '../components/product_pages/humorous_fiction/humorous_fiction_container'
import ClassicsContainer from '../components/product_pages/classics/classics_container'
import BusinessContainer from '../components/product_pages/business/business_container'
import PhilosophyContainer from '../components/product_pages/philosophy/philosophy_container'
import EditReviewContainer from '../components/reviews/edit_review_container';
import SearchContainer from '../components/search/search_container'

const App = () => (
  <div className="app">
      <Switch>
        <AuthRoute exact path="/login" component={LoginContainer} />
        <AuthRoute exact path="/signup" component={SignupContainer} />
        <Route exact path="/logout" component={LogoutContainer} />
        <Route exact path="/products/:productId" component={SpecificProductContainer}/>
        <ProtectedRoute exact path="/carts" component={CartComponent}/>
        <ProtectedRoute exact path="/products/:productId/review" component={ReviewContainer}/>
        <ProtectedRoute exact path="/products/:productId/review/:reviewId" component={EditReviewContainer}/>
        <Route exact path="/" component={HomeContainer}/>
        <Route exact path="/all" component={AllContainer}/>
        <Route exact path="/bestsellers" component={BestSellersContainer}/>
        <Route exact path="/humorousfiction" component={HumorousFictionContainer}/>
        <Route exact path="/classics" component={ClassicsContainer}/>
        <Route exact path="/business" component={BusinessContainer}/>
        <Route exact path="/philosophy" component={PhilosophyContainer}/>
        <Route exact path="/search/:searchQuery" component={SearchContainer}/>
      </Switch>
  </div>
);

export default App;