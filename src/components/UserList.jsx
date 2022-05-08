import React from 'react';
import UserItem from './UserItem';

//changed function into class
class UserList extends React.Component{
    constructor(props){
        // console.log('UserList constructor has been called');
        super(props);
        this.state = {}
    }

    componentDidMount(){
        // console.log('UserList has been mounted');
    }

    render(){
        // console.log('UserList render has been called');
        return(
            <div>
                {
                    this.props.users.map((user, index) => {
                        return <UserItem 
                            name = {user.name}
                            email = {user.email}
                            isGoldClient = {user.isGoldClient}
                            key = {index}
                        />
                    }) 
                }   
            </div>
        );
    }

}

export default UserList;