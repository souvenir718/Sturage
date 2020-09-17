import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
class Calender extends Component {
  render() {
    const localizer = BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

    return (
      <div>
        <BigCalendar
          localizer={localizer}
          // events={myEventsList}
          startAccessor="start"
          endAccessor="end"
        />
      </div>
    );
  }
}

export default Calender;

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

const MyCalendar = (props) => (
  <div>
    <BigCalendar
      localizer={localizer}
      //   events={myEventsList}
      startAccessor="start"
      endAccessor="end"
    />
  </div>
);
