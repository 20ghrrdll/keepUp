import { StyleSheet } from 'react-native'
import { SPACE_UNIT, INACTIVE_COLOR, ACTION_BUTTON_COLOR } from '../../constants.js'

export default StyleSheet.create({
  form: {
    marginLeft: SPACE_UNIT,
    marginRight: SPACE_UNIT,
    marginTop: SPACE_UNIT * 3,
    marginBottom: SPACE_UNIT * 3,
    flexDirection: 'column',
    alignItems: 'center',
  },

  promptAndInput: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACE_UNIT * 2,
  },

  promptTextOutline: {
    height: SPACE_UNIT * 3,
    borderBottomWidth: 1,
    borderBottomColor: INACTIVE_COLOR,
  },

  searchPromptText: {
    height: SPACE_UNIT * 3,
    fontSize: SPACE_UNIT * 2,
    minWidth: SPACE_UNIT * 2,
    margin: SPACE_UNIT,
  },

  promptText: {
    height: SPACE_UNIT * 3,
    fontSize: SPACE_UNIT * 2,
    minWidth: SPACE_UNIT * 2,
    
  },
  textInput: {
    height: 24,
    fontSize: SPACE_UNIT * 2,
  },

  actionableDate: {
    fontSize: SPACE_UNIT * 2,
    marginLeft: 4,
    borderBottomColor: INACTIVE_COLOR,
    borderBottomWidth: 1,
  },

  confirmDateButton: {
    color: ACTION_BUTTON_COLOR,
  },



  submitContactButtonWrapper: {
    flex: 1,
    marginLeft: SPACE_UNIT * 3,
    marginRight: SPACE_UNIT * 3,
  },

  submitContactButton: {
    backgroundColor: ACTION_BUTTON_COLOR,
  },

  contactFrequencyUnitsPicker: {
    width: SPACE_UNIT * 10,
    marginLeft: SPACE_UNIT * 2,
  },

  frequencyUnitPickerItem: {
    height: SPACE_UNIT * 10,
  },

});