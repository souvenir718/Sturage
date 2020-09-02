import React, { Component } from "react";
import "./GroupInfoPage.scss";
import { Grid, Image, Header, Button } from "semantic-ui-react";
class GroupDetailPage extends Component {
  render() {
    return (
      <Grid className="infopage-contianer">
        <Grid.Row centered>
          <Grid.Column width={10} className="infopage-content">
            <Image
              size="large"
              src="Image/GroupListPageImage/book-863418_1920.jpg"
            />
            <div className="content-desc">
              <Header as="h2">수사모(수학을 사랑하는 모임)</Header>
              <p>
                수학퀴즈 및 다양하고 창의적인 문제를 통하여 지적 유희와 두뇌발달
                및 치매 예방을 목적으로 하는 모임수학퀴즈 및 다양하고 창의적인
                문제를 통하여 지적 유희와 두뇌발달 및 치매 예방을 목적으로 하는
                모임수학퀴즈 및 다양하고 창의적인 문제를 통하여 지적 유희와
                두뇌발달 및 치매 예방을 목적으로 하는 모임
              </p>
              <span>김수빈</span>
            </div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column width={6} className="infopage-button">
            <Button className="btn-cancel">돌아가기</Button>{" "}
            <Button className="btn-attend">참여하기</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default GroupDetailPage;
