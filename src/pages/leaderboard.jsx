import React, {useEffect, useState} from 'react';

function LeaderBoardPage(){

    const [data, setData] = useState([]);

    useEffect(()=>{
        const token = localStorage.getItem("token");
        fetch('http://localhost:3000/leaderboard/show', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            if (!response.ok){
                throw new Error(`HTTP Error ${response.status}`);
            }
            return response.json();
        })
        .then(response => {
            console.log("Fetched data:", response)
            setData(response)
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