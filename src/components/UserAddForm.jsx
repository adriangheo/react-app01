import React from "react";


class UserAddForm extends React.Component{
    constructor(){
        super();
        this.state = {
            name: '',
            email: '',
            isGoldClient: false
        }
    }

    handleNameChange(event){
        // console.log(event.target.value);
        const inputValue = event.target.value;
        this.setState({name: inputValue})
    }

    render(){
        return(
            <form>
                <h2>Adauga un utilizator nou:</h2>

                <label htmlFor="name">Nume:</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleNameChange}/>

                <label htmlFor="email">Email:</label>
                <input type="text" name="email" value={this.state.email}/>

                <label htmlFor="gold-client">Is client gold?</label>
                <input type="checkbox" name="gold-client" value={this.state.isGoldClient}/>

                <input type="submit" value="Submit form!"/>
            </form>
        )
    }
}


export default UserAddForm;