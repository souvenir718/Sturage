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
      <Grid columns="two">
        <Grid.Row style={{ height: "100vh" }}>
          <Grid.Column
            style={{
              display: "flex",
              justifyContent: "flex-end",
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
                  marginTop: "40px",
                  marginRight: "90px",
                  textAlign: "right",
                }}
              >
                진행중인 STURAGE 그룹에
              </div>
              <div
                style={{
                  marginTop: "70px",
                  marginRight: "90px",
                  textAlign: "right",
                }}
              >
                참여하시겠습니까?
              </div>
              <div
                style={{
                  textAlign: "right",
                }}
              >
                <Button
                  style={{
                    marginTop: "70px",
                    marginRight: "110px",
                    fontSize: "30px",
                  }}
                  basic
                  color="violet"
                  content="Enter to Groups"
                  as={Link}
                  to="/list"
                />
              </div>
            </div>
          </Grid.Column>
          <Grid.Column
            style={{
              backgroundImage: "url(/Image/main_page2.jpg)",
              display: "flex",
              justifyContent: "flex-start",
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
                  marginTop: "40px",
                  marginLeft: "90px",
                }}
              >
                진행 할 STURAGE 그룹을
              </div>
              <div
                style={{
                  marginTop: "70px",
                  marginLeft: "90px",
                }}
              >
                생성하시겠습니까?
              </div>
              <div style={{ textAlign: "left" }}>
                <Button
                  style={{
                    marginTop: "70px",
                    marginLeft: "110px",
                    fontSize: "30px",
                  }}
                  as={Link}
                  to="/AddGroup"
                  color="white"
                  basic
                  inverted
                  content="Add to Groups"
                />
              </div>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Main;
