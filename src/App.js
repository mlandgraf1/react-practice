import React, { Component } from 'react';
import './App.css';

import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';


class App extends Component {

  state = {
    username: ['tim123', 'hpotter', 'crazybowlsX']
  }

  myEventHandler = (newUser) => {
    this.setState({
      username: [newUser, 'hpotter', 'godoggo']
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      username: ['tim123', event.target.value, 'godoggo']
    })
  }

  render() {

    const style = {
      backgroundColor: 'blue'
    };

    return (
    <div className="App" style={style}>
      <UserInput 
        change={this.nameChangedHandler}
      />
      <UserOutput 
        paragraph={this.state.username[0]}
      />
      <UserOutput 
        paragraph={this.state.username[1]}
      />
      <UserOutput
        paragraph={this.state.username[2]}
      />
    </div>
  )};
}

export default App;
