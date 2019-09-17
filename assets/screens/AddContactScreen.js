import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';


class AddContactScreen extends Component {
  addContact = () => this.props.navigation.navigate('Home')
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Plant a seed with...</Text>
        <Button
          onPress={this.addContact}
          title='Keep Up!'
        />
      </View>
    );
  }
}

export default AddContactScreen;