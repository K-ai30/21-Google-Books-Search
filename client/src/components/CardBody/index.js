import React from 'react';
import './style.css';
import BookSearch from '../BookSearch';

function CardBody(props) {
    return (
        <div className="row">
            <div id="border" className="card-body clearfix">
                <h4 id="title">Harry Potter and The Sorcerer's Stone</h4>
                <h6 id="author">Written by J. K. Rowling</h6>
            <div>
                <button id="view" className="btn bg-secondary">View</button>
                <button id="delete" className="btn bg-primary"><i class="far fa-save"></i> Save</button>
            </div>
            <div>
                <img id="pictureBook" alt=" "/>
                <p id="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            </div>
        </div>
    )
}

export default CardBody;