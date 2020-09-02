import React, { Component } from "react";
import {
  Icon,
  Container,
  Image,
  Grid,
  Button,
  Segment,
  Form,
  Divider,
} from "semantic-ui-react";

class addGroup extends Component {
  state = {};

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;

    const options = [
      { key: "m", text: "웹개발", value: "male" },
      { key: "f", text: "인공지능", value: "female" },
      { key: "o", text: "클라우드", value: "other" },
    ];
    return (
      <Container>
        <Grid style={{ marginTop: "100px" }}>
          <Grid.Column width={4}>
            <Image src="/images/wireframe/image.png" />
            <Button>이미지 업로드 버튼</Button>
          </Grid.Column>
          <Grid.Column width={9}>
            <Form>
              <Form.Group widths="equal">
                <Form.Input fluid label="그룹이름" placeholder="group name" />
                <Form.Input
                  fluid
                  label="그룹목표"
                  placeholder="group subject"
                />
                <Form.Select
                  fluid
                  label="Gender"
                  options={options}
                  placeholder="Gender"
                />
              </Form.Group>
              <Form.Group inline>
                <label>Size</label>
                <Form.Radio
                  label="Small"
                  value="sm"
                  checked={value === "sm"}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label="Medium"
                  value="md"
                  checked={value === "md"}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label="Large"
                  value="lg"
                  checked={value === "lg"}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.TextArea
                label="About"
                placeholder="Tell us more about you..."
              />
              <Form.Checkbox label="I agree to the Terms and Conditions" />
              <Form.Button>Submit</Form.Button>
            </Form>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default addGroup;
