import React from "react";


class UserAddForm extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <form>
                <h2>Adauga un utilizator nou:</h2>

                <label htmlFor="name">Nume:</label>
                <input type="text" name="name"/>

                <label htmlFor="email">Email:</label>
                <input type="text" name="email"/>

                <label htmlFor="gold-client">Is client gold?</label>
                <input type="checkbox" name="gold-client"/>

                <input type="submit" value="Submit form!"/>
            </form>
        )
    }
}


export default UserAddForm;