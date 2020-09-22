import React, { Component } from "react";
import MyProfileContainer from "./MyProfileContainer";
import MyGroupContainer from "./MyGroupContainer";
import MyTodoListContainer from "./MyTodoListContainer";
import MyCalendar from "../view/MyCalendar";
import MailContainer from "./MailContainer";
class MyPageResultContainer extends Component {
  render() {
    const menu = this.props.menu;
    const mailBoxStyle ={
      padding: "10px",
      textOverflow: "ellipsis",
      lineHeight: "20px",
      fontSize: "30px"
    };
    console.log("mypage result container 도착:url:", menu);
    return (
      <div style={{ marginTop: "20px" }}>
        {menu === "profile" ? <MyProfileContainer /> : ""}
        {menu === "group" ? <MyGroupContainer /> : ""}
        {menu === "todoList" ? <MyTodoListContainer /> : ""}
        {menu === "myCalendar" ? <MyCalendar /> : ""}
        {menu === "mail" ? <MailContainer mailboxStyle={mailBoxStyle} /> : ""}
      </div>
    );
  }
}

export default MyPageResultContainer;
