import React from "react";

function UserItem(props){

    const { name, email, isGoldClient } = props;
    console.log(isGoldClient);

    return (
        <div>
            <p>{ name }</p>
            <p>{ email }</p>
        </div>
    );
}


export default UserItem;