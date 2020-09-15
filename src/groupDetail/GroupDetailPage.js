import React, { Component } from "react";
import { Grid, Header, Item, Button, Image, Modal } from "semantic-ui-react";
import "./GroupDetailPage.scss";
import Todo from "./Todo";
import Sidebar from "./Sidebar";
import axios from "axios";

class GroupDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlag: false,
      open: false,
      detail_data: "",
    };
  }

  componentDidMount() {
    const group_id = this.props.match.params.id;
    console.log(group_id);
    const api = `/api/groups/${group_id}`;
    axios
      .get(api)
      .then((res) => {
        console.log(res.data);
        this.setState({ detail_data: res.data });
      })
      .catch(function (error) {
        if (error.response) {
          const err = {
            header: error.response.headers,
            code: error.response.status,
            mssage: error.response.data.detail,
          };
          console.log(err);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
        console.log(error.config.detail);
      });
  }

  createSuject = () => {
    const detail = this.state.detail_data;
    return detail.subjectList.map((subject) => {
      return (
        <Todo
          key={subject.subject_id}
          subject_id={subject.subject_id}
          title={subject.title}
          desc={"Subject에는 따로 desc라는 컬럼을 안만들었어 띵킹필요"}
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
    const { detail_data } = this.state;

    return (
      <>
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
                {detail_data ? this.createSuject() : <div>NO DATA</div>}
                {/* <Todo
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
                /> */}
              </Item.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    );
  }
}

export default GroupDetailPage;
