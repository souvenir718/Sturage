import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import MyProfileContainer from "./MyProfileContainer";
import MyGroupContainer from "./MyGroupContainer";
import MyTodoListContainer from "./MyTodoListContainer";

class MyPageResultContainer extends Component {
  render() {
    const menu = this.props.menu;

    console.log("mypage result container 도착:url:", menu);
    return (
      <Container>
        {menu === "profile" ? <MyProfileContainer /> : ""}
        {menu === "group" ? <MyGroupContainer /> : ""}
        {menu === "todoList" ? <MyTodoListContainer /> : ""}
      </Container>
    );
  }
}

export default MyPageResultContainer;
