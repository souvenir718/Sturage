import React, { Component } from "react";
import "./GroupLeader.scss";
import { Grid, Header, Icon, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
class GroupLeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGroup: false,
    };
  }
  showGroup = () => {
    let isGroup = this.state.isGroup;
    this.setState({
      isGroup: !isGroup,
    });
  };
  render() {
    return (
      <>
        <div className="leader-sidebar">
          <div className="sidebar-content">
            <div className="sidebar-group">
              <Header onClick={this.showGroup}>
                A Group <Icon name="angle down" />
              </Header>
              {this.state.isGroup && (
                <ul className="group-li">
                  <li>subject</li>
                  <li>user</li>
                </ul>
              )}
            </div>
          </div>
          <div className="sidebar-content">
            <div className="sidebar-group">
              <Header onClick={this.showGroup}>
                B Group <Icon name="angle down" />
              </Header>
              {this.state.isGroup && (
                <ul className="group-li">
                  <li>subject</li>
                  <li>user</li>
                </ul>
              )}
            </div>
          </div>
          <div className="sidebar-content">
            <div className="sidebar-group">
              <Header onClick={this.showGroup}>
                C Group <Icon name="angle down" />
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
        <Grid className="leader-container">
          <Grid.Row centered>
            <Grid.Column width={8} className="leader-header">
              <Header as="h1">A Group</Header>
              <Icon name="plus square" />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered className="leader-contents">
            <Grid.Column width={8}>
              <div className="leader-content">
                <p className="content-header">1.Times</p>
                <Link className="content-title">First Week Subject</Link>

                <Icon name="minus square" />
              </div>
              <div className="leader-content">
                <p className="content-header">2.Times</p>
                <Link className="content-title">Second Week Subject</Link>
                <Icon name="minus square" />
              </div>
              <div className="leader-content">
                <p className="content-header">3.Times</p>
                <Link className="content-title">Third Week Subject</Link>
                <Icon name="minus square" />
              </div>
              <div className="leader-content">
                <p className="content-header">4.Times</p>
                <Link className="content-title">Fourth Week Subject</Link>
                <Icon name="minus square" />
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    );
  }
}

export default GroupLeader;
