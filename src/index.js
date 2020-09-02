import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "semantic-ui-css/semantic.min.css";
import { Provider } from "mobx-react";
import Login from "./user/view/login";
import SignUp from "./user/view/signUp";

// 공통 스토어
import CommonStore from "./Common/store";

ReactDOM.render(
  // 공통 스토어 이름을 Store로 관리
  <BrowserRouter>
    <Provider Store={new CommonStore()}>
      <Route path="/login" component={Login} exact={true} />
      <Route path="/signUp" component={SignUp} exact={true} />
      <Route
        path={["/", "/grouplist", "/groupInfo", "/list", "/detail"]}
        component={App}
        exact={true}
      />
    </Provider>
  </BrowserRouter>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
