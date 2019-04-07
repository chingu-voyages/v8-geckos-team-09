import React from "react";

import Quote from "./components/Quote";
import Weather from "./components/WeatherApiCall";

import "./App.css";

import Todos from "./components/Todos";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    let d = new Date();
    this.state = {
      day: d.getDay(),
      month: d.getMonth(),
      date: d.getDate(),
      year: d.getFullYear(),
      time: d.toLocaleTimeString()
    };
    this.countingSecond = this.countingSecond.bind(this);
  }
  countingSecond() {
    let d = new Date();
    this.setState({
      day: d.getDay(),
      month: d.getMonth(),
      date: d.getDate(),
      year: d.getFullYear(),
      time: d.toLocaleTimeString()
    });
  }
  componentWillMount() {
    setInterval(this.countingSecond, 1000);
  }

  render() {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "November",
      "December"
    ];
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    return (
      <div className="App">
        <div className="clock-container">
          <h2 className="clock-time">{this.state.time}</h2>
          <h3 className="clock-date">
            {days[this.state.day]}, {months[this.state.month]} {this.state.date}
            , {this.state.year}
          </h3>
        </div>
        <Todos />
        <Quote />
        <Weather />
      </div>
    );
  }
}

export default App;
