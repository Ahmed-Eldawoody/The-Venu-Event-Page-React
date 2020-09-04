import React from "react";
import "./VenuInfo.css";
import { GoCalendar } from "react-icons/go";
import { GoLocation } from "react-icons/go";
import Zoom from "react-reveal/Zoom";

class VenuInfo extends React.Component {
  render() {
    return (
      <div>
        <Zoom delay={2000}>
          <div className="container">
            <GoCalendar className="calender-icon" />
            <h1 className="date-time">
              Event Date <span>&</span> Time
            </h1>
            <h2 className="date">31 December 2020</h2>
            <h2 className="time">@ 10.00pm</h2>
          </div>
        </Zoom>
        <Zoom>
          <div className="container">
            <GoLocation className="calender-icon" />
            <h1 className="date-time">Event Location</h1>
            <h2 className="location">345 Speer Street Oakland, CA 9835</h2>
          </div>
        </Zoom>
      </div>
    );
  }
}

export default VenuInfo;
