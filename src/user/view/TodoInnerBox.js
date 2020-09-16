import React, { Component } from "react";
import { Icon, Button, Card, Label } from "semantic-ui-react";
import { inject, observer } from "mobx-react";
import ModalProgress from "./ModalProgress";

@inject("Store")
@observer
class TodoInnerBox extends Component {
  user = this.props.Store.user;
  day = [
    { key: 1, dayName: "월" },
    { key: 2, dayName: "화" },
    { key: 3, dayName: "수" },
    { key: 4, dayName: "목" },
    { key: 5, dayName: "금" },
    { key: 6, dayName: "토" },
    { key: 7, dayName: "일" },
  ];

  dateCounter = (dueDate) => {
    const sys = new Date().getTime();
    const due = new Date(dueDate).getTime();
    let cnt = sys - due;
    cnt = Math.abs(Math.ceil((cnt / (60 * 60 * 1000 *24))));

    console.log("------>>>" + cnt);

    if (cnt > 0) {
      return cnt + " 일 남았습니다.";
    } else if (cnt < 0) {
      return cnt + " 일 지났습니다.";
    }
  };

  render() {
    const { todo } = this.props;

    return (
      <div>
        <Card
          style={{
            margin: "10px",
            width: "370px",
            backgroundColor: `${todo.progress === "진행중" ? "none" : "gray"}`,
          }}
          key={todo.id}
        >
          <Card.Content>
            <Card.Header
              style={{
                textDecoration: `${
                  todo.progress === "진행중" ? "none" : "line-through"
                }`,
                textDecorationStyle: "double",
              }}
            >
              {todo.todo_title}
              {/* <Label
              ribbon="right"
              style={{ float: "left" }}
              color={todo.progress === "진행중" ? "blue" : "black"}
              content={todo.progress}
            /> */}
            </Card.Header>
            <Card.Description>
              <div>시작일:{todo.created}</div>
              <div>기한:{todo.dueDate}</div>
              <div>{this.dateCounter(todo.dueDate)}</div>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button>
                <Icon name="cog" pointing="left" />
                진행상황 변경
              </Button>
              <Button
                onClick={() => this.user.setModal(true, "inverted")}
                color={todo.progress === "진행중" ? "green" : "black"}
              >
                <Icon
                  name={todo.progress === "진행중" ? "exchange" : "thumbs up"}
                  color="white"
                />
                {todo.progress}
              </Button>
            </div>
          </Card.Content>
        </Card>
        <ModalProgress />
      </div>
    );
  }
}

export default TodoInnerBox;
