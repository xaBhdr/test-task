import React from 'react';

function ResponseDisplay({ response }) {
    return (
        <div>
            <h2>Ответ: </h2>
            <p>{response.userRequest}</p>
        </div>
    )
}

export default ResponseDisplay;
