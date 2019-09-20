import { combineReducers } from 'redux';
import moment from 'moment';
import testData from './testData.js'


const INITIAL_STATE = {
  allContacts: testData,
}

const connectionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      const newContact = action.payload;
      const newContactKey = newContact.name + newContact.lastContacted.format();
      const updatedContacts = new Map(state.allContacts);
      updatedContacts.set(newContactKey, newContact)
      return {...state, allContacts: updatedContacts};

    case 'DELETE_CONTACT':
      const truncatedContacts = new Map(state.allContacts)
      truncatedContacts.delete(action.payload)
      return {...state, allContacts: truncatedContacts}
    default:
      return state
  }
}

export default combineReducers({
  connections: connectionsReducer,
});