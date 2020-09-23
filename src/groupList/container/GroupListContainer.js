import React, { Component } from "react";
import GroupListPage from "../view/GroupListPage";
import { inject, observer } from "mobx-react";
import axios from "axios";

@inject("Store")
@observer
class GroupListContainer extends Component {
  componentDidMount() {
    const api = "/api/groups/";
    axios
      .get(api)
      .then((res) => {
        this.props.Store.list.setGroupData(res.data);
      })
      .catch(function (error) {
        if (error.response) {
          const err = {
            header: error.response.headers,
            code: error.response.status,
            mssage: error.response.data.detail,
          };
          console.log(err);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
        console.log(error.config.detail);
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
          <div>TEST</div>
        )}
      </>
    );
  }
}

export default GroupListContainer;
