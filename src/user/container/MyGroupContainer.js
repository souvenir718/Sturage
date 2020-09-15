import React, { Component } from "react";
import { Icon, Container, Button, Card } from "semantic-ui-react";
import GroupInner from "../view/GroupInner";
import data from "../data/data2";
class MyGroupContainer extends Component {
  render() {
    let groupInner = data.map((obj, key) => {
      console.log(obj);
      return <GroupInner key={key} group={obj} />;
    });

    return (
      <div>
        <h2 style={{ margin: "40px 0 40px 0" }}>
          <Icon name="group" /> 내 그룹 보기
        </h2>
        {groupInner}
      </div>
    );
  }
}

export default MyGroupContainer;
