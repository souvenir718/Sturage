import React, { useState, useEffect } from "react";
import GroupInfoPage from "../groupInfo/GroupInfoPage";
import GroupDetail from "./GroupDetailPage";
import { inject, observer } from "mobx-react";
import axios from "axios";

const GroupDetailConverter = ({ groupDetail, match }) => {
  const [login] = useState(false);

  const token_verify = () => {
    if (localStorage.accessToken) {
      const url = "/api/jwt-auth/verify/";
      axios.post(url).then((res) => {
        //   this.login =
      });
    }
  };

  // componentDidMount, componentDidUpdate와 같은 방식으로
  useEffect(() => {
    const group_id = match.params.id;
    const url = `/api/groups/${group_id}`;
    axios
      .get(url)
      .then((res) => {
        groupDetail.setGroupInfo({ ...res.data });
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
  });

  return GroupDetail;
};

export default inject(({ Store }) => ({
  groupDetail: Store.detail,
}))(observer(GroupDetailConverter));
