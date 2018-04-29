import React from "react";
import { connect } from "react-redux";
import { deleteFriend, startUpdating } from "./actions";

const Friend = props => {
  const { friend } = props;
  const deleteFriend = () => {
    props.deleteFriend(friend.id);
  };
  const startUpdate = () => {
    props.startUpdating(friend);
  };
  
  return (
    <li className={"friend"}>
      <p>{friend.name}</p>
      <p>{friend.age}</p>
      <button onClick={deleteFriend}>Delete</button>
      <button onClick={startUpdate}>Update</button>
    </li>
  );
};

export default connect(null, { deleteFriend, startUpdating })(Friend);
