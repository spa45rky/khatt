import React from 'react';
import {ReactComponent as LogoutBtn} from '../Media/logout-btn.svg'

function UserTab(props){
    return(
        <div className="user-tab">
            <img src={props.img}/>
            <button><LogoutBtn/></button>
        </div>
    )
}

export default UserTab;