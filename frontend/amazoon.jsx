import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import { login, signup, logout } from './actions/session_actions'


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  ReactDOM.render(<h1>Welcome to Amazoon</h1>, root);
  window.getState = store.getState;
  window.dispatch = store.dispatch; 
  // window.login = login;
  // window.signup = signup;
  // window.logout = logout;
});