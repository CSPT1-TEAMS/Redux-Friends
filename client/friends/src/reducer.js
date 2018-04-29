import { PENDING, ERROR, SUCCESS, UPDATING } from "./actions";

const initialState = {
  fetching: false,
  error: "",
  friends: [],
  updating: false,
  friend: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PENDING:
      return Object.assign({}, state, { pending: true });
    case ERROR:
      return Object.assign({}, state, {
        error: action.error,
        pending: false,
        updating: false
      });
    case SUCCESS: 
      return Object.assign({}, state, {
        friends: action.friends,
        pending: false,
        updating: false
      });
    case UPDATING:
      return Object.assign({}, state, {
        updating: true,
        friend: action.friend
      });
    default: 
      return state;
  }
};
