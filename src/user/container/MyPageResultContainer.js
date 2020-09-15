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
      <div style={{ marginTop: "20px" }}>
        {menu === "profile" ? <MyProfileContainer /> : ""}
        {menu === "group" ? <MyGroupContainer /> : ""}
        {menu === "todoList" ? <MyTodoListContainer /> : ""}
      </div>
    );
  }
}

export default MyPageResultContainer;
