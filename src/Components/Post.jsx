import React from 'react'

function Post(props){
    return(
        <div className="post">
            <div className="post-user">
                <img src={props.img}/>
                <h1>{props.userName}</h1>
            </div>
            <p>{props.postText}</p>
        </div>
    )
}

export default Post;