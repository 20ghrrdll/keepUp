import React, { Component } from 'react';
import { Text, View, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import ContactList from '../components/ContactList';
import AddContactButton from '../components/AddContactButton';
import { BLUE_GRADIENT_COLOR } from '../constants.js'
import appStyles from '../appStyles.js';


class HomeScreen extends Component {

  onAddContact = () => this.props.navigation.navigate('AddContact')

  render() {
    //
    return (
      <View style={appStyles.container}>
        <LinearGradient
          colors={[ '#fafcfa', '#9DE0C9']}
          start={[0.1, 0.1]}
        >
          <Text style={appStyles.title}>KeepUp</Text>
          <ContactList/>
          <AddContactButton onAddContact={this.onAddContact}/>
        </LinearGradient>
      </View>
    );
  }
}



export default HomeScreen;