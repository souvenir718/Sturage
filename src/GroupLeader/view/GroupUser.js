import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Dropdown, Grid, Header, Icon } from "semantic-ui-react";
import "./GroupUser.scss";

const groups = [
  {
    key: "A Group",
    text: "A Group",
    value: "A Group",
  },
  {
    key: "B Group",
    text: "B Group",
    value: "B Group",
  },
  {
    key: "C Group",
    text: "C Group",
    value: "C Group",
  },
];

class GroupUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGroup: false,
    };
  }
  getAttends = (dataList) => {
    console.log(dataList);
    let userList = dataList.map((data) => (
      <div key={data.id} className="user">
        <Button
          toggle
          active={data.isMember}
          color={data.isMember ? "purple" : "blue"}
          onClick={() => this.props.toggleAttends(data.id)}
        >
          {data.name}
        </Button>
      </div>
    ));
    return userList;
  };

  getMembers = (dataList) => {
    console.log(dataList);
    let userList = dataList.map((data) => (
      <div key={data.id} className="user">
        <Button
          toggle
          active={data.isMember}
          color={data.isMember ? "purple" : "blue"}
          onClick={() => this.props.toggleMembers(data.id)}
        >
          {data.name}
        </Button>
      </div>
    ));
    return userList;
  };

  showGroup = () => {
    let isGroup = this.state.isGroup;
    this.setState({
      isGroup: !isGroup,
    });
  };
  render() {
    const { attends, members } = this.props;
    return (
      <>
        {/* <div className="leader-sidebar">
          <div className="sidebar-content">
            <div className="sidebar-group">
              <Header>
                A Group <Icon name="angle down" onClick={this.showGroup} />
              </Header>
              {this.state.isGroup && (
                <ul className="group-li">
                  <li>subject</li>
                  <li>user</li>
                </ul>
              )}
            </div>
          </div>
        </div> */}
        <Grid className="groupuser-container">
          <Grid.Row centered>
            <Grid.Column width={10} className="groupuser-header">
              <Header as="h1">
                <span>
                  <Dropdown
                    inline
                    options={groups}
                    defaultValue={groups[0].value}
                  />
                </span>
              </Header>
              <Button className="manage-subject-btn" as={Link} to={`/leader`}>
                manage subject
              </Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered className="groupuser-content">
            <Grid.Column width={4}>
              <Header as="h2">Attends</Header>
              <div className="user-container">{this.getAttends(attends)}</div>
            </Grid.Column>
            <Grid.Column width={2}>
              <Icon
                className="right-btn"
                name="caret square right"
                onClick={this.props.attendsToMembers}
              />
              <Icon
                className="left-btn"
                name="caret square left"
                onClick={this.props.membersToAttends}
              />
            </Grid.Column>
            <Grid.Column width={4}>
              <Header as="h2">
                Members <Button className="submit-btn">Submit</Button>
              </Header>
              <div className="user-container">{this.getMembers(members)}</div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    );
  }
}

export default GroupUser;
