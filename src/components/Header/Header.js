import React from "react";
import "./Header.css";

import CountDown from "./CountDown/CountDown";
// import ImageGallary from "./ImageGallery/ImageGallary";

class Header extends React.Component {
  render() {
    return (
      <div id="event-starts-in" className="header-img">
        {/* <div className="gallary">
          <ImageGallary />
        </div> */}

        <div className="countdown">
          <CountDown />
        </div>
      </div>
    );
  }
}

export default Header;
