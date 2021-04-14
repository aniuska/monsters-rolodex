import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
     supper();

     this.state = {
       monsters: [
         {
           name: 'Frankenstein',
           id: 'f'
         },
         {
           name: 'Dracula',
           id: 'd'
         },
         {
           name: 'Zombie',
           id: 'z'
         }
       ]
     };
  }
  render() {
    return (
      <div className="App">
        {
          this.state.mosters.map(moster => <h1 key={moster.id}>{ monster.name }</h1>)
        }
      </div>
    );
  }
}

export default App;
