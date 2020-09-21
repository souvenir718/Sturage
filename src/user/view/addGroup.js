import React, { Component } from "react";
import axios from "axios";
import { Icon, Container, Image, Grid, Button, Form } from "semantic-ui-react";

class AddGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      title: "",
      description: "",
    };
  }

  onCategoryChange = (e) => this.setState({ category: e.target.innerText });
  onTitleChange = (e) => this.setState({ title: e.target.value });
  onDescriptionChange = (e) => this.setState({ description: e.target.value });

  handleChange = (e, { value }) => this.setState({ value });
  createGroup = () => {
    const state = this.state;
    var create_url = "/api/groups/";
    const data = {
      category: state.category,
      title: state.title,
      description: state.description,
    };
    console.log("--------", data.category);
    axios
      .post(create_url, data)
      .then((res) => {
        alert("그룹을 추가하셨습니다 ! !");
        document.location.href = "/";
      })
      .catch(function (error) {
        console.log("Error", error.message);
      });
  };
  render() {
    const options = [
      { key: "m", text: "웹개발", value: "male" },
      { key: "f", text: "인공지능", value: "female" },
      { key: "o", text: "클라우드", value: "other" },
    ];
    return (
      <Container>
        <Grid style={{ marginTop: "100px", marginLeft: "40px" }}>
          <Grid.Column width={4}>
            <Image
              style={{ marginTop: "20px" }}
              src="./Image/none_image.png"
              size="large"
            />
            <br />
            <Button style={{ marginLeft: "45px", marginTop: "10px" }}>
              <Icon name="upload" />
              이미지 업로드 하기
            </Button>
          </Grid.Column>
          <Grid.Column width={9} style={{ marginLeft: "80px" }}>
            <Form>
              <Form.Input
                fluid
                label="그룹이름"
                placeholder="group name"
                onChange={this.onTitleChange}
              />
              <Form.Group>
                <Form.Select
                  width={5}
                  fluid
                  label="그룹 카테고리"
                  options={options}
                  placeholder="group category"
                  onChange={this.onCategoryChange}
                />
              </Form.Group>

              <Form.TextArea
                label="그룹 소개글을 작성해주세요."
                placeholder="Tell us more about your group..."
                onChange={this.onDescriptionChange}
              />
              <Form.Button
                style={{ float: "right" }}
                color="purple"
                onClick={() => this.createGroup()}
              >
                <Icon name="archive" />
                등록하기
              </Form.Button>
            </Form>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default AddGroup;
