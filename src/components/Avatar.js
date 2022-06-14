import React from 'react';

function Avatar(props) {
    return(<img src={props.users.avatarUrl} alt={props.users.name} />);
}

export default Avatar;
