import React, { Component } from "react";
import GroupListPage from "../view/GroupListPage";
import { inject, observer } from "mobx-react";
import axios from "axios";
import Loading from "../../footer/Loading";

@inject("Store")
@observer
class GroupListContainer extends Component {
  componentDidMount() {
    const api = "/api/groups/";
    axios.get(api).then((res) => {
      this.props.Store.list.setGroupData(res.data);
    });
  }

  render() {
    let groupData = this.props.Store.list.getGroupData;
    let categoryData = this.props.Store.list.getCategoryData;

    return (
      <>
        {groupData.length !== 0 ? (
          <GroupListPage groupData={groupData} categoryData={categoryData} />
        ) : (
          Loading
        )}
      </>
    );
  }
}

export default GroupListContainer;
