import React, { Component } from 'react';
import { Text, View } from 'react-native';

import ContactList from '../components/ContactList';
import AddContactButton from '../components/AddContactButton';
import testData from '../testData';
import appStyles from '../appStyles.js'

class HomeScreen extends Component {
  onAddContact = () => this.props.navigation.navigate('AddContact')
  render() {
    return (
      <View style={appStyles.container}>
      <Text style={appStyles.title}>KeepUp</Text>
        <ContactList contacts={testData}/>
        <AddContactButton onAddContact={this.onAddContact}/>
      </View>
    );
  }
}

export default HomeScreen