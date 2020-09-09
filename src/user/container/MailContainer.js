import React, { Component } from "react";
import { Feed, Icon, Label } from "semantic-ui-react";

let mailStyle = {
  backgroundColor: "white",
  padding: "5px",
  textOverflow: "ellipsis",
  lineHeight: "20px",
};

const mailData = [
  {
    date: "2020-09-08 22:00:01 ",
    status: "done",
    user: "somin",
    group: "멀캠스터디",
    todoList: "React",
    subject: "subject",
  },
  {
    date: "2020-09-08 08:42:20",
    status: "start",
    user: "abc",
    group: "역삼스터디",
    todoList: "spring",
    subject: "subject",
  },
  {
    date: "2020-09-07 20:08:10",
    status: "done",
    user: "hoon",
    group: "역삼스터디",
    todoList: "spring",
    subject: "subject",
  },
  {
    date: "2020-09-07 13:02:22",
    status: "start",
    user: "bin",
    group: "강남스터디",
    todoList: "css",
    subject: "subject",
  },
  {
    date: "2020-08-26 20:47:11",
    status: "done",
    user: "totoro",
    group: "멀캠스터디",
    todoList: "React",
    subject: "subject",
  },
  {
    date: "2020-08-06 08:20:11",
    status: "-ing",
    user: "rere",
    group: "멀캠스터디",
    todoList: "React",
    subject: "subject",
  },
];

class MailContainer extends Component {
  MailBox = mailData.map((data, key) => (
    <Feed.Event key={key}>
      <Label>{data.group}</Label>
      <Feed.Content>
        <Feed.Summary>
          <span>{data.user}</span> 님이
          <span>{data.status}</span> 하였습니다.
        </Feed.Summary>
        <Feed.Extra text>
          {data.subject}의 {data.todoList}
        </Feed.Extra>
        <Feed.Date>{data.date}</Feed.Date>
        <Feed.Meta>
          <Feed.Like>
            <Icon
              name={`${data.status === "done" ? "pin" : "hand point right"}`}
              color={`${data.status === "done" ? "purple" : "green"}`}
            />
            {data.status}
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
  ));
  render() {
    console.log("???", this.MailBox);
    return <Feed style={{ mailStyle }}>{this.MailBox}</Feed>;
  }
}
export default MailContainer;
