import React, { Component } from 'react';
import { SectionList, View, Text } from 'react-native';
import moment from 'moment';

import ContactListItem from '../ContactListItem';


class ContactList extends Component {

  state = {
      overdues: [],
      warmConnects: [],
    }


  getDeadline(contact) {
    const {lastContacted, contactFrequency, contactFrequencyUnits} = contact;
    let contactDeadline = lastContacted.clone();

    contactDeadline.add(contactFrequency, contactFrequencyUnits);
    return contactDeadline;
  }
  compareContactWarmth = (a, b) => {
    if (this.getDeadline(a).isBefore( this.getDeadline(b) )) {
      return -1;
    }
    return 1;
  }
 
  determineOverdues = () => {
    const overdues = [];
    const warmConnects = [];
    const { contacts } = this.props;
    const today = moment();

    contacts.map(( contact ) => {
      const {lastContacted, contactFrequency, contactFrequencyUnits} = contact;
      let contactDeadline = lastContacted.clone();
  
      contactDeadline.add(contactFrequency, contactFrequencyUnits);

      if (today.isAfter(contactDeadline)) {
        overdues.push(contact);
      } else {
        warmConnects.push(contact);
      }
    })

    overdues.sort(this.compareContactWarmth)
    warmConnects.sort(this.compareContactWarmth)

    this.setState({overdues, warmConnects});
  }

  componentDidMount(){
    this.determineOverdues();
  }

  renderSectionTitle(title){
    return (
      <Text>{title}</Text>
    );
  }
  
  render(){
    return (
      <View>
        <SectionList
          sections={[
            {
              title: 'Could use a check-in', 
              data: this.state.overdues,
            },
            {
              title: 'Drop someone a line!',
              data: this.state.warmConnects,
            },
          ]}
          renderItem={ ({ item }) => <ContactListItem name={item.name} lastContacted={item.lastContacted}/>}
          renderSectionHeader={({ section: { title } }) => this.renderSectionTitle(title)}
        >
        </SectionList>
      </View>
    );
  }
}

export default ContactList;