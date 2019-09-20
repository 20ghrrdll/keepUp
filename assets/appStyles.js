import { StyleSheet } from 'react-native'
import { SPACE_UNIT, BACKGROUND_COLOR } from './constants.js'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  title: {
    fontSize: 36,
    marginBottom: SPACE_UNIT * 2,
    marginLeft: SPACE_UNIT,
    marginTop: SPACE_UNIT * 2,
  },
});