import React, { Component } from "react";
import { Feed } from "semantic-ui-react";

let mailStyle = {
  position: "absolute",
  zIndex: "10",
  right: "0",
  backgroundColor: "white",
  width: "400px",
  height: "300px",
  overflow: "auto",
};

const data = [
  { date: "2020-09-08 22:00:01 ", status: "done", user: "somin" ,group:"멀캠스터디", todoList:"React"},
  { date: "2020-09-08 08:42:20", status: "start", user: "abc", group: "역삼스터디", todoList: "spring"},
  { date: "2020-09-07 20:08:10", status: "done", user: "hoon", group: "역삼스터디", todoList: "spring"},
  { date: "2020-09-07 13:02:22", status: "start", user: "bin", group: "강남스터디", todoList: "css"},
  { date: "2020-08-26 20:47:11", status: "done", user: "totoro", group: "멀캠스터디", todoList: "React"},
  { date: "2020-08-06 08:20:11", status: "-ing", user: "rere", group: "멀캠스터디", todoList: "React"},
];


// const date = ()=>{
//   data.map((data)=>{
//     const today=new Date();
//     let time = new Date(data.date);
//     let cnt = today - time;
    
    
    
//   });
// }
const events = [
  {
    date: "1 분 전",
    meta: "done",
    summary: "abc님이 '리액트B파트'를 [완료]으로 변경하였습니다.",
  },
  {
    date: "4 시간 전",
    meta: "start",
    summary: "hoho님이 '스프링A파트'를 [시작]으로 변경하였습니다.",
  },
  {
    date: "1 일 전",
    meta: "start",
    summary: "somin님이 '리액트A파트'를 [진행중]으로 변경하였습니다.",
  },
  {
    date: "4 일 전",
    meta: "start",
    summary: "somin님이 '리액트A파트'를 [시작]으로 변경하였습니다.",
  },
];

const MailContainer = () => <Feed events={events} style={mailStyle} />;

export default MailContainer;
