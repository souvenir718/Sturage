import React, { Component } from "react";
import GroupListPage from "../view/GroupListPage";
import { inject, observer } from "mobx-react";

@inject("Store")
@observer
class GroupListContainer extends Component {
  render() {
    let groupData = this.props.Store.list.getGroupData;
    let categoryData = this.props.Store.list.getCategoryData;
    return <GroupListPage groupData={groupData} categoryData={categoryData} />;
  }
}

export default GroupListContainer;
