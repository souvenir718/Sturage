import React, { Component } from "react";
import { Icon, Container, Button, Form } from "semantic-ui-react";
import axios from "axios";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      nickname: "",
      password: "",
      password2: "",
      email: "",
      phone: "",
      introduce: "",
    };
  }

  onIdChange = (e) => this.setState({ username: e.target.value });
  onNicknameChange = (e) => this.setState({ nickname: e.target.value });
  onPasswordChange = (e) => this.setState({ password: e.target.value });
  onPassword2Change = (e) => this.setState({ password2: e.target.value });
  onEmailChange = (e) => this.setState({ email: e.target.value });
  onPhoneChange = (e) => this.setState({ phone: e.target.value });
  onIntroduceChange = (e) => this.setState({ introduce: e.target.value });

  singup = () => {
    const state = this.state;

    const api_url = "/api/signin/";
    const data = {
      username: state.username,
      nickname: state.nickname,
      password: state.password,
      email: state.email,
      phone: state.phone,
      introduce: state.introduce,
    };

    axios
      .post(api_url, data)
      .then((res) => {
        alert("회원가입에 성공했습니다.");
        document.location.href = "/";
      })
      .catch(function (error) {
        if (error.response) {
          const err = {
            header: error.response.headers,
            code: error.response.status,
            mssage: error.response.data,
          };
          console.log(err);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
      });
  };

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
          <Form.Field>
            <label>ID</label>
            <input
              id="form-input-control-name"
              placeholder="Name"
              onChange={this.onIdChange}
            />
          </Form.Field>
          <Form.Field>
            <label>비밀번호</label>
            <input
              id="form-input-control-passoword"
              placeholder="Passoword"
              type="password"
              onChange={this.onPasswordChange}
            />
          </Form.Field>
          <Form.Field>
            <label>비밀번호 확인</label>
            <input
              id="form-input-control-passoword2"
              placeholder="Passoword"
              type="password"
              onChange={this.onPassword2Change}
            />
          </Form.Field>
          <Form.Field>
            <label>이름</label>
            <input
              id="form-input-control-nickname"
              placeholder="Nickname"
              onChange={this.onNicknameChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input
              id="form-input-control-email"
              placeholder="Email"
              onChange={this.onEmailChange}
            />
          </Form.Field>
          <Form.Field>
            <label>전화번호</label>
            <input
              id="form-input-control-phone"
              placeholder="010-1234-1234"
              onChange={this.onPhoneChange}
            />
          </Form.Field>
          <Form.Field>
            <label>자기소개</label>
            <textarea
              id="form-input-control-introduce"
              placeholder="Introduce"
              onChange={this.onIntroduceChange}
            />
          </Form.Field>

          {/* <Form.Field
            id="form-input-control-nick"
            name="nickname"
            control={Input}
            label="이름"
            placeholder="nick name"
          />
          <Form.Field
            id="form-input-control-pwd"
            name="password"
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
            name="email"
            control={Input}
            label="Email"
            placeholder="sturdy@sturdy.com"
            error={{
              content: "이메일 형식에 맞지 않습니다.",
              pointing: "below",
            }}
          />

          <Form.Field
            id="form-input-control-error-phone"
            name="phone"
            control={Input}
            label="Phone"
            placeholder="010-1234-1234"
          />

          <Form.Field
            id="form-textarea-control-opinion"
            name="introduce"
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
          /> */}
          <Form.Field
            id="form-button-control-public"
            control={Button}
            icon="pencil"
            content="회원가입하기"
            color="purple"
            onClick={() => {
              this.singup();
            }}
          />
        </Form>
      </Container>
    );
  }
}

export default SignUp;
