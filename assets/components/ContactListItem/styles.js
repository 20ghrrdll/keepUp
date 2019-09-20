import { StyleSheet } from 'react-native';
import { SPACE_UNIT, CONTACT_ITEM_COLOR } from '../../constants'


export default styles = StyleSheet.create({ 
  name: {
    fontWeight: 'bold',
  },

  contactContainer: {
    height: 8 * SPACE_UNIT,
    backgroundColor: CONTACT_ITEM_COLOR,
    marginBottom: SPACE_UNIT,
    padding: SPACE_UNIT,
    flex: 1
  }
})