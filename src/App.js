import React, { Component } from 'react';
import './App.css';
import Content from './sections/Content';
import Contact from './sections/Contact';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Content />
        <Contact />
      </div>
    );
  }
}

export default App;
