import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import GroupUser from "../view/GroupUser";

@inject("Store")
@observer
class GroupUserContainer extends Component {
  toggle = (dataId) => {
    this.props.Store.leader.toggle(dataId);
  };
  attendsToMembers = () => {
    this.props.Store.leader.attendsToMembers();
  };
  render() {
    const attends = this.props.Store.leader.getAttends;
    const members = this.props.Store.leader.getMembers;
    return (
      <GroupUser
        attendsToMembers={this.attendsToMembers}
        toggle={this.toggle}
        attends={attends}
        members={members}
      />
    );
  }
}

export default GroupUserContainer;
