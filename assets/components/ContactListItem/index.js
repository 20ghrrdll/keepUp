import React, { Component } from 'react';
import { Text, View, TouchableHighlight, Animated } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import Swipeable from 'react-native-gesture-handler/Swipeable';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { RectButton } from 'react-native-gesture-handler';

import { deleteContact } from '../../actions.js'
import styles from './styles';

class ContactListItem extends Component {

  _swipeableRow = null;

  rowRef = ref => {
    this._swipeableRow = ref;
  };

  close = () => this._swipeableRow.close;

  onDelete = () => {
    this.close();
    this.props.deleteContact(this.props.contactInfo.contactKey);
  }

  formatContactFrequencyStr = () => {
    const { contactFrequency, contactFrequencyUnits } = this.props.contactInfo;

    if (contactFrequency === 1) {
      const singularFrequency =contactFrequencyUnits.substring(0, contactFrequencyUnits.length - 1)
      return `Once a ${singularFrequency}`
    } else {
      return `Every ${contactFrequency} ${contactFrequencyUnits}`
    }
  }

  renderDeleteAction = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    });
    return (
      <RectButton style={styles.deleteAction} onPress={this.onDelete}>
        <Animated.Text
          style={[
            styles.actionText,
            {
              transform: [{ translateX: trans }],
            },
          ]}>
          Delete
        </Animated.Text>
      </RectButton>
    );
  };


  render() {
    const { name, lastContacted, } = this.props.contactInfo
    return (
      <Swipeable
      ref={this.rowRef}
      friction={2}
      leftThreshold={30}
      renderLeftActions={this.renderDeleteAction}
      onSwipeableLeftOpen={this.onDelete}
      >
        <View style={ styles.contactContainer }>
          <View>
            <Text style={ styles.name }>{ name }</Text>
            <Text>Last Contacted: { lastContacted.fromNow() }</Text>
          </View>
          <View style={styles.frequencyTag}>
            <Text>{this.formatContactFrequencyStr()} </Text>
          </View>
        </View>
      </Swipeable>
    );
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    deleteContact,
  }, dispatch)
);

export default connect(null, mapDispatchToProps) (ContactListItem);