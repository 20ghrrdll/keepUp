import React, { Component } from 'react';
import { Text, View, AsyncStorage } from 'react-native';

import ContactList from '../components/ContactList';
import AddContactButton from '../components/AddContactButton';
import appStyles from '../appStyles.js';


class HomeScreen extends Component {
  state = {
    allContacts: [],
  }

  /*async componentDidMount() {
    let savedContactKeys = []

    try{
      savedContactKeys = await AsyncStorage.getAllKeys();
    } catch (e) {
      console.log('e');
    }

    //console.log(savedContactKeys)

    if (savedContactKeys) {
      let savedContacts = []

      AsyncStorage.multiGet(savedContactKeys, (error, results) => {
        //console.log('the results are', results);
        if (error) console.log(error);
        else if (results) {
          results.forEach(result => {
            savedContacts.push(JSON.parse(result[1]));
          })
          const oldContacts = this.state.allContacts;
          const allContacts = oldContacts.concat(savedContacts);
          this.setState({allContacts})
          //console.log(this.state.allContacts)
        }
      })
    }

  }*/


  onAddContact = () => this.props.navigation.navigate('AddContact')

  render() {
    //
    return (
      <View style={appStyles.container}>
      <Text style={appStyles.title}>KeepUp</Text>
      <ContactList/>
      <AddContactButton onAddContact={this.onAddContact}/>
      </View>
    );
  }
}



export default HomeScreen;