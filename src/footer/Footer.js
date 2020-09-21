import React, { Component } from "react";
import { Segment, Container, Grid, Header, List } from "semantic-ui-react";
class Footer extends Component {
  render() {
    return (
      <Segment inverted vertical style={{ padding: "5em 0em" }}>
        <Container>
          <Grid
            divided
            inverted
            stackable
            style={{
              padding: "20px",
            }}
          >
            <Grid.Row>
              <Grid.Column width={4}>
                <Header inverted as="h4" content="About" />
                <List link inverted>
                  <List.Item as="a">Sitemap</List.Item>
                  <List.Item as="a">Contact Us</List.Item>
                  <List.Item as="a">About us</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={4}>
                <Header inverted as="h4" content="Services" />
                <List link inverted>
                  <List.Item as="a">문의사항 FAQ</List.Item>
                  <List.Item as="a">찾아오시는길</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={4}>
                <Header inverted as="h4" content="what is ' STURDY ' ? " />
                <List link inverted>
                  <List.Item as="a">사용방법</List.Item>
                  <List.Item as="a">블로그 방문하기</List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    );
  }
}

export default Footer;
