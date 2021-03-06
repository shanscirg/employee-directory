import React, { Component } from 'react';
import './App.css';
import Employee from './components/Employee';
import Button from './components/Button';
import Header from './components/Header';
import employeesList from './employees.json';
import "./index.css";

class App extends Component {
  state = {
    employees: employeesList
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  sortEmployees = (a, b) => {
    console.log(a.name);
    const personA = a.name.toUpperCase();
    const personB = b.name.toUpperCase();

    let comparison = 0;
    if (personA > personB) {
      comparison = 1;
    } else if (personA < personB) {
      comparison = -1;
    }
    console.log(comparison);
    return comparison;
  }


  filterEmployees = () => {
    return this.state.employees.filter(employee => employee.department === "Engineering")
  }


  render() {
    return (
      <>
        <Header />
        <div className="buttons-div">
          <Button onClick={() => this.setState({ employees: this.filterEmployees() })}>Find All Engineers</Button>
          <Button onClick={() => this.setState({ employees: this.state.employees.sort(this.sortEmployees) })}>Sort Alphabetically</Button>
          <Button onClick={() => this.setState({ employees: employeesList })}>Reset</Button>
        </div>
        <Employee employees={this.state.employees} />
      </>
    );
  }
}

export default App;
