import React from "react";

function UserItem(props){
    const { name, email, isGoldClient } = props;

    return (
        <div>
            <p>{ name }</p>
            <p>{ email }</p>
            {
                isGoldClient 
                ? <p>CLIENT GOLD</p>
                : null
            }
        </div>
    );
}


export default UserItem;