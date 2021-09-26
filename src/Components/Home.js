import React from 'react';
import Post from './Post';
import PostBox from './PostBox';
import UserTab from './UserTab';
import UserDetails from './UserDetails';
import Messengers from './Messengers';
import Samo from '../Media/testSamo.png';


class Home extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="home">
                <div className="left-col">
                    <UserTab
                        img={Samo}/>
                    <UserDetails
                        userWritten="10"/>
                </div>
                <div className="middle-col">
                    <PostBox/>
                    <Post 
                        userName="Test"
                        postText="tesjfiasjdasidoasdioasdjioas"/>
                </div>
                <div className="right-col">
                    <Messengers/>
                </div>
            </div>
        )
    }
}

export default Home