import React, { Component } from "react";
import { Icon, Container } from "semantic-ui-react";
import data from "../data/userData";

class MyTodoListContainer extends Component {
  render() {
    console.log("my todolist container도착");

    return (
      <Container>
        <h2 style={{ margin: "40px 0 40px 0" }}>
          <Icon name="tasks" /> 내 할 일 보기
        </h2>
      </Container>
    );
  }
}

export default MyTodoListContainer;
