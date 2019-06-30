import React from "react";
// import { Link } from 'react-router-dom';

const FriendList = (props) => {
    return (
        <div className="wrapper">
            {props.friends.map((friend) => (
                <div className="card" key={friend.id}>
                    <div>
                        <h2> {friend.name} </h2>
                        <p> {friend.age} </p>
                        <p> {friend.email} </p>
                    </div>
                </div>
            ))}
        </div>
    )
}



export default FriendList;


