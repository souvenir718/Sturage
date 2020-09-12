import React, { Component, Fragment } from "react";
import "./GroupLeader.scss";
import { Grid, Header, Icon, Input, Dropdown, Label } from "semantic-ui-react";

const users = [
  { key: "subin", text: "Subin", value: "subin" },
  { key: "subin1", text: "Subin1", value: "subin1" },
  { key: "subin2", text: "Subin2", value: "subin2" },
  { key: "subin3", text: "Subin3", value: "subin3" },
  { key: "subin4", text: "Subin4", value: "subin4" },
  { key: "subin5", text: "Subin5", value: "subin5" },
  { key: "subin6", text: "Subin6", value: "subin6" },
];

class GroupLeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdd: false,
      isGroup: false,
      subject: "",
      todo: "",
      userList: [],
      subjectList: this.props.subjectData
    };

    this.numOfSubject = this.props.subjectData.length;
  }
  getList = () => {
    let dataList = this.props.subjectData;
    let subjectList = dataList.map((data) => (
      <Fragment key={data.id}>
        <div className="leader-content">
          <p className="content-header">{data.times}. Times</p>
          <span
            className="content-title"
            onClick={() => this.props.showTodo(data.id)}
          >
            {data.title}
          </span>

          <Icon
            name="minus square"
            onClick={() => this.props.deleteSubject(data.id)}
          />
        </div>
        {data.isTodo && (
          <div className="todos">
            <div className="todo-manage">
              <span>Todo : </span>
              <Input onChange={(e) => this.changeTodo(e)} />
              <Icon name="plus square" onClick={() => this.props.addTodo(data.id, this.state.todo)} />
            </div>
            {data.todoList.map((todo) => (
              <div className="todo" key={todo.id}>
                <p>{todo.title}</p>
                <div className="todo-users">
                  {todo.userList.map((data) => (
                    <Label>{data}</Label>
                  ))}
                </div>
                <Icon
                  onClick={() => {
                    this.props.addUser(data.id, todo.id, this.state.userList);
                  }}
                  className="user-plus"
                  name="plus square"
                />
                <Dropdown
                  placeholder="Users"
                  fluid
                  multiple
                  selection
                  options={users}
                  onChange={this.changeUser}
                />
              </div>
            ))}
          </div>
        )}
      </Fragment>
    ));

    return subjectList;
  };

  changeUser = (event, data) => {
    let newUserList = data.value;
    this.setState({
      userList: newUserList,
    });
  };
  changeTodo = (e) => {
    let newTodo = e.target.value;
    this.setState({
      todo: newTodo,
    });
  };

  onClickAddBtn = () => {
    let isAdd = this.state.isAdd;
    let newSubject = this.state.subject;
    if (!isAdd) {
      this.setState({
        isAdd: !isAdd,
      });
    } else {
      this.props.addSubject(newSubject, this.numOfSubject);
      this.numOfSubject++;
      this.setState({
        isAdd: !isAdd,
      });
    }
  };

  showGroup = () => {
    let isGroup = this.state.isGroup;
    this.setState({
      isGroup: !isGroup,
    });
  };
  changeSubject = (e) => {
    let newSubject = e.target.value;
    this.setState({
      subject: newSubject,
    });
  };

  render() {
    let subjectList = this.getList();
    return (
      <>
        <div className="leader-sidebar">
          <div className="sidebar-content">
            <div className="sidebar-group">
              <Header>
                A Group <Icon name="angle down" onClick={this.showGroup} />
              </Header>
              {this.state.isGroup && (
                <ul className="group-li">
                  <li>subject</li>
                  <li>user</li>
                </ul>
              )}
            </div>
          </div>
          <div className="sidebar-content">
            <div className="sidebar-group">
              <Header onClick={this.showGroup}>
                B Group <Icon name="angle down" />
              </Header>
              {this.state.isGroup && (
                <ul className="group-li">
                  <li>subject</li>
                  <li>user</li>
                </ul>
              )}
            </div>
          </div>
          <div className="sidebar-content">
            <div className="sidebar-group">
              <Header onClick={this.showGroup}>
                C Group <Icon name="angle down" />
              </Header>
              {this.state.isGroup && (
                <ul className="group-li">
                  <li>subject</li>
                  <li>user</li>
                </ul>
              )}
            </div>
          </div>
        </div>
        <Grid className="leader-container">
          <Grid.Row centered>
            <Grid.Column width={8} className="leader-header">
              <Header as="h1">A Group</Header>
              <Icon name="plus square" onClick={this.onClickAddBtn} />
              {this.state.isAdd && (
                <div className="add-todo">
                  <span>Subject : </span>
                  <Input onChange={(e) => this.changeSubject(e)} />
                </div>
              )}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered className="leader-contents">
            <Grid.Column width={8}>{subjectList}</Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    );
  }
}

export default GroupLeader;
