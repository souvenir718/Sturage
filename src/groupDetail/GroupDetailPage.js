import React, { Component } from "react";
import { Grid, Header, Item, Button, Image } from "semantic-ui-react";
import "./GroupDetailPage.scss";
class GroupDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlag: false,
    };
  }
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
        <Grid onMouseMove={this.onMouseMove} className="detailpage-container">
          <Grid.Row centered>
            <Grid.Column width={8} className="detailpage-header">
              <Header textAlign="center" as="h1">
                <span>Monpang's</span> goal this week
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column width={8} className="detailpage-contents">
              <Item.Group>
                <Item className="detailpage-content">
                  <Item.Content>
                    <Item.Header>1.Times</Item.Header>
                    <Item.Description>
                      I Plan to do Noting Today 1
                    </Item.Description>
                  </Item.Content>
                  <Button>Show</Button>
                </Item>
                <Item className="detailpage-content">
                  <Item.Content>
                    <Item.Header>1.Times</Item.Header>
                    <Item.Description>
                      I Plan to do Noting Today 1
                    </Item.Description>
                  </Item.Content>
                  <Button>Show</Button>
                </Item>
                <Item className="detailpage-content">
                  <Item.Content>
                    <Item.Header>1.Times</Item.Header>
                    <Item.Description>
                      I Plan to do Noting Today 1
                    </Item.Description>
                  </Item.Content>
                  <Button>Show</Button>
                </Item>
                <Item className="detailpage-content">
                  <Item.Content>
                    <Item.Header>1.Times</Item.Header>
                    <Item.Description>
                      I Plan to do Noting Today 1
                    </Item.Description>
                  </Item.Content>
                  <Button>Show</Button>
                </Item>
              </Item.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    );
  }
}

export default GroupDetailPage;
