import React, { Component } from "react";
import {
  Icon,
  Container,
  Button,
  Form,
  Input,
  TextArea,
} from "semantic-ui-react";
class signUp extends Component {
  render() {
    const options = [
      { key: "m", text: "Male", value: "male" },
      { key: "f", text: "Female", value: "female" },
      { key: "o", text: "Other", value: "other" },
    ];
    return (
      <Container>
        <h2 style={{ margin: "80px 200px 0 200px" }}>
          <Icon name="pen square" />
          회원가입하기
        </h2>
        <Form style={{ margin: "40px 200px" }}>
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
            error={{
              content: "이메일 형식에 맞지 않습니다.",
              pointing: "below",
            }}
          />
          <Form.Field
            id="form-textarea-control-opinion"
            control={TextArea}
            label="자기소개"
            placeholder="introduce"
          />
          <Form.Checkbox
            label="I agree to the Terms and Conditions"
            error={{
              content: "개인정보 동의에 체크해주세요",
              pointing: "left",
            }}
          />
          <Form.Field
            id="form-button-control-public"
            control={Button}
            icon="pencil"
            content="회원가입하기"
            color="purple"
          />
        </Form>
      </Container>
    );
  }
}

export default signUp;
