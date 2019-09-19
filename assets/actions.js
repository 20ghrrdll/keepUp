export const addContact = contact => {
  return {
    type: 'ADD_CONTACT',
    payload: contact,
  };
}

export const deleteContact = contactIndex => {
  return {
    type: 'DELETE_CONTACT',
    payload: contactIndex,
  }
}