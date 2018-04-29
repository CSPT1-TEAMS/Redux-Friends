import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Friend from "./friend";
import CreateFriend from "./CreateFriend";
import UpdateFriend from "./updateFriend";
import { connect } from "react-redux";
import { getFriends } from "./actions";

class App extends Component {
  componentDidMount() {
    this.props.getFriends();
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.props.pending ? (
            <img src={logo} className="App-logo" alt="logo" />
          ) : null}
          <h1 className="App-title">Welcome to Friends!</h1>
          <CreateFriend />
        </header>
        {this.props.error !== "" ? <h2>{this.props.error}</h2> : null}
        {this.props.updating ? <UpdateFriend /> : null}
        <ul>
          {this.props.friends.maps(friend => {
            return <Friend key={friend.id} friend={friend} />;
          })}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    pending: state.pending,
    error: state.error,
    friends: state.friends,
    updating: state.updating
  };
};
export default connect(mapStateToProps, { getFriends })(App);       
        
        
        
        
        
        
