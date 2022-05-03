import React from 'react';
import './App.css';
import { UserItem } from './components/UserItem';


class App extends React.Component{
  constructor(){
    super();
    this.state = {}
  }

  render(){
    return (
      <div className="App">
        <h1>Lista Utilizatori:</h1>
          < UserItem/>
      </div>
    );
  }


}

export default App;
