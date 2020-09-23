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
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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

  selectUserList = () => {
    return this.props.groupMembers.map((member) => {
      const { id, nickname } = { ...member };
      return { key: id, text: nickname, value: id };
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
                  <Label color="blue">
                    {moment(todo.start).format("YYYY-MM-DD")}
                  </Label>
                  <Label color="green">
                    {moment(todo.end).format("YYYY-MM-DD")}
                  </Label>
                </div>
                <Dropdown
                  placeholder="Users"
                  fluid
                  multiple
                  selection
                  options={this.selectUserList()}
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
    const { leaderGroups } = this.props;
    let option = {
      key: "",
      value: "",
      text: "",
    };
    let options = leaderGroups.map(
      (data) =>
        (option = {
          key: data.id,
          value: data.title,
          text: data.title,
        })
    );
    return options;
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
                    onChange={this.props.setSubjectbyGroupTitle}
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
