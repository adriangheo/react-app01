import React from 'react';

function UserList(props){
    const {users} = props;
    return(
        <div>
            {
                users.map((user) => {
                    return <div>
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                        {
                            user.isGoldClient
                                ? <p>CLIENT GOLD</p>
                                : null 
                        }
                    </div>
                }) 
            }   
        </div>
    );
}

export default UserList;