import React, { Component } from "react";
import { Icon, Button, Form, Input, TextArea } from "semantic-ui-react";
import ModalQuit from "../view/ModalQuit";
import { inject, observer } from "mobx-react";
import axios from "axios";

import MyProfile from "../view/MyProfile";
@inject("Store")
@observer
class MyProfileContainer extends Component {
  user = this.props.Store.user;
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

  //내정보가져오는
  getMyInfo = () => {
    const getMyInfoUrl = "/api/users";
    axios.get(getMyInfoUrl).then((res) => {
      this.setState({
        username: res.data.username,
        nickname: res.data.nickname,
        email: res.data.email,
        phone: res.data.phone,
        introduce: res.data.introduce,
      });
    });
  };

  //내정보수정한것 등록
  modifyMyInfo = () => {
    const state = this.state;

    const data = {
      username: state.username,
      nickname: state.nickname,
      password: state.password,
      email: state.email,
      phone: state.phone,
      introduce: state.introduce,
    };
    const api_url = "/api/signin/";

    axios
      .post(api_url, data)
      .then((res) => {
        alert("내 정보 수정에 성공했습니다.");
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
    return (
      <div>
        <h2 style={{ margin: "40px 0 40px 0" }}>
          <Icon name="id badge" />내 정보 보기
        </h2>
        <Form style={{ margin: "40px 20px" }}>
          <Form.Field
            id="form-input-control-name"
            control={Input}
            label="이름"
            placeholder="name"
            onChange={this.onIdChange}
            value={this.state.username}
          />
          <Form.Field
            id="form-input-control-nick"
            control={Input}
            label="닉네임"
            placeholder="nick name"
            onChange={this.onNicknameChange}
            value={this.state.nickname}
          />
          <Form.Field
            id="form-input-control-pwd"
            control={Input}
            label="비밀번호"
            placeholder="password"
            onChange={this.onPasswordChange}
          />
          <Form.Field
            id="form-input-control-pwdchk"
            control={Input}
            label="비밀번호 확인"
            placeholder="password check"
            onChange={this.onPassword2Change}
          />

          <Form.Field
            id="form-input-control-error-email"
            control={Input}
            label="Email"
            placeholder="sturdy@sturdy.com"
            onChange={this.onEmailChange}
            value={this.state.email}
          />
          <Form.Field
            id="form-textarea-control-opinion"
            control={TextArea}
            label="자기소개"
            placeholder="introduce"
            onChange={this.onIntroduceChange}
            value={this.state.introduce}
          />
          <Form.Checkbox label="I agree to the Terms and Conditions" />
          <Form.Group>
            <Form.Field
              id="form-button-control-public"
              icon="pencil"
              content="내 정보 수정하기 "
              color="purple"
              control={Button}
              onClick={this.modifyMyInfo}
            />
            <Button
              id="form-button-control-public"
              icon="exclamation triangle"
              content="탈퇴하기 "
              color="black"
              float="right"
              onClick={() => this.user.setModal(true, "inverted")}
            />
          </Form.Group>
        </Form>
        <ModalQuit />
      </div>
    );
  }
}

export default MyProfileContainer;
