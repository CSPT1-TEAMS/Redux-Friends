import { FETCHING, FETCHED, ERROR, SUCCESS } from '../Actions';

const initialState = {
    fetchingFriends: false,
    friendsFetched: false,
    friends: [],
    error: null
}


export const friendReducer = (state=initialState, action) => {
  switch(action.type) {
    case FETCHING:
      return {...state, fetchingFriends: true}
    case FETCHED:
      return {...state, fetchingFriends: false, friendsFetched: true, friends: state.friends.concat(action.friends)}
    case ERROR:
      return {...state, fetchingFriends: false, error: action.error}
    case SUCCESS:
      return {...state, friends: [...action.friends]}
    default: 
      return state;
    }
}
