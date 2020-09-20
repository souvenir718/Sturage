import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
// import data from "../data/todoData";
import "react-big-calendar/lib/css/react-big-calendar.css";
class MyCalendar extends Component {
  render() {
    moment.locale("en-GB");
    const localizer = momentLocalizer(moment);
    const myEventsList = [
      {
        title: "리액트하기",
        allDay: false,
        start: new Date(2020, 9, 11, 10, 0),
        end: new Date(2020, 9, 15, 9, 0),
      },
      {
        title: "스프링하기",
        color: "red",
        allDay: false,
        start: new Date(2020, 9, 6, 10, 0),
        end: new Date(2020, 9, 13, 9, 0),
      },
    ];
    //const localizer = BigCalendar.momentLocalizer(moment); // or globalizeLocalizer
    console.log("calendar 도착");
    return (
      <div style={{ height: 500 }}>
        <Calendar
          localizer={localizer}
          events={myEventsList}
          //startAccessor="start"
          //endAccessor="end"

          step={60}
          view="month"
          views={["month"]}
          min={new Date(2020, 9, 1, 10, 0)}
          max={new Date(2020, 9, 30, 10, 0)}
          date={new Date(2020, 9, 11)}
        />
      </div>
    );
  }
}
export default MyCalendar;
