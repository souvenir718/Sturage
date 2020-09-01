import React, { Component } from "react";
import "./GroupListPage.scss";
import {
  Input,
  Grid,
  Button,
  Icon,
  Card,
  Header,
  Image,
} from "semantic-ui-react";
class GroupListPage extends Component {
  render() {
    return (
      <Grid className="listpage-contianer">
        <Grid.Row centered className="listpage-search">
          <Grid.Column width={8}>
            <Input size={"massive"} fluid placeholder="Search..." />
            <Button icon>
              <Icon name="search" />
              &nbsp; &nbsp;검색
            </Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered className="listpage-subject">
          <Grid.Column width={12}>
            <Header as="h2">주제별 찾기</Header>
            <Card.Group centered itemsPerRow={8}>
              <Card className="subject-card">
                <Icon size={"huge"} name="computer" />
                <span>IT</span>
              </Card>
              <Card className="subject-card">
                <Icon size={"huge"} name="music" />
                <span>음악</span>
              </Card>
              <Card className="subject-card">
                <Icon size={"huge"} name="language" />
                <span>외국어</span>
              </Card>
              <Card className="subject-card">
                <Icon size={"huge"} name="soccer" />
                <span>스포츠</span>
              </Card>
              <Card className="subject-card">
                <Icon size={"huge"} name="picture" />
                <span>미술</span>
              </Card>
              <Card className="subject-card">
                <Icon size={"huge"} name="student" />
                <span>과학</span>
              </Card>
              <Card className="subject-card">
                <Icon size={"huge"} name="picture" />
                <span>미술</span>
              </Card>
              <Card className="subject-card">
                <Icon size={"huge"} name="student" />
                <span>과학</span>
              </Card>
            </Card.Group>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered className="listpage-list">
          <Grid.Column width={12}>
            <Header as="h2">참여할 그룹 공간 둘러보기</Header>
            <Card.Group centered itemsPerRow={4}>
              <Card className="list-card">
                <Image
                  src="Image/GroupListPageImage/book-863418_1920.jpg"
                  wrapped
                />
                <Card.Content>
                  <Card.Header as="h3">
                    수사모(수학을 사랑하는 모임)
                  </Card.Header>
                  <Card.Description>
                    수학퀴즈 및 다양하고 창의적인 문제를 통하여 지적 유희와
                    두뇌발달 및 치매 예방을 목적으로 하는 모임
                  </Card.Description>
                </Card.Content>
              </Card>
              <Card className="list-card">
                <Image
                  src="Image/GroupListPageImage/book-863418_1920.jpg"
                  wrapped
                />
                <Card.Content>
                  <Card.Header as="h3">
                    수사모(수학을 사랑하는 모임)
                  </Card.Header>
                  <Card.Description>
                    수학퀴즈 및 다양하고 창의적인 문제를 통하여 지적 유희와
                    두뇌발달 및 치매 예방을 목적으로 하는 모임
                  </Card.Description>
                </Card.Content>
              </Card>
              <Card className="list-card">
                <Image
                  src="Image/GroupListPageImage/book-863418_1920.jpg"
                  wrapped
                />
                <Card.Content>
                  <Card.Header as="h3">
                    수사모(수학을 사랑하는 모임)
                  </Card.Header>
                  <Card.Description>
                    수학퀴즈 및 다양하고 창의적인 문제를 통하여 지적 유희와
                    두뇌발달 및 치매 예방을 목적으로 하는 모임
                  </Card.Description>
                </Card.Content>
              </Card>
              <Card className="list-card">
                <Image
                  src="Image/GroupListPageImage/book-863418_1920.jpg"
                  wrapped
                />
                <Card.Content>
                  <Card.Header as="h3">
                    수사모(수학을 사랑하는 모임)
                  </Card.Header>
                  <Card.Description>
                    수학퀴즈 및 다양하고 창의적인 문제를 통하여 지적 유희와
                    두뇌발달 및 치매 예방을 목적으로 하는 모임
                  </Card.Description>
                </Card.Content>
              </Card>
              <Card className="list-card">
                <Image
                  src="Image/GroupListPageImage/book-863418_1920.jpg"
                  wrapped
                />
                <Card.Content>
                  <Card.Header as="h3">
                    수사모(수학을 사랑하는 모임)
                  </Card.Header>
                  <Card.Description>
                    수학퀴즈 및 다양하고 창의적인 문제를 통하여 지적 유희와
                    두뇌발달 및 치매 예방을 목적으로 하는 모임
                  </Card.Description>
                </Card.Content>
              </Card>
              <Card className="list-card">
                <Image
                  src="Image/GroupListPageImage/book-863418_1920.jpg"
                  wrapped
                />
                <Card.Content>
                  <Card.Header as="h3">
                    수사모(수학을 사랑하는 모임)
                  </Card.Header>
                  <Card.Description>
                    수학퀴즈 및 다양하고 창의적인 문제를 통하여 지적 유희와
                    두뇌발달 및 치매 예방을 목적으로 하는 모임
                  </Card.Description>
                </Card.Content>
              </Card>
              <Card className="list-card">
                <Image
                  src="Image/GroupListPageImage/book-863418_1920.jpg"
                  wrapped
                />
                <Card.Content>
                  <Card.Header as="h3">
                    수사모(수학을 사랑하는 모임)
                  </Card.Header>
                  <Card.Description>
                    수학퀴즈 및 다양하고 창의적인 문제를 통하여 지적 유희와
                    두뇌발달 및 치매 예방을 목적으로 하는 모임
                  </Card.Description>
                </Card.Content>
              </Card>
              <Card className="list-card">
                <Image
                  src="Image/GroupListPageImage/book-863418_1920.jpg"
                  wrapped
                />
                <Card.Content>
                  <Card.Header as="h3">
                    수사모(수학을 사랑하는 모임)
                  </Card.Header>
                  <Card.Description>
                    수학퀴즈 및 다양하고 창의적인 문제를 통하여 지적 유희와
                    두뇌발달 및 치매 예방을 목적으로 하는 모임
                  </Card.Description>
                </Card.Content>
              </Card>
            </Card.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default GroupListPage;
