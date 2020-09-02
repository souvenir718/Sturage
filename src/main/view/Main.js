import React, { Component } from "react";
import { Icon, Grid, Button, Segment, Form, Divider } from "semantic-ui-react";

class Main extends Component {
  render() {
    const mainBox = {
      color: "white",
      backgroundColor: "#8e44ad",
      height: "250px",
      width: "400px",
      fontFamily: "Cute Font', cursive",
    };
    return (
      <Segment placeholder style={{ margin: "100px 100px", height: "450px" }}>
        <Grid columns={2} relaxed="very" stackable>
          <Grid.Column>
            <Button
              content="스터디그룹 둘러보기"
              icon="search plus"
              size="huge"
              style={{
                color: "white",
                backgroundColor: "#8e44ad",
                height: "250px",
                width: "400px",
                paddingTop: "70px",
                lineHeight: "50px",
              }}
              href="/list"
            ></Button>
          </Grid.Column>

          <Grid.Column verticalAlign="middle">
            <Button
              content="스터디그룹 만들기"
              icon="plus circle"
              size="huge"
              style={{
                color: "white",
                backgroundColor: "#8e44ad",
                height: "250px",
                width: "400px",
                paddingTop: "70px",
                lineHeight: "50px",
              }}
              href="/addGroup"
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
