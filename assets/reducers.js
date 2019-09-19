import { combineReducers } from 'redux';
import testData from './testData.js'


const INITIAL_STATE = {
  allContacts: testData,
}

const connectionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      const allContacts = state.allContacts.slice();
      allContacts.push(action.payload)
      return {...state, allContacts}

    default:
      return state
  }
}

export default combineReducers({
  connections: connectionsReducer,
});