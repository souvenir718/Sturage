import React, { Component } from "react";
import "./SubjectCard.scss";
import { Card, Icon } from "semantic-ui-react";
class SubjectCard extends Component {
  render() {
    const { tag, icon } = this.props;
    return (
      <Card className="subject-card">
        <Icon size={"huge"} name={icon} />
        <span>{tag}</span>
      </Card>
    );
  }
}

export default SubjectCard;
