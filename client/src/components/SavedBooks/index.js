import React from 'react';
import './style.css';

function SavedBooks() {
    return (
        <div className="container">
            <div className="card bg-light">
                <div className="card-header bg-secondary text-white">
                <i class="fas fa-download"></i> Saved Books
                </div>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

export default SavedBooks;