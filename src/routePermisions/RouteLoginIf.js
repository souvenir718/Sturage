import React, { Component, useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import loading from "../footer/Loading";

const RouteLoginIf = ({ component: Component, ...rest }) => {
  const [page, setPage] = useState(loading);

  const url = "/api/login/verify/";
  const token = localStorage.accessToken ? localStorage.accessToken : false;

  if (token) {
    const data = { token: token };
    axios.post(url, data).then((res) => {
      setPage(
        <Route
          {...rest}
          render={(props) => {
            return <Component {...props} />;
          }}
        />
      );
    });
    return page;
  }
  document.location.href = "/login";
};

export default RouteLoginIf;
