import { StyleSheet } from 'react-native';
import { SPACE_UNIT } from '../../constants'


export default styles = StyleSheet.create({ 
  name: {
    fontWeight: 'bold',
  },

  contactContainer: {
    height: 8 * SPACE_UNIT,
    backgroundColor: `powderblue`,
    marginBottom: SPACE_UNIT,
    padding: SPACE_UNIT,
    flex: 1
  }
})