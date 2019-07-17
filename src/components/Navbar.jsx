import React from 'react';
import { useAuth0 } from './../providers/auth0-wrapper';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <div>
            {!isAuthenticated && (
                <button 
                    onClick={() => loginWithRedirect({})}
                >
                    Log in
                </button>
            )}

            {isAuthenticated && <button onClick={() => logout()}>Logout</button>}

            {isAuthenticated && (
                <span>
                    <Link to="/">Home</Link>&nbsp;
                    <Link to="/profile">Profile</Link>
                </span>
            )}
        </div>
    );
};

export default NavBar;