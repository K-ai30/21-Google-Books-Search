import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from "./utils/API";
import "./assets/css/global.css";

import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import Search from "./components/BookSearch";
import Results from "./components/Results";
import SavedBooks from "./components/SavedBooks";

export default class App extends React.Component {
  // Create state
  // state = {
  //   bookList: [],
  //   searchTerm: "",
  //   // results: [],
  //   alphaNumericOrder: true,
  // };

  // componentDidMount() {
  //   this.getBooks();
  // }

  // getBooks() {
  //   API.getBooks()
  //     .then((res) => {
  //       this.setState({ bookList: res.data.results });
  //     })
  //     .catch((err) => console.log(err));
  // }

  // handleClickEvent = (event) => {
  //   const value = event.target.value;
  //   if (!value) {
  //     this.setState({ searchTerm: "" });
  //     this.getBooks();
  //   } else {
  //     this.setState({
  //       bookList: this.state.bookList.filter((book) => {
  //         if (
  //           employee.name.first.includes(value) ||
  //           employee.name.last.includes(value) ||
  //           employee.email.includes(value)
  //         ) {
  //           return employee;
  //         }
  //       }),
  //       searchTerm: value,
  //     });
  //   }
  // };

  render() {
    return (
      <div className="App">
        <NavBar />
        <Jumbotron />
        <Search />
        <Results />
        <SavedBooks />
      </div>
    );
  }
}
