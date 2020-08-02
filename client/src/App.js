import React from 'react';
import API from './utils/API';
import './assets/css/global.css';

import NavBar from './components/NavBar';
import Jumbotron from './components/Jumbotron';
import Search from './components/BookSearch';
import Results from './components/Results';
import SavedBooks from './components/SavedBooks';

export default class App extends React.Component {

  state = { 
    bookList: [],
    searchTerm: ""
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks() {
    API.getBooks().then( res => {
      this.setState({ bookList: res.data.results });
    })
    .catch(err => console.log(err))
  }

  render () {
    return (
      <div className="App">
        <NavBar/>
        <Jumbotron/>
        <Search/>
        <Results/>
        <SavedBooks/>
    </div>
    );
  }
}