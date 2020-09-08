import React, { Component, Fragment } from "react";
import "./GroupLeader.scss";
import { Grid, Header, Icon, Button, Input } from "semantic-ui-react";
import { Link } from "react-router-dom";
class GroupLeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdd: false,
      isGroup: false,
      subject: "",
      subjectList: [
        {
          id: 0,
          times: 1,
          title: "First Week Subject",
          isTodo: false,
        },
        {
          id: 1,
          times: 2,
          title: "Second Week Subject",
          isTodo: false,
        },
        {
          id: 2,
          times: 3,
          title: "Third Week Subject",
          isTodo: false,
        },
      ],
    };
    this.numOfSubject = this.state.subjectList.length;
  }
  getList = () => {
    let dataList = this.state.subjectList;
    let subjectList = dataList.map((data) => (
      <Fragment key={data.id}>
        <div className="leader-content">
          <p className="content-header">{data.times}. Times</p>
          <span
            className="content-title"
            onClick={() => this.onClickAddTodo(data.id)}
          >
            {data.title}
          </span>

          <Icon
            name="minus square"
            onClick={() => this.deleteSubject(data.id)}
          />
        </div>
        {data.isTodo && <div>todo어뜨케하지</div>}
      </Fragment>
    ));

    return subjectList;
  };
  onClickAddTodo = (id) => {
    let dataList = this.state.subjectList;

    let subjectList = dataList.map((data) =>
      data.id === id ? { ...data, isTodo: !data.isTodo } : data
    );

    this.setState({
      subjectList: subjectList,
    });
  };
  addSubject = (newSubject) => {
    let dataList = this.state.subjectList;

    let newData = {
      id: this.numOfSubject,
      times: this.numOfSubject + 1,
      title: newSubject,
    };
    this.numOfSubject++;

    dataList.push(newData);

    this.setState({
      subjectList: dataList,
    });
  };

  onClickAddBtn = () => {
    let isAdd = this.state.isAdd;
    let newSubject = this.state.subject;
    if (!isAdd) {
      this.setState({
        isAdd: !isAdd,
      });
    } else {
      this.addSubject(newSubject);
      this.setState({
        isAdd: !isAdd,
      });
    }
  };

  deleteSubject = (id) => {
    let dataList = this.state.subjectList;

    dataList = dataList.filter((data) => data.id !== id);

    this.setState({
      subjectList: dataList,
    });
  };

  showGroup = () => {
    let isGroup = this.state.isGroup;
    this.setState({
      isGroup: !isGroup,
    });
  };
  changeSubject = (e) => {
    let newSubject = e.target.value;
    this.setState({
      subject: newSubject,
    });
  };

  render() {
    let subjectList = this.getList();
    return (
      <>
        <div className="leader-sidebar">
          <div className="sidebar-content">
            <div className="sidebar-group">
              <Header>
                A Group <Icon name="angle down" onClick={this.showGroup} />
              </Header>
              {this.state.isGroup && (
                <ul className="group-li">
                  <li>subject</li>
                  <li>user</li>
                </ul>
              )}
            </div>
          </div>
          <div className="sidebar-content">
            <div className="sidebar-group">
              <Header onClick={this.showGroup}>
                B Group <Icon name="angle down" />
              </Header>
              {this.state.isGroup && (
                <ul className="group-li">
                  <li>subject</li>
                  <li>user</li>
                </ul>
              )}
            </div>
          </div>
          <div className="sidebar-content">
            <div className="sidebar-group">
              <Header onClick={this.showGroup}>
                C Group <Icon name="angle down" />
              </Header>
              {this.state.isGroup && (
                <ul className="group-li">
                  <li>subject</li>
                  <li>user</li>
                </ul>
              )}
            </div>
          </div>
        </div>
        <Grid className="leader-container">
          <Grid.Row centered>
            <Grid.Column width={8} className="leader-header">
              <Header as="h1">A Group</Header>
              <Icon name="plus square" onClick={this.onClickAddBtn} />
              {this.state.isAdd && (
                <div className="add-todo">
                  <span>Subject : </span>
                  <Input onChange={(e) => this.changeSubject(e)} />
                </div>
              )}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered className="leader-contents">
            <Grid.Column width={8}>{subjectList}</Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    );
  }
}

export default GroupLeader;
