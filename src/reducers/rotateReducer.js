export default (state, action) => {
  if( action.type === "rotate" ) {
    return { rotating: action.payload };
  } else {
    return state;
  }
}