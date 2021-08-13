import React, { Component } from "react";
import "./App.css";
import { CardList } from "../src/Components/card-list/card-lst.component";
import { SearchBox } from "../src/Components/Search-Box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monster: [],
      searchfiled: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monster: users }));
  }
  // CREATING A ARROW FUNCTION BECAUSE IN WE CREATE mETHOD FOR HANDLCHANGE WE HAVE TO ADD BIND //METHOD TO OVERCOME FROM THIS
  handlechange = (e) => this.setState({ searchfiled: e.target.value });
  render() {
    // concept destucturing start
    const { monster, searchfiled } = this.state;
    // concept destucturing end
    const filtermonster = monster.filter((monster) =>
      monster.name.toLowerCase().includes(searchfiled.toLowerCase())
    );
    return (
      // Be  fore the below code we have input tag when i store in component file and to refer that i store in react.txt
      <div className="App">
      <h1> Monster Roledex</h1>
        <SearchBox
          placeholder="Search monster"
          handlechange={this.handlechange}
        />
        <CardList monster={filtermonster} />
      </div>
    );
  }
}

export default App;
