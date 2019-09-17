import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles'

class AddContactButton extends Component {
  onPress = () => this.props.onAddContact()

  render() {
    return (
      <TouchableOpacity style={styles.circleButton} onPress={this.onPress}>
          <Text>Add Contact</Text>
      </TouchableOpacity>
    )
  }
}

export default AddContactButton;