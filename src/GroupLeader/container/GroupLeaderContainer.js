import React, { Component } from "react";
import GroupLeader from "../view/GroupLeader";
import { inject, observer } from "mobx-react";

@inject("Store")
@observer
class GroupLeaderContainer extends Component {
  deleteSubject = (id) => {
    this.props.Store.leader.deleteSubject(id);
  };
  addSubject = (newTitle, id) => {
    this.props.Store.leader.addSubject(newTitle, id);
  };
  showTodo = (id) => {
    this.props.Store.leader.showTodo(id);
  };
  addTodo = (id) => {
    this.props.Store.leader.addTodo(id);
  };
  addUser = (dataId, userId) => {
    this.props.Store.leader.addUser(dataId, userId);
  };
  changeUser = (event, data) => {
    this.props.Store.leader.changeUser(event, data);
  };
  changeTodo = (e) => {
    this.props.Store.leader.changeTodo(e.target.value);
  };
  changeTitle = (e) => {
    this.props.Store.leader.changeTitle(e.target.value);
  };
  changeStartDate = (date) => {
    console.log(date);
    this.props.Store.leader.changeStartDate(date);
  };
  changeEndDate = (date) => {
    this.props.Store.leader.changeEndDate(date);
  };
  render() {
    const startDate = this.props.Store.leader.getStartDate;
    const endDate = this.props.Store.leader.getEndDate;
    const subjectData = this.props.Store.leader.getSubjectData;
    return (
      <GroupLeader
        startDate={startDate}
        endDate={endDate}
        subjectData={subjectData}
        deleteSubject={this.deleteSubject}
        addSubject={this.addSubject}
        showTodo={this.showTodo}
        addTodo={this.addTodo}
        addUser={this.addUser}
        changeUser={this.changeUser}
        changeTodo={this.changeTodo}
        changeTitle={this.changeTitle}
        changeStartDate={this.changeStartDate}
        changeEndDate={this.changeEndDate}
      />
    );
  }
}

export default GroupLeaderContainer;
