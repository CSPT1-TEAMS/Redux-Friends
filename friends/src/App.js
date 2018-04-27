import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import './App.css';
import Friends from './Components/Friends';
import CreateFriendForm from './Components/CreateFriendForm';
import UpdateFriendForm from './Components/UpdateFriendForm';
import { getFriends, deleteFriend } from './Actions';

class App extends Component { 
  componentDidMount(){
    this.props.getFriends();
  }
  render() {
    return (
      <div className="App">
        <CreateFriendForm /> 
        <UpdateFriendForm />  
        <Friends {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetchingFriends: state.fetchingFriends,
    friendsFetched: state.friendsFetched,
    friends: state.friends,
    error: state.error
  }
} 
export default connect(mapStateToProps, { getFriends, deleteFriend })(App);
