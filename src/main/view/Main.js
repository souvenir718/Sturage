import React, { Component } from "react";
import { Grid, Button, Segment, Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Main extends Component {
  render() {
    const mainBox = {
      color: "white",
      backgroundColor: "#8e44ad",
      height: "250px",
      width: "250px",
      paddingTop: "70px",
      lineHeight: "50px",
      fontFamily: "Cute Font', cursive",
    };
    return (
      <Segment placeholder style={{ margin: "100px 100px", height: "450px" }}>
        <Grid columns={2}>
          <Grid.Column>
            <Button
              content="스터디그룹 둘러보기"
              icon="search plus"
              size="huge"
              style={mainBox}
              as={Link}
              to="/list"
            ></Button>
          </Grid.Column>

          <Grid.Column verticalAlign="middle">
            <Button
              content="스터디그룹 만들기"
              icon="plus circle"
              size="huge"
              style={mainBox}
              as={Link}
              to="/AddGroup"
            />
          </Grid.Column>
        </Grid>

        <Divider vertical>OR</Divider>
      </Segment>
      // <div>
      //   <div style={mainBox}>
      //     <Icon name="search plus"></Icon> 스터디그룹 둘러보기
      //   </div>
      //   <Divider vertical />
      //   <div style={mainBox}>
      //     <Icon name="plus circle"></Icon> 스터디그룹 만들기
      //   </div>
      // </div>
    );
  }
}

export default Main;
