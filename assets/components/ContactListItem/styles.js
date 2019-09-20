import { StyleSheet } from 'react-native';
import { 
  SPACE_UNIT, 
  CONTACT_ITEM_COLOR, 
  DELETE_COLOR, 
  ACTION_BUTTON_TEXT_COLOR, 
  ACTION_BUTTON_COLOR,
 } from '../../constants'


export default styles = StyleSheet.create({ 
  name: {
    fontWeight: 'bold',
  },

  contactContainer: {
    height: 8 * SPACE_UNIT,
    backgroundColor: CONTACT_ITEM_COLOR,
    marginBottom: SPACE_UNIT,
    padding: SPACE_UNIT,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  deleteAction: {
    flex: 1,
    backgroundColor: DELETE_COLOR,
    justifyContent: 'center',
    marginBottom: SPACE_UNIT,
  },

  checkOffAction: {
    flex: 1,
    backgroundColor: ACTION_BUTTON_COLOR,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: SPACE_UNIT,
  },

  actionText: {
    color: ACTION_BUTTON_TEXT_COLOR,
    backgroundColor: 'transparent',
    fontWeight: 'bold',
  },

  frequencyTag: {
    paddingRight: SPACE_UNIT,
  },
})