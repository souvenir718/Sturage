import React, { Component } from "react";
import "./Todo.scss";
import { Item, Button } from "semantic-ui-react";
class Todo extends Component {
  render() {
    const { onClick, title, desc } = this.props;
    return (
      <Item className="detailpage-todo">
        <Item.Content>
          <Item.Header>{title}</Item.Header>
          <Item.Description>{desc}</Item.Description>
        </Item.Content>
        <Button onClick={onClick}>Show</Button>
      </Item>
    );
  }
}
export default Todo;
