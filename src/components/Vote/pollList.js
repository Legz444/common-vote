import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Vote from './vote';

const PollList = (props) => {
    const [poll, setPoll] = useState({});

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('http://localhost:3001/vote', {
                headers: {
                Authorization: 'Bearer' + localStorage.getItem('token')
            }});
            setPoll(response.data);
        }
        fetchData();
    }, [poll]);

    const vote = poll.map((poll, i) => {
        return(
            <div key={i}>
                <Vote poll={poll} isLoggedIn={props.isLoggedIn} />
            </div>
        );
    });
    return <div>{vote}</div>
}

export default PollList; 