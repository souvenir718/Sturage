import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

class MyPageSideContainer extends Component {
  state = { activeItem: "profile" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const activeItem = this.props.menu;
    console.log("side----", activeItem);
    return (
      <Menu pointing secondary vertical>
        <Menu.Item
          name="profile"
          active={activeItem === "profile"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="grouplist"
          active={activeItem === "grouplist"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="todolist"
          active={activeItem === "todolist"}
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }
}
export default MyPageSideContainer;
