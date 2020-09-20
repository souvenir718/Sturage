import React, { Component } from "react";
import { Icon } from "semantic-ui-react";
import data from "../data/todoData";
import TodoInner from "../view/TodoInner";

class MyTodoListContainer extends Component {
  render() {
    const todoInnerMake = data.map((obj) => (
      <TodoInner group={obj.group} todoList={obj.todoList} />
    ));

    console.log("my todolist container도착");

    return (
      <div>
        <h2 style={{ margin: "40px 0 40px 0" }}>
          <Icon name="tasks" /> 내 할 일 보기
        </h2>
        {todoInnerMake}
      </div>
    );
  }
}

export default MyTodoListContainer;
