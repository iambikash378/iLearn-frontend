import React, {useEffect, useState} from 'react';
import {backend} from '../api/api';

function LeaderBoardPage(){

    const [data, setData] = useState([]);

    useEffect(()=>{
        const token = localStorage.getItem("token");

        backend.get('/leaderboard/show', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            console.log("Fetched Data", response.data);
            setData(response.data);
        })
        .catch(err => console.error("Error fetching leaderboard", err));
    },[])

    return(
        <div>
            <h2>Leaderboard</h2>
            <ol>
                {data.map((entry, index) =>(
                    <li key = {entry._id}>
                        {entry.name} : {entry.score}
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default LeaderBoardPage;