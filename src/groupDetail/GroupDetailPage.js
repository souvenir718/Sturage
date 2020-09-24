import React, { Component } from "react";
import { Grid, Header, Item, Button, Modal } from "semantic-ui-react";
import "./GroupDetailPage.scss";
import GroupDetailNoSubject from "./view/GroupDetailNoSubject";
import Todo from "./Todo";
import Sidebar from "./Sidebar";
import { inject, observer } from "mobx-react";

@inject("Store")
@observer
class GroupDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlag: false,
      open: false,
    };
  }

  // 각 서브젝트의 컴포턴트 생성
  createSuject = (subjects) => {
    return subjects.map((subject) => {
      return (
        <Todo
          key={subject.subject_id}
          subject_id={subject.subject_id}
          title={subject.title}
          desc={subject.description}
          onClick={this.onOpen}
        />
      );
    });
  };

  onOpen = () => {
    console.log("open");
    this.setState({
      open: true,
    });
    console.log(this.state.open);
  };
  onClose = () => {
    console.log("close");
    this.setState({
      open: false,
    });
  };

  // onMouseMove = (e) => {
  //   if (e.clientX < 100) {
  //     this.setState({
  //       isFlag: true,
  //     });
  //   } else if (e.clientX > 300) {
  //     this.setState({
  //       isFlag: false,
  //     });
  //   }
  // };

  render() {
    console.log("DetailPage");
    const { group, subjects } = this.props;

    return (
      <div>
        {this.state.isFlag && <Sidebar />}
        <Modal
          onClose={this.onClose}
          onOpen={this.onOpen}
          open={this.state.open}
          className="detailpage-modal"
        >
          <Modal.Header>1. Times</Modal.Header>
          <Modal.Content className="modal-content">
            <Modal.Description>
              <Header>I Plan to do Nothin Today</Header>
              <div className="modal-desc">
                <p>I Nothing really hard</p>
                <p>(input result comments)</p>
              </div>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions className="modal-btns">
            <Button className="cancel-btn" onClick={this.onClose}>
              Go Back
            </Button>
            <Button className="submit-btn" onClick={this.onClose}>
              Submit
            </Button>
          </Modal.Actions>
        </Modal>
        <Grid className="detailpage-container">
          <Grid.Row centered>
            <Grid.Column width={8} className="detailpage-header">
              <Header textAlign="center" as="h1">
                {group.title}
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column width={8} className="detailpage-todos">
              <Item.Group>
                {subjects.length > 0 ? (
                  this.createSuject(subjects)
                ) : (
                  <GroupDetailNoSubject />
                )}
              </Item.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default GroupDetailPage;
