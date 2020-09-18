import React, { Component } from "react";
import {
  Menu,
  Dropdown,
  Image,
  Icon,
  Button,
  Label,
  Card,
  CardContent,
} from "semantic-ui-react";
import MailContainer from "../user/container/MailContainer";
import qs from "qs";
import { withRouter, Link } from "react-router-dom";
import { inject, Observer } from "mobx-react";
import axios from "axios";

@Observer
@withRouter
@inject("Store")
class Header extends Component {
  state = {
    activeItem: "home",
    visible: false,
    mail: "",
    username: "" /*추가*/,
    nickname: "" /*추가*/,
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  setVisible = () => {
    this.setState({ visible: !this.state.visible });
  };

  mail = () => {
    this.setState({
      mail: this.state.mail ? (
        ""
      ) : (
        <Card
          style={{
            position: "absolute",
            zIndex: "10",
            right: "30px",
            width: "300px",
            height: "400px",
            overflow: "auto",
            marginTop: "-5px",
          }}
        >
          <Card.Content>
            <Card.Header>
              <Icon name="time" color="olive" />
              　최근 메일함
            </Card.Header>
          </Card.Content>
          <CardContent>
            <MailContainer />
          </CardContent>
        </Card>
      ),
    });
  };

  enhanceAccessToeken = () => {
    const { accessToken } = localStorage;
    if (accessToken) {
      axios.defaults.headers.common["Authorization"] = `JWT ${accessToken}`;
      return true;
    } else return false;
  };

  componentDidMount() {
    if (this.enhanceAccessToeken()) {
      const url = "api/users/info";
      axios
        .get(url)
        .then((res) => {
          console.log(res.data);
          this.setState({ username: res.data.username });
          this.setState({ nickname: res.data.nickname });
        })
        .catch(function (error) {
          if (error.response) {
            const err = {
              header: error.response.headers,
              code: error.response.status,
              mssage: error.response.data,
            };
            console.log(err);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
        });
    }
  }

  logout = () => {
    localStorage.removeItem("accessToken");
    document.location.href = "/";
  };

  render() {
    const { username } = this.state;
    const urlParams = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true,
    });
    const trigger = (
      <span>
        <Icon name="user" /> Hello, {username}
      </span>
    );

    const options = [
      {
        key: "user",
        text: (
          <span>
            <strong>{urlParams.user}</strong>'s page
          </span>
        ),
        disabled: true,
      },
      { key: "profile", text: "내 정보 보기", href: "/my/profile" },
      { key: "myTodoList", text: "내 할일 보기", href: "/my/TodoList" },
      { key: "myGroup", text: "내 그룹 보기", href: "/my/Group" },
      { key: "settings", text: "설정", href: "/my/settings" },
      // { key: "log-out", text: "로그아웃", href: "/my/logout" },
    ];

    return (
      <div
        style={{
          backgroundColor: "#8e44ad",
          padding: "10px",
          boxSizing: "border-box",
        }}
      >
        <Menu size="large" inverted secondary>
          <Menu.Menu position="left" style={{ display: 0 - 20 }}>
            <Image
              src="./logo/logo.png"
              size="tiny"
              style={{ marin: "5px", marginLeft: "80px" }}
              href="/"
            />
          </Menu.Menu>
          {/* {urlParams.tag ? ( */}
          {localStorage.accessToken ? (
            <Menu.Menu position="right" style={{ display: 0 - 20 }}>
              <Menu.Item>
                <Dropdown trigger={trigger} options={options} />
              </Menu.Item>
              <Menu.Item
                // style={{ margin: "0 100px 0 0" }}
                onClick={() => this.mail()}
              >
                <Icon name="mail" /> Messages
                <Label color="red" floating>
                  5
                </Label>
              </Menu.Item>
              <Menu.Item>
                <div
                  onClick={() => {
                    this.logout();
                  }}
                >
                  로그아웃
                </div>
              </Menu.Item>
            </Menu.Menu>
          ) : (
            <Menu.Menu position="right" style={{ display: 0 - 20 }}>
              <Menu.Item>
                <Button
                  inverted
                  as={Link}
                  to="/login"
                  style={{ marginRight: "80px" }}
                >
                  <Icon name="key" /> Login
                </Button>
              </Menu.Item>
            </Menu.Menu>
          )}
        </Menu>
        {this.state.mail}
      </div>
    );
  }
}

export default Header;
