import React from 'react';
import UserItem from './components/UserItem';
import './App.css'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      background: 'white'
    }
  }

  handleBackgroundChange(event){
      console.log(event.target.value);
      const userBackground = event.target.value;
      
      // this.state.background = userBackground;
      this.setState({background: userBackground});
  }

  render(){
    return (
      <div className="App" style={{background: this.state.background}}>
        <h1>Lista Utilizatori:</h1>
        <UserItem name="Arsene Florin" email="arsene.florin@gmail.com" isGoldClient={true}/>
        <UserItem name="Criste Mihai" email="criste.mihai@gmail.com" isGoldClient={false}/>
          <input type="color" onChange={ (event) => this.handleBackgroundChange(event) }/>
      </div>
    );
  }
}

export default App;
