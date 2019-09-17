import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles'

class AddContactButton extends Component {
  render() {
    return (
      <View style={styles.circleButton}>
        <Text>Add Contact</Text>
      </View>
    )
  }
}

export default AddContactButton;