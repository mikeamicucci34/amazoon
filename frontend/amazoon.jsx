import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from '../frontend/components/root';
import { login, signup, logout } from './actions/session_actions'


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  ReactDOM.render(<Root store={store}/>, root);
  // window.getState = store.getState;
  // window.dispatch = store.dispatch; 
  // window.login = login;
  // window.signup = signup;
  // window.logout = logout;
});