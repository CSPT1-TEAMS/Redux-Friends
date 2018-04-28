import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: []
    }
  }
  componentDidMount() {
    axios.get('http://localhost:5000/api/friends')
      .then((res) => {
        this.setState({
          friends: [...res.data]
        })
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
  render() {
    console.log(this.state.friends);
    return (
      <div className="App">
       
      </div>
    );
  }
}

export default App;
