import { createStore } from "redux";
import rotateReducer from "reducers/rotateReducer";

//Imports for redux
import { connect } from "react-redux";


function configureStore( state = { rotating: true }) {
  return createStore(rotateReducer, state);
}

export default configureStore;