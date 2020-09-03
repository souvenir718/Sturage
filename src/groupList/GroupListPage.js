import React, { Component } from "react";
import "./GroupListPage.scss";
import { Input, Grid, Button, Icon, Card, Header } from "semantic-ui-react";
import SubjectCard from "./SubjectCard";
import ListCard from "./ListCard";
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
              <SubjectCard tag={"IT"} icon={"computer"} />
              <SubjectCard tag={"음악"} icon={"music"} />
              <SubjectCard tag={"외국어"} icon={"language"} />
              <SubjectCard tag={"스포츠"} icon={"soccer"} />
              <SubjectCard tag={"미술"} icon={"picture"} />
              <SubjectCard tag={"과학"} icon={"student"} />
              <SubjectCard tag={"미술"} icon={"picture"} />
              <SubjectCard tag={"과학"} icon={"student"} />
            </Card.Group>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered className="listpage-list">
          <Grid.Column width={12}>
            <Header as="h2">참여할 그룹 공간 둘러보기</Header>
            <Card.Group centered itemsPerRow={4}>
              <ListCard
                src={"Image/GroupListPageImage/book-863418_1920.jpg"}
                title={"수사모(수학을 사랑하는 모임)"}
                desc={
                  "수학퀴즈 및 다양하고 창의적인 문제를 통하여 지적 유희와 두뇌발달 및 치매 예방을 목적으로 하는 모임"
                }
              />
              <ListCard
                src={"Image/GroupListPageImage/book-863418_1920.jpg"}
                title={"수사모(수학을 사랑하는 모임)"}
                desc={
                  "수학퀴즈 및 다양하고 창의적인 문제를 통하여 지적 유희와 두뇌발달 및 치매 예방을 목적으로 하는 모임"
                }
              />
              <ListCard
                src={"Image/GroupListPageImage/book-863418_1920.jpg"}
                title={"수사모(수학을 사랑하는 모임)"}
                desc={
                  "수학퀴즈 및 다양하고 창의적인 문제를 통하여 지적 유희와 두뇌발달 및 치매 예방을 목적으로 하는 모임"
                }
              />
              <ListCard
                src={"Image/GroupListPageImage/book-863418_1920.jpg"}
                title={"수사모(수학을 사랑하는 모임)"}
                desc={
                  "수학퀴즈 및 다양하고 창의적인 문제를 통하여 지적 유희와 두뇌발달 및 치매 예방을 목적으로 하는 모임"
                }
              />
              <ListCard
                src={"Image/GroupListPageImage/book-863418_1920.jpg"}
                title={"수사모(수학을 사랑하는 모임)"}
                desc={
                  "수학퀴즈 및 다양하고 창의적인 문제를 통하여 지적 유희와 두뇌발달 및 치매 예방을 목적으로 하는 모임"
                }
              />
              <ListCard
                src={"Image/GroupListPageImage/book-863418_1920.jpg"}
                title={"수사모(수학을 사랑하는 모임)"}
                desc={
                  "수학퀴즈 및 다양하고 창의적인 문제를 통하여 지적 유희와 두뇌발달 및 치매 예방을 목적으로 하는 모임"
                }
              />
              <ListCard
                src={"Image/GroupListPageImage/book-863418_1920.jpg"}
                title={"수사모(수학을 사랑하는 모임)"}
                desc={
                  "수학퀴즈 및 다양하고 창의적인 문제를 통하여 지적 유희와 두뇌발달 및 치매 예방을 목적으로 하는 모임"
                }
              />
              <ListCard
                src={"Image/GroupListPageImage/book-863418_1920.jpg"}
                title={"수사모(수학을 사랑하는 모임)"}
                desc={
                  "수학퀴즈 및 다양하고 창의적인 문제를 통하여 지적 유희와 두뇌발달 및 치매 예방을 목적으로 하는 모임"
                }
              />
            </Card.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default GroupListPage;
