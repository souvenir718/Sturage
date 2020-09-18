import React, { Component } from "react";
import {
  Grid,
  Segment,
  Form,
  Header,
  Image,
  Button,
  Message,
  Input,
} from "semantic-ui-react";

import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  onIdChange = (e) => this.setState({ username: e.target.value });
  onPasswordChange = (e) => this.setState({ password: e.target.value });

  userLogin = async () => {
    const api = "/api/login/";
    const data = {
      username: this.state.username,
      password: this.state.password,
    };

    return await axios
      .post(api, data)
      .then((res) => {
        const jwt_token = res.data.token;
        localStorage.accessToken = jwt_token;
        document.location.href = "/";
        // axios.defaults.headers.common["Authorization"] = `JWT ${jwt_token}`;
      })
      .catch(function (error) {
        if (error.response) {
          const err = {
            header: error.response.headers,
            code: error.response.status,
            mssage: error.response.data.detail,
          };
          console.log(err);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
      });
  };

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
              <Form.Field>
                <Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="ID"
                  onChange={this.onIdChange}
                />
              </Form.Field>
              <Form.Field>
                <Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Passoword"
                  type="password"
                  onChange={this.onPasswordChange}
                />
              </Form.Field>

              <Button
                color="purple"
                fluid
                size="huge"
                onClick={() => {
                  this.userLogin();
                }}
              >
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

export default Login;
