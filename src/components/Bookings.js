import React, { Component } from "react";
import { PropTypes } from "prop-types";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

//class Bookings extends Component {
const Bookings = (props) => {
  let userDates = [];

  const handleGuestInfo = (event) => {
    //userNames = event.target.value.split("\n");
    //props.handleGuestInfo(nameArr);
  };

  const handleDateInfo = (event) => {
    const enteredDate = event.target.value.split("\n");
    for (let dateR of enteredDate) {
      let startEndDate = dateR.split(" to ");
      console.log(startEndDate);
      let startDate, endDate;
      if (startEndDate.length !== 2) {
        //check if two dates are provided
        console.log(`two dates not given : ${startEndDate}`);
        userDates.push(-1);
        continue;
      } else {
        // check if two dates are in valid format
        compareDateStrings(startEndDate[0], startEndDate[1]);
        startDate = Date.parse(startEndDate[0]);
        endDate = Date.parse(startEndDate[1]);
        if (typeof startDate !== Date || typeof endDate !== Date) {
          console.log(`wrong type: ${startDate} ${endDate} `);
          userDates.push(-1);
          continue;
        } else {
          // check if the from and to dates are in order
          if (startDate > endDate) {
            console.log(`dates not in order : ${(startDate, endDate)}`);
            userDates.push(-1);
            continue;
          } else {
            userDates.push([startDate, endDate]);
          }
        }
      }
    }
    //props.handleDateInfo(enteredDate);
  };

  const compareDateStrings = (fromDate, toDate) => {
    //2017-05-12 and 2017-06-15
    /*const exp = new RegExp("/[12]d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]d|3[01])/");
    if (fromDate.match(exp) === null || toDate.match(exp) === null) {
      console.log("Date not in correct format");
    } else {
      console.log("format matches");
    }*/

    const fromDateSpecs = fromDate.split("-");
    const toDateSpecs = toDate.split("-");

    const fromYear = fromDateSpecs[0],
      toYear = toDateSpecs[0],
      fromMonth = fromDateSpecs[1],
      toMonth = toDateSpecs[1],
      fromDay = fromDateSpecs[2],
      toDay = toDateSpecs[2];
    if (fromYear <= toYear) {
      if (fromMonth <= toMonth) {
        if (fromDay < toDay) {
          console.log("valid date format");
        } else {
          console.log("invalid");
        }
        console.log("invalid");
      }
      console.log("invalid");
    }
  };

  const sendData = () => {
    //check if date range is valid
    //props.getData(userNames, userDates);
  };

  return (
    <div className="row">
      <TextField
        className="col-md-6"
        multiline
        rows="4"
        placeholder="Enter the hacker list (one hacker per line)"
        onBlur={handleGuestInfo}
      />
      <TextField
        className="col-md-6"
        multiline
        rows="4"
        placeholder="Enter the date range for each hacker's stay (one range per line)"
        onBlur={handleDateInfo}
      />
      <Button
        variant="outlined"
        color="primary"
        className="block-center"
        onClick={sendData}
      >
        Get Meals Schedule
      </Button>
    </div>
  );
};

export default Bookings;
