import React, { Component } from "react";
import { postFriend } from "./actions";
import { connect } from "react-redux";

class CreateFriend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      email: ""
    };
  }
  
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  
  submitForm = e => {
    const { name, age, email } = this.state;
    e.preventDefault();
    this.props.postFriend({ name, email, age: Number(age) });
    this.setState({ name: "", age: "", email: "" });
  };
  render() {
    return (
      <form onSubmit={this.submitForm}>
        <input
          type="text"
          onChange={this.handleChange}
          name="name"
          placeholder="name"
          value={this.state.name}
        />
        <input
          type="text"
          onChange={this.handleChange}
          name="age"
          placeholder="age"
          value={this.state.age}
        />
        <input
          type="text"
          onChange={this.handleChange}
          name="age"
          placeholder="age"
          value={this.state.age}
        />
        <button type="submit">Create Friend</button>
      </form>
    );
  }
}
          
export default connect(null, { postFriend })(CreateFriend);
          
          
          
          
          
          
          
          
          
          
          
          
          
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
