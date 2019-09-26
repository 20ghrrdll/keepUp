import React, { Component } from 'react';
import { View } from 'react-native';
import { SearchBar } from 'react-native-elements';

import * as Contacts from 'expo-contacts';

class ContactsSearchBar extends Component {

    state = {
        contactQuery: '',
    }

    componentDidMount() {

    }
    

    updateContactQuery = async (contactQuery) => {
        console.log('querying!');
        this.setState({contactQuery});
        const results = Contacts.getContactsAsync({ fields: [Contacts.Fields.Name], name: contactQuery }).then(
            value => console.log('Success!', value),
            error => console.log('Error:', error),
        );
    }

    render(){
        return (
            <View>
              <SearchBar
                placeholder="Search your contacts by name"
                onChangeText={this.updateContactQuery}
                value={this.state.contactQuery}
                lightTheme={true}
              />
            </View>
          );
    }
}

export default ContactsSearchBar;