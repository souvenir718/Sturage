import React, { Component } from "react";
import "./GroupListPage.scss";
import { Input, Grid, Button, Icon, Card, Header } from "semantic-ui-react";
import SubjectCard from "./SubjectCard";
import ListCard from "./ListCard";
class GroupListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedGroups: this.props.groupData,
      keyword: "",
    };
  }

  keywordSearch = () => {
    // List 페이지 검색기능 추가
    // group의 title을 공백제거, keywork랑 둘다 대문자로 변경해서 일치하는지 확인
    const { groupData } = this.props;
    const { keyword } = this.state;

    this.setState({
      searchedGroups: groupData.filter((group) => {
        return (
          group.title
            .replace(/(?:\r\n|\r|\n)/g, "<br/>")
            .toUpperCase()
            .lastIndexOf(keyword.toUpperCase()) >= 0
        );
      }),
    });
  };

  enterSearch = (e) => {
    if (e.key === "Enter") this.keywordSearch();
  };

  onChangeKeyword = (e) => {
    this.setState({ keyword: e.target.value });
  };
  getCategoryList = () => {
    return this.props.categoryData.map((data) => (
      <SubjectCard key={data.id} tag={data.tag} icon={data.icon} />
    ));
  };

  getGroupList = () => {
    let dataList = this.state.searchedGroups;
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
            <Input
              size={"massive"}
              fluid
              placeholder="Search..."
              onChange={this.onChangeKeyword}
              onKeyPress={this.enterSearch}
            />
            <Button icon onClick={this.keywordSearch}>
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
