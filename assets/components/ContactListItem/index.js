import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

class ContactListItem extends Component {
  render() {
    const { name, lastContacted } = this.props
    return (
      <View style={ styles.contactContainer }>
        <Text style={ styles.name }>{ name }</Text>
        <Text>Last Contacted: { lastContacted.fromNow() }</Text>
        
      </View>
    )
  }
}

export default ContactListItem;