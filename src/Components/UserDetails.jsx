import React from 'react';
import {ReactComponent as Letter} from '../Media/letter-icon.svg';


function UserDetails(props){
    return(
        <div className="user-details">
            <h1>Khatt Written: {props.userWritten}</h1>
            <Letter/>

        </div>
    )
}

export default UserDetails;