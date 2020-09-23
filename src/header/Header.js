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
import { withRouter, Link } from "react-router-dom";
import { inject, observer } from "mobx-react";
import axios from "axios";

// 딥딛딥 퍼플스 #000426
/// #07061C
// 오묘한 블루 #1C166B

const mage_color = "#07061C";

@withRouter
@inject("Store")
@observer
class Header extends Component {
  state = {
    activeItem: "home",
    visible: false,
    mail: "",
  };

  // user = this.props.Store.user;

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  setVisible = () => {
    this.setState({ visible: !this.state.visible });
  };

  mailBoxStyle = {
    backgroundColor: "white",
    padding: "5px",
    textOverflow: "ellipsis",
    lineHeight: "20px",
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
            <MailContainer mailboxStyle={this.mailBoxStyle} />
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
      this.props.Store.user.loadAPiUserData();
    }
  }

  logout = () => {
    localStorage.removeItem("accessToken");
    document.location.href = "/";
  };

  render() {
    // const urlParams = qs.parse(this.props.location.search, {
    //   ignoreQueryPrefix: true,
    // });
    console.log("Render");
    const username = this.props.Store.user.getUserName;
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
            <strong>{username}</strong>'s page
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
          backgroundColor: mage_color,
          padding: "10px",
          boxSizing: "border-box",
        }}
      >
        <Menu size="large" inverted secondary>
          <Menu.Menu position="left" style={{ display: 0 - 20 }}>
            <Image
              src="../../logo/logo.png"
              size="small"
              style={{ transform: "rotate(0deg)", margin: "20px 0 15px 80px" }}
              href="/"
            />
            <Image
              src="../../logo/stur2.png"
              size="mini"
              style={{ transform: "rotate(-10deg)" }}
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
