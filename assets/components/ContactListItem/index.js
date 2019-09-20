import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { deleteContact } from '../../actions.js'
import styles from './styles';

class ContactListItem extends Component {
  onDelete = () => this.props.deleteContact(this.props.contactKey)
  render() {
    const { name, lastContacted} = this.props
    return (
      <View style={ styles.contactContainer }>
        <Text style={ styles.name }>{ name }</Text>
        <Text>Last Contacted: { lastContacted.fromNow() }</Text>
        <TouchableHighlight onPress={this.onDelete}>
          <Text>x</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    deleteContact,
  }, dispatch)
);

export default connect(null, mapDispatchToProps) (ContactListItem);