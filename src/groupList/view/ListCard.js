import React, { Component } from "react";
import "./ListCard.scss";
import { Card, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

class ListCard extends Component {
  render() {
    const { group_id, src, title, desc } = this.props;
    return (
      <Card className="list-card" as={Link} to={`/detail/${group_id}`}>
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
