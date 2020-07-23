import React from 'react';

const UserOutput = (props) => {
    return (
        <div>
            <p onClick={props.click}>{props.paragraph}</p>
        </div>
    )
}

export default UserOutput;