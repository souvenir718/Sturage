import React, { Component } from "react";
import {
  Segment,
  Menu,
  Sidebar,
  Icon,
  Grid,
  Checkbox,
  Image,
} from "semantic-ui-react";

class Header extends Component {
  state = { activeItem: "home", visible: false };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  setVisible = () => {
    this.setState({ visible: !this.state.visible });
  };
  render() {
    const { activeItem, userId } = this.state;
    return (
      <div>
        <Segment style={{ backgroundColor: "#8e44ad" }} inverted>
          <Menu size="large" inverted secondary>
            <Checkbox
              hidden
              checked={this.state.visible}
              label={{ children: <code>visible</code> }}
              onChange={(e, data) => this.setVisible(data.checked)}
            />
            <Menu.Menu position="right">
              <Menu.Item
                icon="user circle"
                name="MyPage"
                active={activeItem === "MyPage"}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                icon="key"
                name="Login"
                active={activeItem === "login"}
                onClick={this.handleItemClick}
              />
            </Menu.Menu>
          </Menu>
        </Segment>

        {/* <Grid columns={1}>
          <Grid.Column>
            <Sidebar.Pushable as={Segment}>
              <Sidebar
                as={Menu}
                animation="overlay"
                icon="labeled"
                inverted
                onHide={() => {
                  this.setState({ visible: false });
                }}
                vertical
                visible={false}
                width="thin"
              >
                <Menu.Item as="a">
                  <Icon name="users" />
                  Group Info
                </Menu.Item>
                <Menu.Item as="a">
                  <Icon name="gamepad" />
                  Group List
                </Menu.Item>
                <Menu.Item as="a">
                  <Icon name="camera" />
                  Channels
                </Menu.Item>
              </Sidebar>

              <Sidebar.Pusher>
                <Segment basic>
                  <Header as="h3">Application Content</Header>
                  <Image src="/images/wireframe/paragraph.png" />
                </Segment>
              </Sidebar.Pusher>
            </Sidebar.Pushable>
          </Grid.Column>
        </Grid> */}
      </div>
    );
  }
}

export default Header;
