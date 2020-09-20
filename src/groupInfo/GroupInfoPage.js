import React, { Component } from "react";
import "./GroupInfoPage.scss";
import { Grid, Image, Header, Button } from "semantic-ui-react";
import { inject, observer } from "mobx-react";
import axios from "axios";

@inject("Store")
@observer
class GroupInfoPage extends Component {
  constructor(props) {
    super(props);
  }

  attendGroup = () => {
    if (window.confirm("그룹에 참여하시겠습니까?")) {
      const group_id = this.props.Store.detail.getGroupInfo.id;
      const url = `/api/groups/${group_id}/attend/`;
      axios.put(url).then((res) => alert("참가신청 되었습니다."));
    }
  };

  render() {
    const group = this.props.Store.detail.getGroupInfo;
    const leader = { ...group.leader };

    return (
      <Grid className="infopage-contianer">
        <Grid.Row centered>
          <Grid.Column width={10} className="infopage-content">
            <Image
              size="large"
              src="/Image/GroupListPageImage/book-863418_1920.jpg"
            />
            <div className="content-desc">
              <Header as="h2">{group.title}</Header>
              <p>{group.description}</p>
              <span>{leader.nickname}</span>
            </div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column width={6} className="infopage-button">
            <Button className="btn-cancel">돌아가기</Button>{" "}
            <Button
              className="btn-attend"
              onClick={() => {
                this.attendGroup();
              }}
            >
              참여하기
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default GroupInfoPage;
