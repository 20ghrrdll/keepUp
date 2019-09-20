export const addContact = contact => {
  return {
    type: 'ADD_CONTACT',
    payload: contact,
  };
}

export const deleteContact = contactKey => {
  return {
    type: 'DELETE_CONTACT',
    payload: contactKey,
  }
}

export const checkOffContact = contactKey => {
  return {
    type: 'CHECK_OFF_CONTACT',
    payload: contactKey,
  }
}