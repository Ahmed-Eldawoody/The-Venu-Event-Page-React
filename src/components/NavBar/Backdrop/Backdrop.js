import React from "react";
import "./Backdrop.css";

class Backdrop extends React.Component {
  render() {
    return <div onClick={this.props.click} className="backdrop" />;
  }
}

export default Backdrop;
