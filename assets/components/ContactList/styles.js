import { StyleSheet } from 'react-native'
import { SPACE_UNIT, INACTIVE_COLOR } from '../../constants.js'

export default StyleSheet.create({
  sectionTitle: {
    fontSize: 22,
    paddingLeft: SPACE_UNIT,
    paddingTop: SPACE_UNIT,
    backgroundColor: INACTIVE_COLOR,
  },

  contactList: {
    marginBottom: SPACE_UNIT * 11,
  }
});