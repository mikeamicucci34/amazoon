import React from "react";
import ReactDOM from "react-dom";
import { login } from "./util/session_api_utlis";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
//   const store = configureStore();
  ReactDOM.render(<h1>Welcome to Amazoon</h1>, root);
//   window.ajax = (user_info) => (
//       $.ajax ({
//           method: "POST",
//           url: 'api/session',
//           data: { user_info }
//       })
//   )

    window.login = login;
});