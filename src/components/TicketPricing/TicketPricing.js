import React from "react";
import Zoom from "react-reveal/Zoom";

import "./TicketPricing.css";

class TicketPricing extends React.Component {
  render() {
    return (
      <Zoom>
        <div className="pricing-card">
          <div className="price">
            <h2>{this.props.price}</h2>
            <h2>{this.props.place}</h2>
          </div>
          <div className="price-details">
            orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div className="purchase">
            <a href="####">
              <img
                src={require("../../../public/ticket.png")}
                alt="tecket-logo"
              />
              PURCHASE
            </a>
          </div>
        </div>
      </Zoom>
    );
  }
}

export default TicketPricing;
