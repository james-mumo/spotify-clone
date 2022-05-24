export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
};

// in this function the reducer, it takes two things,
// the "STATE" of the Data LAyer and
// ACTION which means the way the reducer manipulates the state by setting it in some ways
const reducer = (state, action) => {
  // we console our action to debug and view errors
  console.log(action);

  // to push a user to the data layer, we listen and dispatch with an action
  // therfore we create an action type therefore when an action of the type specified is received then return a new state based on the action type set
  switch (action.type) {
    // below this, when an action called "SET_USER" is receieved, then a new state is supposed to be returned
    case "SET_USER":
      return {
        // so what it basically means is that, te spread operator means is
        // keep whatever was in the current state but Update the 'user' slice which was Null in the initial state by whatever was in the action since an action has two thinsg which are type and payload
        ...state,
        user: action.user,
      };
    // the default action if no action is sent s to return the state as it was and not chage anythaing
    default:
      return state;
  }
};

export default reducer;
