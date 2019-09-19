import React, { Component } from 'react';
import { SectionList, View, Text } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';

import ContactListItem from '../ContactListItem';
import styles from './styles.js';


class ContactList extends Component {
  state = {
      overdues: [],
      warmConnects: [],
      loaded: false,
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
    const { allContacts } = this.props;
    const today = moment();

    allContacts.map(( contact ) => {
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

  keyExtractor = (item, index) => item.name + String(index)

  componentDidMount(){
    this.determineOverdues();
    this.setState({loaded: true})
    
  }

  componentDidUpdate(prevProps){
    if (this.state.loaded & prevProps.allContacts !== this.props.allContacts) this.determineOverdues();
  }

  renderSectionTitle(title){
    return (
      <Text style={styles.sectionTitle}>{title}</Text>
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
          renderItem={ ({ item, index }) => <ContactListItem name={item.name} lastContacted={item.lastContacted} listIndex={index}/>}
          renderSectionHeader={({ section: { title } }) => this.renderSectionTitle(title)}
          keyExtractor={this.keyExtractor}
          style={styles.contactList}
        />
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  const { allContacts } = state.connections;
  return { allContacts };
}

export default connect(mapStateToProps)(ContactList);