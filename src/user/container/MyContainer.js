import React, { Component } from "react";
import MyPageSideContainer from "./MyPageSideContainer";
import MyPageResultContainer from "./MyPageResultContainer";
import { Grid } from "semantic-ui-react";
class MyContainer extends Component {
  render() {
    const menu = this.props.match.params.menu;
    return (
      <Grid style={{ margin: "30px 0 0 30px" }}>
        <Grid.Row>
          <Grid.Column width={4}>
            <MyPageSideContainer menu={menu} />
          </Grid.Column>
          <Grid.Column width={12}>
            <MyPageResultContainer menu={menu} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default MyContainer;
