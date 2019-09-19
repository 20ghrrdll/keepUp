import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { ACTION_BUTTON_TEXT_COLOR, SPACE_UNIT } from '../../constants.js'
import styles from './styles'

class AddContactButton extends Component {
  onPress = () => this.props.onAddContact()

  render() {
    return (
      <TouchableOpacity style={styles.circleButton} onPress={this.onPress}>
          <Icon
            name='add'
            color={ACTION_BUTTON_TEXT_COLOR}
            size={SPACE_UNIT * 6}
            containerStyle={styles.plusIcon}
          />
      </TouchableOpacity>
    )
  }
}

export default AddContactButton;