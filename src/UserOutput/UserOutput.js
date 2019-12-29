import React from 'react';
import './UserOutput.css';

const userOutput  = (props) => {
    const [username] = [props.username];
    return(
        <div className="UserOutput">
            <hr/>
            <p>The username is: </p>
            <p>{username}</p>
            <hr/>
        </div>
    )
};

export default userOutput;