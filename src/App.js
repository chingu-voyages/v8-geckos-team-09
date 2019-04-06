import React from "react";
import Clock from "./components/Clock";
import Quote from "./components/Quote";
import Weather from "./components/WeatherApiCall";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Clock />
        <Quote />
        <Weather />
      </div>
    );
  }
}

export default App;
