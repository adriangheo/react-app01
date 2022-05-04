import React from 'react';
import UserItem from './components/UserItem';
import './App.css'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      background: 'pink'
    }
  }

  handleBackgroundChange(event){
      console.log(event);
  }

  render(){
    return (
      <div className="App" style={{background: this.state.background}}>
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

          <input type="color" onChange={ this.handleBackgroundChange }/>
      </div>
    );
  }
}

export default App;
