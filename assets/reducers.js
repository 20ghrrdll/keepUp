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
      return { allContacts: updatedContacts };

    case 'DELETE_CONTACT':
      const truncatedContacts = new Map(state.allContacts);
      truncatedContacts.delete(action.payload);
      return { allContacts: truncatedContacts };

    case 'CHECK_OFF_CONTACT':
      const contactsWithCheckOff = new Map(state.allContacts);
      let checkedOffContact = contactsWithCheckOff.get(action.payload);
      if (checkedOffContact) {
        checkedOffContact.lastContacted = new moment();
        contactsWithCheckOff.set(action.payload, checkedOffContact)
      }
      return { allContacts: contactsWithCheckOff };
    default:
      return state
  }
}

export default combineReducers({
  connections: connectionsReducer,
});