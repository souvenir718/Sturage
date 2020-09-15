import React, { Component } from "react";
import { Icon, Button, Form, Input, TextArea } from "semantic-ui-react";
import ModalQuit from "../view/ModalQuit";
import { inject, observer } from "mobx-react";

@inject("Store")
@observer
class MyProfileContainer extends Component {
  user = this.props.Store.user;

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
          <Form.Group>
            <Form.Field
              id="form-button-control-public"
              icon="pencil"
              content="내 정보 수정하기 "
              color="purple"
              control={Button}
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
