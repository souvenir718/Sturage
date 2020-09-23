import React, { Component } from "react";
import "./GroupLeader.scss";
import {
  Grid,
  Header,
  Icon,
  Input,
  Dropdown,
  Label,
  Button,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const users = [
  { key: "subin", text: "Subin", value: "subin" },
  { key: "subin1", text: "Subin1", value: "subin1" },
  { key: "subin2", text: "Subin2", value: "subin2" },
  { key: "subin3", text: "Subin3", value: "subin3" },
  { key: "subin4", text: "Subin4", value: "subin4" },
  { key: "subin5", text: "Subin5", value: "subin5" },
  { key: "subin6", text: "Subin6", value: "subin6" },
];

const groups = [
  {
    key: "A Group",
    text: "A Group",
    value: "A Group",
  },
  {
    key: "B Group",
    text: "B Group",
    value: "B Group",
  },
  {
    key: "C Group",
    text: "C Group",
    value: "C Group",
  },
];

const CustomInput = ({ value, onClick }) => (
  <Button className="custom-input" onClick={onClick}>
    {value}
  </Button>
);

@inject("Store")
@observer
class GroupLeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdd: false,
    };

    this.numOfSubject = this.props.subjectData.length;
  }

  componentDidMount() {
    const { leader } = this.props.Store;
    leader.setLeaderGroups();
  }

  selectUserList = (members) => {
    return members.map((member) => {
      const { id, nickname } = { ...member };
      return { key: id, text: nickname, value: id };
    });
  };

  startDateChange = (date) => {
    this.setState({
      startDate: date,
    });
  };

  endDateChange = (date) => {
    this.setState({
      endDate: date,
    });
  };

  getList = () => {
    const subjectList = this.props.subjectData.map((data) => (
      <div key={data.subject_id}>
        <div className="leader-content">
          <p className="content-header">{data.time}. Times</p>
          <span
            className="content-title"
            onClick={() => this.props.showTodo(data.subject_id)}
          >
            {data.title}
          </span>

          <Icon
            name="minus square"
            onClick={() => this.props.deleteSubject(data.subject_id)}
          />
        </div>
        {data.isTodo && (
          <div className="todos">
            <div className="todo-manage">
              <span className="todo-manage-title">Todo : </span>
              <Input onChange={(e) => this.props.changeTodo(e)} />
              <Icon
                name="plus square"
                onClick={() => this.props.addTodo(data.subject_id)}
              />
              <div className="todo-manage-date">
                <span>
                  <DatePicker
                    selected={this.props.startDate}
                    onChange={this.props.changeStartDate}
                    selectsStart
                    startDate={this.props.startDate}
                    endDate={this.props.endDate}
                    dateFormat="yyyy-MM-dd"
                    customInput={<CustomInput />}
                  />
                </span>
                <span>
                  <DatePicker
                    selected={this.props.endDate}
                    onChange={this.props.changeEndDate}
                    selectsEnd
                    startDate={this.props.startDate}
                    endDate={this.props.endDate}
                    minDate={this.props.startDate}
                    dateFormat="yyyy-MM-dd"
                    customInput={<CustomInput />}
                  />
                </span>
              </div>
            </div>
            {data.todoGroups.map((todo) => (
              <div className="todo" key={todo.todoGroup_id}>
                <span className="todo-title">{todo.title}</span>
                <Icon
                  onClick={() => {
                    this.props.addUser(data.subject_id, todo.todoGroup_id);
                  }}
                  className="user-plus"
                  name="plus square"
                />

                <div className="todo-users">
                  {todo.members.map((member) => (
                    <Label key={member.id}>{member.nickname}</Label>
                  ))}
                </div>
                <div className="todo-date">
                  <Label color="blue">{todo.start}</Label>
                  <Label color="green">{todo.end}</Label>
                </div>
                <Dropdown
                  placeholder="Users"
                  fluid
                  multiple
                  selection
                  options={this.selectUserList(
                    todo.members ? todo.members.slice("") : []
                  )}
                  onChange={this.props.changeUser}
                  className="users-dropdown"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    ));

    return subjectList;
  };

  onClickAddBtn = () => {
    let isAdd = this.state.isAdd;
    if (!isAdd) {
      this.setState({
        isAdd: !isAdd,
      });
    } else {
      this.props.addSubject(this.numOfSubject);
      this.numOfSubject++;
      this.setState({
        isAdd: !isAdd,
      });
    }
  };

  getOptions = () => {
    const { leaderData } = this.props;
    let option = {
      key: "",
      value: "",
      text: "",
    };
    let options = leaderData.map(
      (data) =>
        (option = {
          key: data.id,
          value: data.name,
          text: data.name,
        })
    );
    return options;
  };

  changeOptions = (event, data) => {
    console.log(data.value);
  };
  render() {
    const subjectList = this.getList();
    const option = this.getOptions();
    return (
      <>
        <Grid className="leader-container">
          <Grid.Row centered>
            <Grid.Column width={12} className="leader-header">
              <Header as="h1">
                <span>
                  <Dropdown
                    inline
                    options={option}
                    defaultValue={option[0].value}
                    onChange={this.changeOptions}
                  />
                </span>
              </Header>
              <Button className="manage-user-btn" as={Link} to={`/groupuser`}>
                manage user
              </Button>
              <Icon name="plus square" onClick={this.onClickAddBtn} />
              {this.state.isAdd && (
                <div className="add-todo">
                  <span>Subject : </span>
                  <Input onChange={(e) => this.props.changeTitle(e)} />
                </div>
              )}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered className="leader-contents">
            <Grid.Column width={12}>{subjectList}</Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    );
  }
}

export default GroupLeader;
