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
            Signed in as <strong>{urlParams.user}</strong>
          </span>
        ),
        disabled: true,
      },
      { key: "profile", text: "My Profile" },
      { key: "myTodoList", text: "My TodoList" },
      { key: "myGroup", text: "My Group" },
      { key: "settings", text: "Settings" },
      { key: "log-out", text: "Log Out" },
    ];

    return (
      <div>
        <Segment style={{ backgroundColor: "#8e44ad" }} inverted>
          <Menu size="large" inverted secondary>
            <Menu.Menu position="left" style={{ display: 0 - 20 }}>
              <Image
                src="./logo/logo.png"
                size="tiny"
                style={{ marin: "5px", marginLeft: "15px" }}
                href="/"
              />
            </Menu.Menu>
            <Menu.Menu position="right" style={{ display: 0 - 20 }}>
              <Menu.Item>
                {urlParams.tag ? (
                  <Dropdown trigger={trigger} options={options} />
                ) : (
                  <Button inverted href="/login">
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
