import React from "react";

import MainPage from "./main/MainPage";
import GroupListPage from "./groupList/GroupListPage";
import GroupInfoPage from "./groupInfo/GroupInfoPage";
import Header from "./header/Header";
import { Route } from "react-router-dom";
import Footer from "./footer/Footer";
import GroupDetailPage from "./groupDetail/GroupDetailPage";
import AddGroup from "./user/view/AddGroup";
import SignUpPage from "./user/view/SignUp";
import myPage from "./user/view/My";

function App() {
  return (
    <>
      <Header />
      <Route path="/" component={MainPage} exact={true} />
      <Route path="/signUp" component={SignUpPage} exact={true} />
      <Route path="/list" component={GroupListPage} exact={true} />
      <Route path="/info" component={GroupInfoPage} exact={true} />
      <Route path="/detail" component={GroupDetailPage} exact={true} />
      <Route path="/addGroup" component={AddGroup} exact={true} />
      <Route path="/my" component={myPage} exact={true} />
      <Footer />
    </>
  );
}

export default App;
