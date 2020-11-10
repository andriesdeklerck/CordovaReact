import React from 'react';
import './App.css';

class Name extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.firstName + " " + this.state.lastName);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div class="form-group">
          <h3 class="text-success">First Name:</h3>
          <input name="firstName" class="form-control" type="text" value={this.state.firstName} onChange={this.handleChange} />
        </div>
        <div class="form-group">
          <h3 class="text-success">Last Name:</h3>
          <input name="lastName" class="form-control" type="text" value={this.state.lastName} onChange={this.handleChange} />
        </div>
        <input type="submit" class="btn btn-primary" value="Submit" />
      </form>
    );
  }
}

export default Name;
