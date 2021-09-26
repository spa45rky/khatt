import React from 'react';
import {ReactComponent as PostBtn} from '../Media/send-btn.svg';

function PostBox (){
    return(
        <div className="post-box">
            <textarea>Post your updates!</textarea>
            <button><PostBtn/></button>
        </div>
    )
}

export default PostBox;