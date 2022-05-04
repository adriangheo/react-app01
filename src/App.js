import React from 'react';
import './App.css';
import UserItem from './components/UserItem';


class App extends React.Component{
  constructor(){
    super();
    this.state = {}
  }

  render(){
    return (
      <div className="App">
        <h1>Lista Utilizatori:</h1>
          <UserItem 
            name="Mohamed Salah" 
            email="salah.mohamed@gmail.com"
          />
          <UserItem 
            name="Roberto Firimino" 
            email="roberto.firimino@gmail.com"
          />
          <UserItem 
            name="Sadio Mane" 
            email="sadio.mane@gmail.com"
          />
      </div>
    );
  }


}

export default App;
