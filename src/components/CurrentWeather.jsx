import React from "react";
import london from "./Weatherimg/img_london.jpg";

const CurrentWeather = props => {
  const { city, currentTemp, time } = props;
  return (
    <div className="w3-display-container w3-text-white">
      <img src={london} alt="Lights" style={{ width: 100 + "%" }} />

      <div className="w3-xlarge w3-display-bottomleft w3-padding">
        {city} {currentTemp}
        <sup>0</sup>
        <p>{time}</p>
      </div>
    </div>
  );
};

export default CurrentWeather;
