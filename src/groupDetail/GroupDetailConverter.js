import React, { Component } from "react";
import GroupInfoPage from "../groupInfo/GroupInfoPage";
import GroupDetail from "./GroupDetailPage";
import { inject, observer } from "mobx-react";
import axios from "axios";

@inject((stores) => ({
  detail: stores.Store.detail,
  user: stores.Store.user,
}))
@observer
class GroupDetailConverter extends Component {
  componentDidMount() {
    const group_id = this.props.match.params.id;
    const url = `/api/groups/${group_id}`;

    axios.get(url).then((res) => {
      this.props.detail.setGroupInfo({ ...res.data });
    });
  }

  render() {
    const { user, detail } = this.props;

    const test = detail.getGroupSubjects.length < 0 ? "test" : <GroupDetail />;

    return test;
  }
}

export default GroupDetailConverter;
