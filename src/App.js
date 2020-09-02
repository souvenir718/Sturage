import React from "react";

import MainPage from "./main/MainPage";
import GroupListPage from "./groupList/GroupListPage";
import GroupDetailPage from "./groupDetail/GroupDetailPage";
import Header from "./header/Header";
import { Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Footer from "./footer/Footer";
import AddGroup from "./user/view/addGroup";

function App() {
  return (
    <>
      <Header />

      <Route path="/" component={MainPage} exact={true} />
      <Route path="/list" component={GroupListPage} exact={true} />
      <Route path="/detail" component={GroupDetailPage} exact={true} />
      <Route path="/addGroup" component={AddGroup} exact={true} />
      <Footer />
    </>
  );
}

export default App;
