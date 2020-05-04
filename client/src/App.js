import React from 'react';
import './App.css';
import './assets/css/global.css';

import Container from './components/Container';

import NavBar from './components/NavBar';
import Jumbotron from './components/Jumbotron';
import Search from './components/BookSearch';
import Results from './components/Results';
import SavedBooks from './components/SavedBooks';

function App() {
  return (
    <div className="App">
      {/* <Container> */}
        <NavBar/>
        <Jumbotron/>
        <Search/>
        <Results/>
        <SavedBooks/>

      {/* </Container> */}
    </div>
  );
}

export default App;
