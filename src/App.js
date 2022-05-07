import React from 'react';
import UserItem from './components/UserItem';
import './App.css'
import UserList from './components/UserList';

class App extends React.Component{
  constructor(){
    console.log("App constructor has been called");
    super();
    this.state = {
      background: 'white',
      users: [
        {
          name: "Arsene Florin",
          email: "arsene.florin@gmail.com",
          isGoldClient: true
        },
        {
          name: "Criste Mihai",
          email: "criste.mihai@gmail.com",
          isGoldClient: false
        }
      ]
    }
  }

  componentDidMount(){
    fetch( "https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response. json();
      })
      .then((users) => {
        console. log(users);
      })
  }

  componentDidUpdate(){
    console.log("app .js was updated");
  }

  handleBackgroundChange(event){
      console.log(event.target.value);
      const userBackground = event.target.value;
      
      // this.state.background = userBackground;
      this.setState({background: userBackground});
  }

  render(){

    console.log("App render has been called");

    return (
      <div className="App" style={{background: this.state.background}}>
        <h1>Lista Utilizatori:</h1>
        
        <UserList users={this.state.users}/>
        {/* <UserItem 
          name={this.state.users[0].name} 
          email={this.state.users[0].email
          } 
          isGoldClient={this.state.users[0].isGoldClient} 
        />
        <UserItem 
          name={this.state.users[1].name} 
          email={this.state.users[1].email} 
          isGoldClient={this.state.users[1].isGoldClient} 
        /> */}
          <input type="color" onChange={ (event) => this.handleBackgroundChange(event) }/>
      </div>
    );
  }
}

export default App;
