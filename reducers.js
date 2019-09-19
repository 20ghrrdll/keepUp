import { combineReducers } from 'redux';
import testData from './assets/testData.js'

const INITIAL_STATE = {
  allContacts: testData,
}

const connectionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default combineReducers({
  connections: connectionsReducer,
});