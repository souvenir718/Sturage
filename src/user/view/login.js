import React, { Component } from "react";
import {
  Grid,
  Segment,
  Form,
  Header,
  Image,
  Button,
  Message,
} from "semantic-ui-react";

class login extends Component {
  render() {
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 520 }}>
          <Header as="h2" style={{ color: "#8e44ad" }} textAlign="center">
            <Image src="./logo/logo_purple.png" /> Log-in to your account
          </Header>
          <Form size="huge">
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />

              <Button color="purple" fluid size="huge">
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            회원가입하시겠습니까 ? <a href="/signUp">Sign Up</a>
          </Message>
          <Message color="yellow">
            <a href="/kakao"> 카카오톡ID로 로그인하기 </a>
          </Message>
          <Message color="green">
            <a href="/naver">네이버ID로 로그인하기 </a>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default login;
