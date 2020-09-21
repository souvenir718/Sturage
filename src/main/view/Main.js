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
      // <Segment placeholder style={{ margin: "100px 100px", height: "450px" }}>
      //   <Grid columns={2}>
      //     <Grid.Column>
      //       <Button
      //         content="스터디그룹 둘러보기"
      //         icon="search plus"
      //         size="huge"
      //         style={mainBox}
      //         as={Link}
      //         to="/list"
      //       ></Button>
      //     </Grid.Column>

      //     <Grid.Column verticalAlign="middle">
      //       <Button
      //         content="스터디그룹 만들기"
      //         icon="plus circle"
      //         size="huge"
      //         style={mainBox}
      //         as={Link}
      //         to="/AddGroup"
      //       />
      //     </Grid.Column>
      //   </Grid>

      //   <Divider vertical>OR</Divider>
      // </Segment>
      <Grid columns="two">
        <Grid.Row style={{ height: "100vh" }}>
          <Grid.Column
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontSize: "50px",
                marginTop: "-100px",
                fontWeight: "bolder",
                color: "#8e44ad",
              }}
            >
              <div
                style={{
                  marginTop: "50px",
                  marginRight: "70px",
                  float: "right",
                }}
              >
                Would you like to
              </div>
              <div
                style={{
                  marginTop: "50px",
                  marginRight: "70px",
                  float: "right",
                }}
              >
                participate in Sturage?
              </div>
              <Button
                style={{
                  marginTop: "70px",
                  marginRight: "70px",
                  fontSize: "30px",
                  float: "right",
                }}
                basic
                color="violet"
                content="Enter to Groups"
              />
            </div>
          </Grid.Column>
          <Grid.Column
            style={{
              backgroundImage: "url(/Image/main_page2.jpg)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontSize: "50px",
                marginTop: "-100px",
                fontWeight: "bolder",
                color: "#ffffff",
              }}
            >
              <div
                style={{
                  marginTop: "50px",
                  marginLeft: "70px",
                  float: "left",
                }}
              >
                Would you like to
              </div>
              <div
                style={{
                  marginTop: "50px",
                  marginLeft: "70px",
                  float: "left",
                }}
              >
                participate in Sturage?
              </div>
              <Button
                style={{
                  marginTop: "70px",
                  marginLeft: "70px",
                  fontSize: "30px",
                  float: "left",
                }}
                inverte
                content="Add to Groups"
              />
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Main;
