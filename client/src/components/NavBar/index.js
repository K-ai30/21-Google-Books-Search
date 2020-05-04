import React from 'react';
import './style.css';

function NavBar() {
    return (
        <nav className="navbar navbar-light bg-light">
            <button className="navbar-brand mb-0 h1">Search</button>
            <button className="navbar-brand mb-0 h1">Saved</button>
        </nav>
    )
}

export default NavBar;