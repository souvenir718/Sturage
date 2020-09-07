import React, { Component } from "react";
import { Container } from "semantic-ui-react";
class MyPageResultContainer extends Component {
  render() {
    const activeItem = this.props.menu;
    console.log("result----", activeItem);

    return <Container>{activeItem}</Container>;
  }
}

export default MyPageResultContainer;
