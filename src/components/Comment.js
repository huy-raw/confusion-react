import React from 'react';


const formatDate = (date) => {
    return date.toLocaleDateString();
}

//create new components "Comment"
const Comment = (comment) =>{
    return (
        <div>
            <div>
                <img src={props.author.avatar_url} alt={props.author.name}></img>
                <div>{props.author.name}</div>
            </div>
            <div>{props.text}</div>
            <div>{formatDate(props.date)}</div>
        </div>
    );
}

export default Comment;