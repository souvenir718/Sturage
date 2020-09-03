import React, { Component } from "react";
import "./ListCard.scss";
import { Card, Image } from "semantic-ui-react";

class ListCard extends Component {
  render() {
    const { src, title, desc } = this.props;
    return (
      <Card className="list-card">
        <Image src={src} wrapped />
        <Card.Content>
          <Card.Header as="h3">{title}</Card.Header>
          <Card.Description>{desc}</Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

export default ListCard;
