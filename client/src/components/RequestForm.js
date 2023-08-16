import React, { useState } from 'react'

function RequestForm({ onSubmit }) {
    const [request, setRequest] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        onSubmit(request);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={request}
                    onChange={(e) => setRequest(e.target.value)}
                    placeholder='Введите запрос'
                />
                <button type="submit">Отправить</button>
            </form>
        </div>
    )
}


export default RequestForm