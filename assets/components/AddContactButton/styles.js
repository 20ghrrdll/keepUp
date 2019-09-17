import { StyleSheet } from 'react-native';
import { SPACE_UNIT } from '../../constants'


export default styles = StyleSheet.create({ 
  circleButton: {
    paddingRight: SPACE_UNIT,
    height: SPACE_UNIT * 7,
    width: SPACE_UNIT * 7,
    borderRadius: SPACE_UNIT * 14,
    backgroundColor: 'green',
    position: 'absolute',
    alignSelf: 'flex-end',
    bottom: SPACE_UNIT * 3,
    right: SPACE_UNIT,
  },
})