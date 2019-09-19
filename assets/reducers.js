import { combineReducers } from 'redux';
import testData from './testData.js'


const INITIAL_STATE = {
  allContacts: testData,
}

const connectionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      const updatedContacts = state.allContacts.slice();
      updatedContacts.push(action.payload)
      return {...state, allContacts: updated};

    case 'DELETE_CONTACT':
      const { allContacts } = state
      const truncatedContacts = allContacts.slice(0,action.payload).concat(allContacts.slice(action.payload+1))
      return {...state, allContacts: truncatedContacts}
    default:
      return state
  }
}

export default combineReducers({
  connections: connectionsReducer,
});