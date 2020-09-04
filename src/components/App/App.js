import React from "react";
import "./App.css";

import Toolbar from "../NavBar/Toolbar/Toolbar";
import SideDrawer from "../NavBar/sideDrawer/SideDrawer";
import Backdrop from "../NavBar/Backdrop/Backdrop";
import Header from "../Header/Header";
import VenuInfo from "../VenuInfo/VenuInfo";
import HighLights from "../HighLights/HighLights";
import TicketPricing from "../TicketPricing/TicketPricing";
import Location from "../Location/Location";
import Footer from "../Footer/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sideDrawerOpen: false,
      prices: ["$100", "$250", "$400"],
      places: ["BALCONY", "MEDIUM", "STAR"]
    };

    this.drawerToggleClickHandler = this.drawerToggleClickHandler.bind(this);
    this.backdropClickHandler = this.backdropClickHandler.bind(this);
    this.listItemHandler = this.listItemHandler.bind(this);
  }

  drawerToggleClickHandler() {
    this.setState({
      sideDrawerOpen: !this.state.sideDrawerOpen
    });
  }

  backdropClickHandler() {
    this.setState({ sideDrawerOpen: false });
  }

  listItemHandler() {
    this.setState({ sideDrawerOpen: false });
  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div className="App" style={{ height: "100%" }}>
        <Toolbar drawerToggleClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer
          onListItemHandler={this.listItemHandler}
          show={this.state.sideDrawerOpen}
        />
        {backdrop}
        <Header />
        <main className="main">
          <section id="venu-info" className="venu-info">
            <VenuInfo />
          </section>
          <section id="highlights" className="highlights">
            <HighLights />
          </section>
          <section id="pricung" className="pricing">
            <h1 className="ticket-pricing">TICKET PRICING</h1>
            <TicketPricing
              price={this.state.prices[0]}
              place={this.state.places[0]}
            />
            <TicketPricing
              price={this.state.prices[1]}
              place={this.state.places[1]}
            />
            <TicketPricing
              price={this.state.prices[2]}
              place={this.state.places[2]}
            />
          </section>
          <section id="location" className="location">
            <Location />
          </section>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
