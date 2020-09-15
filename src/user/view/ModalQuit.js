import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import { inject, observer } from "mobx-react";

@inject("Store")
@observer
class ModalQuit extends Component {
  user = this.props.Store.user;

  render() {
    return (
      <Modal dimmer={this.user.getDimmer} open={this.user.getOpen}>
        <Modal.Header>정말 탈퇴하시겠습니까?</Modal.Header>
        <Modal.Content>
          탈퇴시, 일주일간 동일계정으로는 재가입이 불가합니다.
        </Modal.Content>
        <Modal.Actions>
          <Button color="purple" onClick={() => this.user.setModal(false)}>
            취소
          </Button>
          <Button color="black" onClick={() => this.user.setModal(false)}>
            네 탈퇴할래요
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default ModalQuit;
