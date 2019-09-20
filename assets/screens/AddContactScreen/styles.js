import { StyleSheet } from 'react-native'
import { SPACE_UNIT, INACTIVE_COLOR, ACTION_BUTTON_COLOR } from '../../constants.js'

export default StyleSheet.create({
  form: {
    margin: SPACE_UNIT,
  },

  promptAndInput: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginBottom: SPACE_UNIT * 2,
  },

  promptTextOutline: {
    height: SPACE_UNIT * 3,
    borderBottomWidth: 1,
    borderBottomColor: INACTIVE_COLOR,
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

  lastContactedWrapper: {
    flexDirection: 'column',
  },

  submitContactButtonWrapper: {
    flex: 1,
  },

  contactFrequencyUnitsPicker: {
    width: SPACE_UNIT * 10,
    marginLeft: SPACE_UNIT * 2,
  },

  frequencyUnitPickerItem: {
    height: SPACE_UNIT * 10,
  },

});