import React, { Component } from "react";
import MyPageSideContainer from "./MyPageSideContainer";
import MyPageResultContainer from "./MyPageResultContainer";
import { Grid } from "semantic-ui-react";
class MyContainer extends Component {
  render() {
    const menu = this.props.match.params.menu;
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={5}>
            <MyPageSideContainer menu={menu} />
          </Grid.Column>
          <Grid.Column width={11}>
            <MyPageResultContainer menu={menu} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default MyContainer;
