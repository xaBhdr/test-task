import React, { useState } from 'react'
import RequestForm from './components/RequestForm'
import ResponseDisplay from './components/ResponseDisplay'

function App() {
    const [response, setResponse] = useState('');

    // const handleRequestSubmit = (request) => {
    //     setResponse(request);
    // }

    const handleRequestSubmit = async (request) => {
        try {
            const response = await fetch('http://localhost:5000/ask', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ request: request }),
            });
            const data = await response.json();
            setResponse(data.response);
        } catch (error) {
            console.error('error', error);
        }
    }

    return (
        <div>
            <h1>Тестовое задание</h1>
            <RequestForm onSubmit={handleRequestSubmit} />
            {response && <ResponseDisplay response={response} />}
        </div>
    )
}

export default App