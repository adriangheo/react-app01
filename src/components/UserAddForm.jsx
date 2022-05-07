import React from "react";
import './UserAddForm.css'


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
        console.log(event.target.value);
        const inputValue = event.target.value;
        this.setState({name: inputValue})
    }

    handleEmailChange(event){
        const inputValue = event.target.value;
        this.setState({email: inputValue})
    }

    handleIsGoldChange(event){
        console.log(event.target.checked)
        const inputValue = event.target.checked;
        this.setState({isGoldClient: inputValue})
    }

    render(){
        return(
            <form className="user-add-form">
                <h2>Adauga un utilizator nou:</h2>

                <label htmlFor="name">Nume:</label>
                <input 
                    type="text" 
                    name="name" 
                    value={this.state.name} 
                    onChange={(event)=>{this.handleNameChange(event)}}
                />

                <label htmlFor="email">Email:</label>
                <input 
                    type="text" 
                    name="email" 
                    value={this.state.email} 
                    onChange={(event)=>{this.handleEmailChange(event)}}
                />

                <label htmlFor="gold-client">Is client gold?</label>
                <input 
                    type="checkbox" 
                    name="gold-client" 
                    checked = {this.isGoldChange}
                    onChange={(event)=>{this.handleIsGoldChange(event)}}
                />

                <input type="submit" value="Submit form!"/>
            </form>
        )
    }
}


export default UserAddForm;