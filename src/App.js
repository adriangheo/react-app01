import React from 'react';
import UserItem from './components/UserItem';
import './App.css'
import UserList from './components/UserList';
import UserAddForm from './components/UserAddForm';

class App extends React.Component{
  constructor(){
    // console.log("App constructor has been called");
    super();
    this.state = {
      background: 'white',
      users: []
    }
  }

  componentDidMount(){
    fetch( "https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response. json();
      })
      .then((json) => {
        //filter the date which comes from the API
        //so that only 3 users will be displayed
        const arrayV2 = json.filter((elem, index) => index < 3)

        //add a property to each user
        //with the value true
        arrayV2.forEach(user => {
          user.isGoldClient = true
        });

        // console.log(arrayV2);
        this.setState({users: arrayV2})
      })
  }

  componentDidUpdate(){
    // console.log("app .js was updated");
  }

  handleBackgroundChange(event){
      console.log(event.target.value);
      const userBackground = event.target.value;
      
      // this.state.background = userBackground;
      this.setState({background: userBackground});
      //The line bellow (i.e. the loging of the background color)
      //demonstrates that the setState() call happens asynchronously
      console.log(event.target.value);  
  }

  updateUsersList(user){
    // //POTENTIALY DANGEROUS IMPLEMENTATION:
    // this.setState({users: [
    //   ...this.state.users, 
    //   user
    // ]});

    // PROPER IMPLEMENTATION:
    //setState() receives a function as a parameter, and afterwards this second function
    //receives itself the preceding state value, as parameter
    this.setState((previousState)=>{
      return {users: [
        ...previousState.users, 
        user
      ]}
    });
  }


  render(){
    // console.log("App render has been called");
    console.log(this.state.background);
    return (
      <div className="App" style={{background: this.state.background}}>
        <h1>Lista Utilizatori:</h1>
        <UserAddForm updateUsersListProp={(user) => {this.updateUsersList(user)}}/>
        <UserList users={this.state.users}/>
        <input type="color" onChange={ (event) => this.handleBackgroundChange(event) }/>
      </div>
    );
  }
}

export default App;
