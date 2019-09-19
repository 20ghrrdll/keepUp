import { StyleSheet } from 'react-native'
import { SPACE_UNIT, INACTIVE_COLOR } from '../../constants.js'

export default StyleSheet.create({
  form: {
    margin: SPACE_UNIT,
  },

  promptAndInput: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },

  promptTextOutline: {
    height: SPACE_UNIT * 3,
    borderBottomWidth: 1,
    borderBottomColor: INACTIVE_COLOR,
  },

  promptText: {
    paddingTop: 3,
    height: SPACE_UNIT * 3,
    fontSize: SPACE_UNIT * 2,
    minWidth: SPACE_UNIT * 2,
    
  },
  textInput: {
    height: SPACE_UNIT * 3,
    fontSize: SPACE_UNIT * 2,
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