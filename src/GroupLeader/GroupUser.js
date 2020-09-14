import React, { Component } from "react";
import { Button, Checkbox, Grid, Header, Icon } from "semantic-ui-react";
import "./GroupUser.scss";
class GroupUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGroup: false,
      checked: false,
    };
  }
  showGroup = () => {
    let isGroup = this.state.isGroup;
    this.setState({
      isGroup: !isGroup,
    });
  };
  toggle = (event, data) => {
    console.log(data.children);
    this.setState((prevState) => ({ checked: !prevState.checked }));
  };
  render() {
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
              <div className="user-container">
                <div className="user">
                  <Button onClick={this.toggle}>user1</Button>
                  <Checkbox
                    className="user-checkbox"
                    label="user1"
                    onChange={this.toggle}
                    checked={this.state.checked}
                  />
                </div>
                <div className="user">
                  <Button onClick={this.toggle}>user2</Button>
                  <Checkbox
                    className="user-checkbox"
                    label="user2"
                    onChange={this.toggle}
                    checked={this.state.checked}
                  />
                </div>
                <div className="user">
                  <Button onClick={this.toggle}>user3</Button>
                  <Checkbox
                    className="user-checkbox"
                    label="user3"
                    onChange={this.toggle}
                    checked={this.state.checked}
                  />
                </div>
                <div className="user">
                  <Button onClick={this.toggle}>user4</Button>
                  <Checkbox
                    className="user-checkbox"
                    label="user4"
                    onChange={this.toggle}
                    checked={this.state.checked}
                  />
                </div>
              </div>
            </Grid.Column>
            <Grid.Column width={2}>
              <Icon className="right-btn" name="caret square right" />
            </Grid.Column>
            <Grid.Column width={5}>
              <Header as="h2">Members</Header>
              <div className="user-container"></div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    );
  }
}

export default GroupUser;
