import React from 'react';
import Todos from './components/Todos';
import Quote from './components/Quote';
import Weather from './components/Weather';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Todos />
        <Quote />
        <Weather />
      </div>
    );
  }
}

export default App;
