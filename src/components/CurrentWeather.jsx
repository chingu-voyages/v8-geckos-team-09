import React from "react";

const CurrentWeather = props => {
  const { city, currentTemp } = props;
  return (
    <div className="w3-display-container w3-display-center w3-text-white">
      <div className="w3-xlarge  w3-padding">
        {city}
        <p>
          Current Temp: {currentTemp}
          <sup>0</sup>
        </p>
      </div>
    </div>
  );
};

export default CurrentWeather;
