import React, { Component } from "react";
import GroupInfoPage from "../groupInfo/GroupInfoPage";
import GroupDetail from "./GroupDetailPage";
import { inject, observer } from "mobx-react";
import axios from "axios";
import Loading from "../footer/Loading";

@inject((stores) => ({
  detail: stores.Store.detail,
  user: stores.Store.user,
}))
@observer
class GroupDetailConverter extends Component {
  componentDidMount() {
    console.log("componentDidMount");
    const group_id = this.props.match.params.id;
    const url = `/api/groups/${group_id}`;

    axios.get(url).then((res) => {
      this.props.detail.setGroupInfo({ ...res.data });
    });
  }

  render() {
    console.log("Converter");
    const { user, detail } = this.props;
    const attendGroups = user.getAttendGroups;
    const groupId = detail.groupInfo.id;

    const group = detail.getGroupInfo;
    const subjects = detail.getGroupSubjects;

    if (Object.keys(group).length !== 0) {
      if (user.loginConfirm) {
        if (attendGroups.find((group) => group.id === groupId)) {
          return (
            <GroupDetail
              history={this.props.history}
              group={group}
              subjects={subjects}
            />
          );
        }
      }
      return (
        <GroupInfoPage
          history={this.props.history}
          group={detail.getGroupInfo}
        />
      );
    }
    return Loading;
  }
}

export default GroupDetailConverter;
