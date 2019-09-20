import { StyleSheet } from 'react-native';
import { SPACE_UNIT, ACTION_BUTTON_COLOR } from '../../constants'


export default styles = StyleSheet.create({ 
  circleButton: {
    paddingRight: SPACE_UNIT,
    height: SPACE_UNIT * 7,
    width: SPACE_UNIT * 7,
    borderRadius: SPACE_UNIT * 14,
    backgroundColor: ACTION_BUTTON_COLOR,
    position: 'absolute',
    alignSelf: 'flex-end',
    bottom: SPACE_UNIT * 5,
    right: SPACE_UNIT * 2,
  },

  plusIcon: {
   marginLeft: 6,
   marginTop: 6,
  }

})