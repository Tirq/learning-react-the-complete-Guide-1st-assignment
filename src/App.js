import React from 'react';
import {Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import Instructions from './Instructions/Instructions';

class App extends Component {

  state =  {
    usernames: [
      {name: 'Dynamic Name'},
      {name: 'Fixed Name'}
    ]
  }

  nameChangedHandler = (event) => {
    const usernames  = [...this.state.usernames];
    usernames[0].name = event.target.value;
    this.setState({usernames});
  }
  
  render(){
    const dynamicName = this.state.usernames[0].name;
    const fixedName = this.state.usernames[1].name;
    return (
      <div className="App">
        <Instructions/>
        <p>One Input:</p> 
        <UserInput
          changed={this.nameChangedHandler}
          value={dynamicName}/>
        <p>More than one Output:</p>
        <UserOutput username={dynamicName}/>
        <UserOutput username={fixedName}/>      
      </div>
    );
  }
}

export default App;