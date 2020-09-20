import React from "react";

import MainPage from "./main/MainPage";
import GroupDetailConverter from "./groupDetail/GroupDetailConverter";
import Header from "./header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./footer/Footer";
import AddGroup from "./user/view/AddGroup";
import SignUpPage from "./user/view/SignUp";
import myContainer from "./user/container/MyContainer";
import GroupListContainer from "./groupList/container/GroupListContainer";
// import GroupLeader from "./groupLeader/view/GroupLeader";
import GroupLeaderContainer from "./GroupLeader/container/GroupLeaderContainer";
import GroupUserContainer from "./GroupLeader/container/GroupUserContainer";
function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route path="/" component={MainPage} exact={true} />
          <Route path="/signUp" component={SignUpPage} exact={true} />
          <Route path="/list" component={GroupListContainer} exact={true} />
          <Route
            path="/detail/:id"
            component={GroupDetailConverter}
            exact={true}
          />
          <Route path="/addGroup" component={AddGroup} exact={true} />
          <Route path="/my/:menu" component={myContainer} exact={true} />
          <Route path="/leader" component={GroupLeaderContainer} exact={true} />
          <Route
            path="/groupuser"
            component={GroupUserContainer}
            exact={true}
          />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
