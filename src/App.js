import React from "react";

import Quote from "./components/Quote";
import Weather from "./components/WeatherApiCall";

import "./App.css";

import Todos from "./components/Todos";

import "./App.css";

class App extends React.Component {
  constructor() {
    super()
    
    let d = new Date()
      this.state = {
        day: d.getDay(),
        month: d.getMonth(),
        date: d.getDate(),
        year: d.getFullYear(),
        time: d.toLocaleTimeString(),
        divStyle: {
          backgroundImage: "url(https://cdn.pixabay.com/photo/2018/08/12/15/29/hintersee-3601004_960_720.jpg)"
        },
        backgrounds: [
          "https://cdn.pixabay.com/photo/2018/08/12/15/29/hintersee-3601004_960_720.jpg",
          "https://cdn.pixabay.com/photo/2017/01/11/14/56/ireland-1971997_960_720.jpg",
          "https://cdn.pixabay.com/photo/2018/07/05/22/16/panorama-3519309_960_720.jpg",
          "https://cdn.pixabay.com/photo/2018/09/19/09/04/landscape-3688040_960_720.jpg",
          "https://cdn.pixabay.com/photo/2017/12/23/19/00/autumn-3035783_960_720.jpg",
          "https://cdn.pixabay.com/photo/2017/11/08/21/13/autumn-2931644_960_720.jpg",
          "https://cdn.pixabay.com/photo/2016/10/26/19/36/nature-1772432_960_720.jpg",
          "https://cdn.pixabay.com/photo/2018/12/26/15/07/stykkisholmur-3895953_960_720.jpg"
        ]
      }
    this.countingSecond = this.countingSecond.bind(this);
    this.setBackground = this.setBackground.bind(this);
  }

  setBackground(){
    let divStyle = {...this.state.divStyle}

    divStyle.backgroundImage = `url(${this.state.backgrounds[Math.floor(Math.random() * 8)]})`
    this.setState({divStyle})
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
      <div className="App" style = {this.state.divStyle}>
        <button className="background-button" onClick={this.setBackground}>change background</button>
        <div className='clock-container'>
          <h2 className='clock-time'>{this.state.time}</h2>
          <h3 className='clock-date'>{days[this.state.day]}, {months[this.state.month]} {this.state.date}, {this.state.year}</h3>
        </div>
        <Todos />
        <Quote />
        <Weather />
      </div>
    );
  }
}

export default App;
