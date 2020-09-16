import React, { Component } from "react";
import { Modal, Button, Card, Dropdown } from "semantic-ui-react";
import { inject, observer } from "mobx-react";

@inject("Store")
@observer
class ModalProgress extends Component {
  user = this.props.Store.user;

  render() {
    const options = [
      { key: 1, text: "진행중", value: 1 },
      { key: 2, text: "완료", value: 2 },
      { key: 3, text: "할당됨", value: 3 },
    ];
    return (
      <div>
        <Modal dimmer={this.user.getDimmer} open={this.user.getOpen}>
          <Modal.Header color="purple" inverted>
            진행사항을 변경하세요
          </Modal.Header>
          <Modal.Content>
            진행사항 변경시, 팀원들에게 메일이 발송됩니다.
            <br />
            <br />
            <Dropdown
              text="진행상황"
              options={options}
              selection
              item
            ></Dropdown>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={() => this.user.setModal(false)}>취소</Button>
            <Button color="purple" onClick={() => this.user.setModal(false)}>
              변경
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default ModalProgress;
