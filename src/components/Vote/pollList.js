import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Vote from './vote';

const PollList = (props) => {
    const [poll, setPoll] = useState({});

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('http://localhost:3001/vote', {
                headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }});
            setPoll(response.data);
        }
        fetchData();
    }, [poll]);

        return(
            <div>
                {Object.keys(poll).length? <Vote  poll={poll} isLoggedIn={props.isLoggedIn} submitVote={props.submitVote}/>: ''}
            </div>
        );


}

export default PollList; 