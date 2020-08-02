import React, { Component } from 'react';
import "./style.css";

export default class Jumbotron extends Component {
    render() {
        return (
            <div className="container">
                <div className="jumbotron jumbotron-fluid bg-secondary">
                    <h1 id="heading">(React) Google Books Search</h1>
                    <h3 id="subheading">Search for and Save Books of Interest.</h3>
                </div>
            </div>
        )
    }
}