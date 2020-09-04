import React from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import "./HighLights.css";

class HighLights extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      discountStart: 0,
      discountEnd: 30
    };
  }

  percentage() {
    const discountStart = this.state.discountStart;
    const discountEnd = this.state.discountEnd;
    if (discountStart < discountEnd) {
      this.setState({
        discountStart: discountStart + 1
      });
    }
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.percentage();
    }, 110);
  }

  render() {
    return (
      <div className="highlights">
        <div className="highlights-title">
          <Fade>
            <h1>HIGHLIGHTS</h1>
          </Fade>
        </div>
        <div className="highlights-details-1">
          <Fade left>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Fade>
        </div>

        <div className="highlights-details-2">
          <div className="discount">
            <Zoom onReveal={() => this.percentage()}>
              <div className="discount-number">{this.state.discountStart}%</div>
              <div className="off">OFF</div>
            </Zoom>
          </div>

          <div className="teckets">
            <Fade right>
              <h3>Purchase tickets before 10th November</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}

export default HighLights;
