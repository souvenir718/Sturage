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
      userNameError: false,
      nickNameError: false,
      emailError: false,
      passwordError: false,
      password2Error: false,
      FormError: false,
      complete: false,
    };
  }

  onIdChange = (e) => this.setState({ username: e.target.value });
  onNicknameChange = (e) => this.setState({ nickname: e.target.value });
  onPasswordChange = (e) => this.setState({ password: e.target.value });
  onPassword2Change = (e) => this.setState({ password2: e.target.value });
  onEmailChange = (e) => this.setState({ email: e.target.value });
  onPhoneChange = (e) => this.setState({ phone: e.target.value });
  onIntroduceChange = (e) => this.setState({ introduce: e.target.value });

  
  errorCheck = () => {
    let error = false;

    if (this.state.username === "") {
      this.setState({ userNameError: true });
      error = true;
    } else {
      this.setState({ userNameError: false });
      error = false;
    }
    if (this.state.nickName === "") {
      this.setState({ nickNameError: true });
      error = true;
    } else {
      this.setState({ nickNameError: false });
      error = false;
    }
    if (this.state.email === "") {
      this.setState({ emailError: true });
      error = true;
    } else {
      this.setState({ emailError: false });
      error = false;
    }
    if (this.state.password === "") {
      this.setState({ passwordError: true });
      error = true;
    } else {
      this.setState({ passwordError: false });
      error = false;
    }
    if (this.state.password2 === "") {
      this.setState({ password2Error: true });
      error = true;
    } else {
      this.setState({ password2Error: false });
      error = false;
    }

    if (error) {
      this.setState({ formError: true });
      return;
    } else {
      this.setState({ formError: false });
    }
  };
  singup = () => {
    const state = this.state;
    this.errorCheck();
    const api_url = "/api/signin/";
    const data = {
      username: state.username,
      nickname: state.nickname,
      password: state.password,
      password2: state.password2,
      email: state.email,
      phone: state.phone,
      introduce: state.introduce,
    };

    if (data.password !== data.password2) {
      console.log("불일치");
      alert("비밀번호가 일치하지 않습니다!");
    } else {
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
    }
  };

  render() {
    // const options = [
    //   { key: "m", text: "Male", value: "male" },
    //   { key: "f", text: "Female", value: "female" },
    //   { key: "o", text: "Other", value: "other" },
    // ];
    return (
      <Container>
        <h2 style={{ margin: "80px 200px 0 200px" }}>
          <Icon name="pen square" />
          회원가입하기
        </h2>
        <Form error={this.state.formError} style={{ margin: "40px 200px" }}>
          <Form.Field>
            <label>ID</label>
            <input
              required={true}
              id="form-input-control-name"
              placeholder="Name"
              error={this.state.usernameError}
              onChange={this.onIdChange}
            />
          </Form.Field>
          <Form.Field>
            <label>비밀번호</label>
            <input
              required={true}
              id="form-input-control-passoword"
              placeholder="Passoword"
              type="password"
              error={this.state.passwordError}
              onChange={this.onPasswordChange}
            />
          </Form.Field>
          <Form.Field>
            <label>비밀번호 확인</label>
            <input
              required={true}
              id="form-input-control-passoword2"
              placeholder="Passoword"
              type="password"
              error={this.state.password2Error}
              onChange={this.onPassword2Change}
            />
          </Form.Field>
          <Form.Field>
            <label>닉네임</label>
            <input
              required={true}
              id="form-input-control-nickname"
              placeholder="Nickname"
              onChange={this.onNicknameChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input
              required={true}
              id="form-input-control-email"
              placeholder="Email"
              error={this.state.emailError}
              onChange={this.onEmailChange}
            />
          </Form.Field>
          <Form.Field>
            <label>전화번호</label>
            <input
              id="form-input-control-phone"
              placeholder="010-1234-1234"
              error={this.state.phoneError}
              onChange={this.onPhoneChange}
            />
          </Form.Field>
          <Form.Field>
            <label>자기소개</label>
            <textarea
              id="form-input-control-introduce"
              placeholder="Introduce"
              error={this.state.introduceError}
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
