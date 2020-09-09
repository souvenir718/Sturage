import React, { Component } from "react";
import { Menu, Container, Card, Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

class MyPageSideContainer extends Component {
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const activeItem = this.props.menu;

    return (
      <Container>
        <Menu pointing secondary vertical>
          <Menu.Item
            name="profile"
            active={activeItem === "profile"}
            onClick={this.handleItemClick}
            as={Link}
            to="/my/profile"
            content="내 정보 보기"
          />
          <Menu.Item
            name="group"
            active={activeItem === "group"}
            onClick={this.handleItemClick}
            as={Link}
            to="/my/group"
            content="내 그룹 보기"
          />
          <Menu.Item
            name="todoList"
            active={activeItem === "todoList"}
            onClick={this.handleItemClick}
            as={Link}
            to="/my/todoList"
            content="내 할일 보기"
          />
        </Menu>
      </Container>
    );
  }
}
export default MyPageSideContainer;
