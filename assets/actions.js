export const addContact = contact => {
  return {
    type: 'ADD_CONTACT',
    payload: contact,
  };
}

export const deleteContact = contactKey => {
  console.log('deleting!');
  return {
    type: 'DELETE_CONTACT',
    payload: contactKey,
  }
}