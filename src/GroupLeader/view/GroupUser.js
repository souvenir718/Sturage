import React, { Component } from "react";
import { Button, Grid, Header, Icon } from "semantic-ui-react";
import "./GroupUser.scss";
class GroupUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGroup: false,
    };
  }
  getList = (dataList) => {
    let userList = dataList.map((data) => (
      <div key={data.id} className="user">
        <Button
          toggle
          active={data.isMember}
          color={data.isMember ? "purple" : "blue"}
          onClick={() => this.props.toggle(data.id)}
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
        <div className="leader-sidebar">
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
        </div>
        <Grid className="groupuser-container">
          <Grid.Row centered>
            <Grid.Column width={10} className="groupuser-header">
              <Header as="h1">A Group</Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered className="groupuser-content">
            <Grid.Column width={5}>
              <Header as="h2">Attends</Header>
              <div className="user-container">{this.getList(attends)}</div>
            </Grid.Column>
            <Grid.Column width={2}>
              <Icon
                className="right-btn"
                name="caret square right"
                onClick={this.props.attendsToMembers}
              />
            </Grid.Column>
            <Grid.Column width={5}>
              <Header as="h2">
                Members <Button className="submit-btn">Submit</Button>
              </Header>
              <div className="user-container">{this.getList(members)}</div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    );
  }
}

export default GroupUser;
