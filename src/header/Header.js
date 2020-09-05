import React, { Component } from "react";
import {
  Segment,
  Menu,
  Dropdown,
  Image,
  Icon,
  Button,
} from "semantic-ui-react";
import qs from "qs";
import { withRouter, Link } from "react-router-dom";
import { inject, Observer } from "mobx-react";

@Observer
@withRouter
@inject("Store")
class Header extends Component {
  state = { activeItem: "home", visible: false };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  setVisible = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    const urlParams = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true,
    });
    const trigger = (
      <span>
        <Icon name="user" /> Hello, {urlParams.user}
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
      { key: "profile", text: "내 정보 보기" , href:"/my/profile" },
      { key: "myTodoList", text: "내 할일 보기" , href:"/my/TodoList" },
      { key: "myGroup", text: "내 그룹 보기" , href:"/my/Group" },
      { key: "settings", text: "설정" , href:"/my/settings"},
      { key: "log-out", text: "로그아웃", href:"/my/logout" },
    ];

    return (
      <div>
        <Segment style={{ backgroundColor: "#8e44ad" }} inverted>
          <Menu size="large" inverted secondary>
            <Menu.Menu position="left" style={{ display: 0 - 20 }}>
              <Image
                src="./logo/logo.png"
                size="tiny"
                style={{ marin: "5px", marginLeft: "80px" }}
                as={Link}
                to="/"
              />
            </Menu.Menu>
            <Menu.Menu position="right" style={{ display: 0 - 20 }}>
              <Menu.Item>
                {urlParams.tag ? (
                  <Dropdown
                    trigger={trigger}
                    options={options}
                    style={{ marginRight: "80px" }}
                  />
                ) : (
                  <Button
                    inverted
                    as={Link}
                    to="/login"
                    style={{ marginRight: "80px" }}
                  >
                    <Icon name="key" /> Login
                  </Button>
                )}
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </Segment>
      </div>
    );
  }
}

export default Header;
