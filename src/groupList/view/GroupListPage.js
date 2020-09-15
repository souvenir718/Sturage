import React, { Component } from "react";
import "./GroupListPage.scss";
import { Input, Grid, Button, Icon, Card, Header } from "semantic-ui-react";
import SubjectCard from "./SubjectCard";
import ListCard from "./ListCard";
class GroupListPage extends Component {
  getCategoryList = () => {
    let dataList = this.props.categoryData;
    let categoryList = dataList.map((data) => (
      <SubjectCard key={data.id} tag={data.tag} icon={data.icon} />
    ));
    return categoryList;
  };
  getGroupList = () => {
    let dataList = this.props.groupData;
    let groupList = dataList.map((data) => (
      <ListCard
        key={data.id}
        group_id={data.id}
        src={
          // 승훈 : 아직 이미지 처리는 안했음 임시로 기본이미지세팅
          data.src ? data.src : "Image/GroupListPageImage/book-863418_1920.jpg"
        }
        title={data.title}
        desc={data.desc}
      />
    ));

    return groupList;
  };
  render() {
    let categoryList = this.getCategoryList();
    let groupList = this.getGroupList();
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
              {categoryList}
            </Card.Group>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered className="listpage-list">
          <Grid.Column width={12}>
            <Header as="h2">참여할 그룹 공간 둘러보기</Header>
            <Card.Group centered itemsPerRow={4}>
              {groupList}
            </Card.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default GroupListPage;
