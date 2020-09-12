import React, { Component } from "react";
import GroupLeader from "../view/GroupLeader";
import { inject, observer } from "mobx-react";

@inject("Store")
@observer
class GroupLeaderContainer extends Component {
  deleteSubject = (id) =>{
    this.props.Store.leader.deleteSubject(id);
  }
  addSubject =  (newTitle, id) =>{
    this.props.Store.leader.addSubject(newTitle, id);
  }
  showTodo = (id) =>{
    this.props.Store.leader.showTodo(id);
  }
  addTodo = (id, todo) =>{
    this.props.Store.leader.addTodo(id, todo);
  }
  addUser = (dataId, userId, userList) =>{
    this.props.Store.leader.addUser(dataId, userId, userList);
  }
  render() {
    const subjectData = this.props.Store.leader.getSubjectData;
    return <GroupLeader subjectData={subjectData} deleteSubject={this.deleteSubject} addSubject={this.addSubject} showTodo={this.showTodo} addTodo={this.addTodo} addUser={this.addUser}/>;
  }
}

export default GroupLeaderContainer;
