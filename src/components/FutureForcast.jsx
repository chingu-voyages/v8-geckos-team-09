import React from "react";
import Moment from "react-moment";
import moment from "moment";
import Draggable from "react-draggable";

const FutureWeather = props => {
  const {
    day1,
    icon1,
    minTemp1,
    maxTemp1,
    day2,
    icon2,
    minTemp2,
    maxTemp2,
    day3,
    icon3,
    minTemp3,
    maxTemp3
  } = props;
  return (
    <Draggable>
      <div className="w3-row">
        <div className="w3-third w3-center">
          <h3>
            <Moment format="ddd">{moment.unix(day1).utc()}</Moment>
          </h3>

          <img src={icon1} alt="sun" style={{ width: 80 + "px" }} />
          <p>
            {" "}
            L: {minTemp1}
            <sup>0</sup>
          </p>
          <p>
            {" "}
            H: {maxTemp1}
            <sup>0</sup>
          </p>
        </div>
        <div className="w3-third w3-center">
          <h3>
            <Moment format="ddd">{moment.unix(day2).utc()}</Moment>
          </h3>
          <img src={icon2} alt="cloud" style={{ width: 80 + "px" }} />
          <p>
            {" "}
            L: {minTemp2}
            <sup>0</sup>
          </p>
          <p>
            {" "}
            H: {maxTemp2}
            <sup>0</sup>
          </p>
        </div>
        <div className="w3-third w3-center w3-margin-bottom">
          <h3>
            <Moment format="ddd">{moment.unix(day3).utc()}</Moment>
          </h3>
          <img src={icon3} alt="clouds" style={{ width: 80 + "px" }} />
          <p>
            {" "}
            L: {minTemp3}
            <sup>0</sup>
          </p>
          <p>
            {" "}
            H: {maxTemp3}
            <sup>0</sup>
          </p>
        </div>
      </div>
    </Draggable>
  );
};

export default FutureWeather;
