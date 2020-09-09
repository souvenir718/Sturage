import React, { Component } from "react";
import {
  Icon,
  Container,
  Button,
  Form,
  Input,
  TextArea,
} from "semantic-ui-react";
class MyProfileContainer extends Component {
  render() {
    const options = [
      { key: "m", text: "Male", value: "male" },
      { key: "f", text: "Female", value: "female" },
      { key: "o", text: "Other", value: "other" },
    ];
    return (
      <Container>
        <h2 style={{ margin: "20px" }}>
          <Icon name="pen square" />내 정보 보기
        </h2>
        <Form style={{ margin: "40px 20px" }}>
          <Form.Field
            id="form-input-control-name"
            control={Input}
            label="이름"
            placeholder="name"
          />
          <Form.Field
            id="form-input-control-nick"
            control={Input}
            label="닉네임"
            placeholder="nick name"
          />
          <Form.Field
            id="form-input-control-pwd"
            control={Input}
            label="비밀번호"
            placeholder="password"
          />
          <Form.Field
            id="form-input-control-pwdchk"
            control={Input}
            label="비밀번호 확인"
            placeholder="password check"
          />

          <Form.Field
            id="form-input-control-error-email"
            control={Input}
            label="Email"
            placeholder="sturdy@sturdy.com"
          />
          <Form.Field
            id="form-textarea-control-opinion"
            control={TextArea}
            label="자기소개"
            placeholder="introduce"
          />
          <Form.Checkbox label="I agree to the Terms and Conditions" />
          <Form.Field
            id="form-button-control-public"
            control={Button}
            icon="pencil"
            content="내 정보 수정하기 "
            color="purple"
          />
        </Form>
      </Container>
    );
  }
}

export default MyProfileContainer;
