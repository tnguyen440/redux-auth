import React, { Component } from 'react';
import './App.css';

import Header from './components/common/Header';
//import Footer from './components/common/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {this.props.children}
        
      </div>
    );
  }
}

export default App;
