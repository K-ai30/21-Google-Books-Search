import React from 'react';
import './style.css';

function NavBar() {
    return (
        <nav className="navbar navbar-light bg-light">
            <div>
                <h3 id="appName">Google Books</h3>
                <button id="searchBtn" className="navbar-brand mb-0 h1">Search</button>
                <button id="savedBtn" className="navbar-brand mb-0 h1">Saved</button>
            </div>        
        </nav>
    )
}

export default NavBar;