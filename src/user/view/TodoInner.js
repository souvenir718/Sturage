import React, { Component } from "react";
import { Card, Label } from "semantic-ui-react";
import TodoInnerBox from "./TodoInnerBox";
class TodoInner extends Component {
  render() {
    const { group, todoList } = this.props;
    const TodoInnerMake = todoList.map((todo) => <TodoInnerBox todo={todo} />);
    return (
      <div>
        <Card style={{ width: "800px", margin: "30px" }}>
          <Card.Header>
            <Label color="purple" inverted size="huge" content={group.title} />
          </Card.Header>

          <Card.Group style={{ margin: "10px" }}>{TodoInnerMake}</Card.Group>
        </Card>
      </div>
    );
  }
}

export default TodoInner;
