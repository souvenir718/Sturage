import React, { Component } from "react";
import { Grid, Header, Item, Button, Image, Modal } from "semantic-ui-react";
import "./GroupDetailPage.scss";
import Todo from "./Todo";
class GroupDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlag: false,
      open: false,
    };
  }
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
  onMouseMove = (e) => {
    if (e.clientX < 100) {
      this.setState({
        isFlag: true,
      });
    } else if (e.clientX > 300) {
      this.setState({
        isFlag: false,
      });
    }
  };
  render() {
    return (
      <>
        {this.state.isFlag && (
          <div className="detailpage-sidebar">
            <div className="sidebar-content">
              <Image src="Image/GroupListPageImage/book-863418_1920.jpg" />

              <div className="sidebar-desc">
                <Header>Jeong Seung Hoon</Header>
                <p>I want...</p>
              </div>

              <div className="sidebar-btns">
                <Button>1. Times</Button>
                <Button>2. Times</Button>
                <Button>3. Times</Button>
                <Button>4. Times</Button>
              </div>
            </div>
          </div>
        )}
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
        <Grid onMouseMove={this.onMouseMove} className="detailpage-container">
          <Grid.Row centered>
            <Grid.Column width={8} className="detailpage-header">
              <Header textAlign="center" as="h1">
                <span>Monpang's</span> goal this week
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column width={8} className="detailpage-todos">
              <Item.Group>
                <Todo
                  title={"1.Times"}
                  desc={"I Plan to do Noting Today 1"}
                  onClick={this.onOpen}
                />
                <Todo
                  title={"2.Times"}
                  desc={"I Plan to do Noting Today 1"}
                  onClick={this.onOpen}
                />
                <Todo
                  title={"3.Times"}
                  desc={"I Plan to do Noting Today 1"}
                  onClick={this.onOpen}
                />
                <Todo
                  title={"4.Times"}
                  desc={"I Plan to do Noting Today 1"}
                  onClick={this.onOpen}
                />
              </Item.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    );
  }
}

export default GroupDetailPage;
