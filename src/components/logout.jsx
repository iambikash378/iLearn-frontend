import react from 'react';

function LogOut({setHasLoggedIn, setNameOfUser}) {

    function handleLogout(){
        setHasLoggedIn(false);
        setNameOfUser('');
        localStorage.removeItem("token");
    }

    return(
        <div>
            <button onClick = {handleLogout}> Log Out</button>
        </div>
    )
}

export default LogOut;