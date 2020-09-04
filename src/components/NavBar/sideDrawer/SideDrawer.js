// Will be imported in app.js directly
import React from "react";
import "./SideDrawer.css";

class SideDrawer extends React.Component {
  render() {
    let drawerClasses = "side-drawer";
    if (this.props.show) {
      drawerClasses = "side-drawer open";
    }
    return (
      <div className={drawerClasses}>
        <ul>
          <li onClick={this.props.onListItemHandler}>
            <a href="#event-starts-in">Event starts in</a>
          </li>
          <li onClick={this.props.onListItemHandler}>
            <a href="#venu-info">Venu Info</a>
          </li>
          <li onClick={this.props.onListItemHandler}>
            <a href="#highlights">Highlights</a>
          </li>
          <li onClick={this.props.onListItemHandler}>
            <a href="#pricung">Pricing</a>
          </li>
          <li onClick={this.props.onListItemHandler}>
            <a href="#location">Location</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default SideDrawer;
