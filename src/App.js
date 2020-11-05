import React, { Component } from "react";
import Persons from "./components/Person/Persons";

class App extends Component {
  state = {
    persons: [],
    person: "",
    showPersons: false,
  };
  handleShowPersons = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };
  handleDeletePerson = (id) => {
    const persons = [...this.state.persons];
    const newPersons = persons.filter((p) => p.id !== id);
    this.setState({ persons: newPersons });
  };
  handleChangePerson = (event, id) => {
    const { persons: allPersons } = this.state;
    const persons = [...allPersons];
    const index = persons.findIndex((p) => p.id === id);
    const person = persons[index];
    person.fullName = event.target.value;
    this.setState({ persons: persons });
  };
  handleMakePerson = () => {
    const persons = [...this.state.persons];
    const person = {
      id: Math.floor(Math.random() * 999999),
      fullName: this.state.person,  
    };
    persons.push(person);
    this.setState({ persons,person: '' });
  };
  setPerson = (event) => {
    this.setState({ person: event.target.value });
  };
  render() {
    const { persons, showPersons } = this.state;
    const styles = {
      textAlign: "center",
    };
    const buttonStyle = {
      padding: "1em",
      fontFamily: "BYekan",
      backgroundColor: "pink",
    };
    return (
      <div style={styles}>
        <h1>Person manager</h1>
        <h4>count person: {persons.length}</h4>

        <div className=''>
          <input
            type='text'
            placeholder='Make New Person'
            value={this.state.person}
            onChange={this.setPerson}
          />
          <button onClick={this.handleMakePerson}>make Person</button>
        </div>

        <button onClick={this.handleShowPersons} style={buttonStyle}>
          show persons
        </button>
        {showPersons ? (
          <Persons
            persons={persons}
            deletePerson={this.handleDeletePerson}
            changePerson={this.handleChangePerson}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
