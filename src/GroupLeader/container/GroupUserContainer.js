import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import GroupUser from "../view/GroupUser";

@inject("Store")
@observer
class GroupUserContainer extends Component {
  toggleAttends = (dataId) => {
    this.props.Store.leader.toggleAttends(dataId);
  };
  toggleMembers = (dataId) => {
    this.props.Store.leader.toggleMembers(dataId);
  };
  attendsToMembers = () => {
    this.props.Store.leader.attendsToMembers();
  };
  membersToAttends = () => {
    this.props.Store.leader.membersToAttends();
  };
  render() {
    const attends = this.props.Store.leader.getAttends;
    const members = this.props.Store.leader.getMembers;
    return (
      <GroupUser
        membersToAttends={this.membersToAttends}
        attendsToMembers={this.attendsToMembers}
        toggleAttends={this.toggleAttends}
        toggleMembers={this.toggleMembers}
        attends={attends}
        members={members}
      />
    );
  }
}

export default GroupUserContainer;
