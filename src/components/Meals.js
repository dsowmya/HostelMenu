import React, { Component } from "react";
import { PropTypes } from "prop-types";

const Meals = (props) => {
  return (
    <div className="col-xs-12  col-sm-12 col-md-12 col-lg-12">
      <ol id="list">
        <div>
          <li className="morning">
            Breakfast for {props.name} on {props.date[0]}
          </li>
          <li className="afternoon">
            Lunch for {props.name} on {props.date[0]}
          </li>
          <li className="night">
            Dinner for {props.name} on {props.date[0]}
          </li>
        </div>
      </ol>
    </div>
  );
};
export default Meals;
