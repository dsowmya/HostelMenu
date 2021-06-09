import React, { Component, useState } from "react";
import Bookings from "./components/Bookings";
import Meals from "./components/Meals";
import Error from "./components/Error";

class App extends Component {
  //const App = () => {
  //const [myCart, updateCart] = useState({});

  constructor() {
    super();
    this.state = {
      userNames: [],
      userDates: [],
      isValid: false,
    };
  }

  handleGuestInfo = (hackerNames) => {
    console.log(hackerNames);
    //this.setState({ userNames: hackerNames });
  };

  handleDateInfo = (dateRangeArr) => {
    console.log(dateRangeArr);
  };

  setData = (names, dates) => {
    this.setState({ userNames: names, userDates: dates });
  };

  render() {
    return (
      <div className="container-fluid">
        <center>
          <h2>Hacker Hostel</h2>
        </center>
        <div className="container">
          <Bookings
            handleGuestInfo={this.handleGuestInfo}
            handleDateInfo={this.handleDateInfo}
            getData={this.setData}
          ></Bookings>
          {this.state.userNames.map((n) =>
            this.state.userDates.map((d) =>
              d === -1 ? (
                <Error name={n}></Error>
              ) : (
                <Meals name={n} dates={n}></Meals>
              )
            )
          )}
          }
        </div>
      </div>
    );
  }
}

export default App;
