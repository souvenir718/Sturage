import React, { Component } from "react";
import MyPageSideContainer from "../container/MyPageSideContainer";
import MyPageResultContainer from "../container/MyPageResultContainer";
import { Grid, Button, Segment, Divider } from "semantic-ui-react";

class My extends Component {
  render() {
    return (
      <Grid celled>
        <Grid.Row>
          <Grid.Column
            width={3}
            style={{ backgroundColor: "black", color: "white" }}
          >
            <MyPageSideContainer />
          </Grid.Column>

          <Grid.Column width={13}>
            <MyPageResultContainer />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default My;
