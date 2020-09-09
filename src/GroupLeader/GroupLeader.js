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
      subjectList: [
        {
          id: 0,
          times: 1,
          title: "First Week Subject",
          isTodo: false,
          todoList: [
            { id: 0, title: "First Todo", userList: [] },
            { id: 1, title: "Second Todo" },
            { id: 2, title: "Third Todo" },
          ],
          userList: [],
        },
        {
          id: 1,
          times: 2,
          title: "Second Week Subject",
          isTodo: false,
          todoList: [
            { id: 0, title: "First Todo" },
            { id: 1, title: "Second Todo" },
            { id: 2, title: "Third Todo" },
          ],
          userList: [],
        },
        {
          id: 2,
          times: 3,
          title: "Third Week Subject",
          isTodo: false,
          todoList: [
            { id: 0, title: "First Todo" },
            { id: 1, title: "Second Todo" },
            { id: 2, title: "Third Todo" },
          ],
          userList: [],
        },
      ],
    };

    this.numOfSubject = this.state.subjectList.length;
  }
  getList = () => {
    let dataList = this.state.subjectList;
    let subjectList = dataList.map((data) => (
      <Fragment key={data.id}>
        <div className="leader-content">
          <p className="content-header">{data.times}. Times</p>
          <span
            className="content-title"
            onClick={() => this.onClickAddTodo(data.id)}
          >
            {data.title}
          </span>

          <Icon
            name="minus square"
            onClick={() => this.deleteSubject(data.id)}
          />
        </div>
        {data.isTodo && (
          <div className="todos">
            <div className="todo-manage">
              <span>Todo : </span>
              <Input onChange={(e) => this.changeTodo(e)} />
              <Icon name="plus square" onClick={() => this.addTodo(data.id)} />
            </div>
            {data.todoList.map((todo) => (
              <div className="todo" key={todo.id}>
                <p>{todo.title}</p>
                <div className="todo-users">
                  {data.userList.map((data) => (
                    <Label>{data}</Label>
                  ))}
                </div>
                <Icon
                  onClick={() => {
                    this.addUser(data.id);
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
  addUser = (id) => {
    let dataList = this.state.subjectList;
    let subjectList = dataList.map((data) =>
      data.id === id ? { ...data, userList: this.state.userList } : data
    );

    this.setState({
      subjectList: subjectList,
    });
  };

  changeUser = (event, data) => {
    let newUserList = data.value;
    this.setState({
      userList: newUserList,
    });
  };
  addTodo = (id) => {
    let dataList = this.state.subjectList;
    let subject = dataList.find((data) => data.id === id);

    let newTodoList = subject.todoList;
    let newTodo = {
      id: newTodoList.length,
      title: this.state.todo,
    };
    newTodoList.push(newTodo);
    let newSubjectList = dataList.map((data) =>
      data.id === id ? { ...data, todoList: newTodoList } : data
    );
    this.setState({
      subjectList: newSubjectList,
    });
  };
  changeTodo = (e) => {
    let newTodo = e.target.value;
    this.setState({
      todo: newTodo,
    });
  };

  onClickAddTodo = (id) => {
    let dataList = this.state.subjectList;

    let subjectList = dataList.map((data) =>
      data.id === id ? { ...data, isTodo: !data.isTodo } : data
    );

    this.setState({
      subjectList: subjectList,
    });
  };
  addSubject = (newSubject) => {
    let dataList = this.state.subjectList;

    let newData = {
      id: this.numOfSubject,
      times: this.numOfSubject + 1,
      title: newSubject,
      isTodo: false,
      todoList: [],
      userList: [],
    };
    this.numOfSubject++;

    dataList.push(newData);

    this.setState({
      subjectList: dataList,
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
      this.addSubject(newSubject);
      this.setState({
        isAdd: !isAdd,
      });
    }
  };

  deleteSubject = (id) => {
    let dataList = this.state.subjectList;

    dataList = dataList.filter((data) => data.id !== id);

    this.setState({
      subjectList: dataList,
    });
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
