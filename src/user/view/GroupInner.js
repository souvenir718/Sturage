import React, { Component } from "react";
import { Icon, Button, Card, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";
import ModalQuit from "../view/ModalQuit";
import { inject, observer } from "mobx-react";

@inject("Store")
@observer
class GroupInner extends Component {
  user = this.props.Store.user;

  render() {
    const { group } = this.props;
    return (
      <div>
        <Card style={{ width: "500px" }}>
          <Card.Content>
            <Card.Header>
              {group.title}{" "}
              <Label style={{ float: "right" }}>{group.category}</Label>
            </Card.Header>
            <Card.Description>
              {group.Description}
              <strong>{group.status}</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="purple" as={Link} to={`/detail/${group.id}`}>
                <Icon name="home" color="purple" />
                그룹 홈으로
              </Button>
              <Button
                basic
                color="black"
                onClick={() => this.user.setModal(true, "inverted")}
              >
                <Icon name="exclamation triangle" color="black" />
                탈퇴하기
              </Button>
            </div>
          </Card.Content>
        </Card>
        <br />
        <br />
        <ModalQuit />
        {/* <Modal
          dimmer={this.state.dimmer}
          open={this.state.open}
          onClick={() => this.modalSwitch({ type: "CLOSE_MODAL" })}
        >
          <Modal.Header>정말 탈퇴하시겠습니까?</Modal.Header>
          <Modal.Content>
            탈퇴시, 일주일간 동일메일계정으로는 재가입이 불가합니다.
          </Modal.Content>
          <Modal.Actions>
            <Button
              color="purple"
              onClick={() => this.modalSwitch({ type: "CLOSE_MODAL" })}
            >
              취소
            </Button>
            <Button
              color="black"
              onClick={() => this.modalSwitch({ type: "CLOSE_MODAL" })}
            >
              네 탈퇴할래요
            </Button>
          </Modal.Actions>
        </Modal> */}
      </div>
    );
  }
}

export default GroupInner;
