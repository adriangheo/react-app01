import React from 'react';

function UserList(props){
    const {users} = props;
    return(
        <div>
            {
                users.map((user) => {
                    return <div>
                        {
                            user.name
                        }
                    </div>
                }) 
            }   
        </div>
    );
}

export default UserList;