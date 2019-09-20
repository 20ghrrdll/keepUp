import React, { Component } from 'react';
import { 
  Text, 
  View, 
  DatePickerIOS,
  DatePickerAndroid, 
  Picker, 
  Platform,
  TextInput,
  TouchableOpacity,
  FlatList,
  AsyncStorage
} from 'react-native';
import { SearchBar, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LinearGradient } from 'expo-linear-gradient';

import moment from "moment";
import update from 'immutability-helper';

import { addContact } from '../../actions.js'

import appStyles from '../../appStyles.js'
import styles from './styles.js'


class AddContactScreen extends Component {

  constructor(props) {
    super(props);
    this.state.lastContacted = new moment();
  }

  state = {
    contactSearch: '',
    name: '',
    lastContacted: null,
    changeDate: false,
    contactFrequency: 1,
    contactFrequencyUnits: 'weeks',
    phoneNumber: '',
    contactId: null,

  };

  onAddContact = async() => {
    const {name, lastContacted, contactFrequency, contactFrequencyUnits, contactId, phoneNumber} = this.state
    const newContact = {
      name,
      lastContacted,
      contactFrequency: Number(contactFrequency),
      contactFrequencyUnits,
      contactId,
    }
    
    this.props.addContact(newContact);

    this.props.navigation.navigate('Home')
  };

  updateContactSearch = contactSearch => {
    this.setState({contactSearch});
  }

  onChangeName = name => this.setState({name});
  
  onChangePhoneNumber = phoneNumber => this.setState({phoneNumber})

  setLastContacted = lastContacted => {
    lastContacted = moment(lastContacted)
    this.setState({lastContacted});
  }
  
  onChangeDate = async () => {
    this.setState({changeDate: true});
    if(Platform.OS === 'android') {
      try {
        const {action, year, month, day} = await DatePickerAndroid.open({
          date: this.state.lastContacted.toDate(),
        });
        if (action !== DatePickerAndroid.dismissedAction) {
          const lastContacted = moment([year, month, day])
          this.setState({ lastContacted, changeDate })
        }
      } catch ({code, message}) {
        console.warn('Cannot open date picker', message);
      }
    }
  }

  onConfirmDate = () => {
    this.setState({changeDate: false});
  }

  onChangeContactFrequency = contactFrequency => this.setState({contactFrequency})

  onChangeContactFrequencyUnits = (itemValue, itemIndex) =>
  this.setState({contactFrequencyUnits: itemValue})

  searchForContact = () => {
    return (
      <View>
        <SearchBar
          placeholder="Search your contacts"
          onChangeText={this.updateContactSearch}
          value={this.state.contactSearch}
          lightTheme={true}
        />
      </View>
    );
  }

  nameInput = () => {
    return (
      <View style={styles.promptAndInput}>
      <Text style={styles.promptText}>Stay connected with </Text>
      <View style={styles.promptTextOutline}>
        <TextInput 
          style={styles.textInput} 
          placeholder='name' 
          placeholderTextColor='#BFC0C0'
          onChangeText={this.onChangeName}
          />
      </View>
    </View>
    );
  }

  lastContactedDatePicker = () => {
    const isIOS = Platform.OS === 'ios';
    const { changeDate } = this.state;
    return (
      <View>
        { changeDate && isIOS && (
          <DatePickerIOS
            date={this.state.lastContacted.toDate()}
            mode='date'
            onDateChange={this.setLastContacted}
          />
        )}
      </View>
    )
  }

  lastContactedInput = () => {
    return (
      <View>
          <View style={styles.promptAndInput}>
            <Text style={styles.promptText}>Last contacted on</Text>
            <TouchableOpacity style={styles.actionableDate} onPress={this.onChangeDate}>
              <Text style={styles.promptText}>{this.state.lastContacted.format("MMMM Do, YYYY")} </Text>
            </TouchableOpacity>
          </View>
          <this.lastContactedDatePicker/>
          { this.state.changeDate &&
            <Button 
              title='Confirm Date' 
              type='clear'
              titleStyle={styles.confirmDateButton}
              onPress={this.onConfirmDate}
            />
          }
        </View>
    );
  }

  contactFrequencyUnitsPicker = () => {
    const {Item} = Picker
    return (
      <Picker
        selectedValue={this.state.contactFrequencyUnits}
        onValueChange={this.onChangeContactFrequencyUnits}
        style={styles.contactFrequencyUnitsPicker}
        itemStyle={styles.frequencyUnitPickerItem}
      >
        <Item label='days' value='days'/>
        <Item label='weeks' value='weeks'/>
        <Item label='months' value='months'/>
        <Item label='years' value='years'/>
      </Picker>
    );
  }

  contactFrequencyInput = () => {
    return (
      <View style={styles.promptAndInput}>
          <Text style={styles.promptText}>Get in touch every </Text>
          <View style={styles.promptTextOutline}>
            <TextInput 
              style={styles.textInput} 
              placeholder='1'
              placeholderTextColor='#BFC0C0'
              onChangeText={this.onChangeContactFrequency}
            />
          </View>
          <this.contactFrequencyUnitsPicker/>
        </View>
    );
  }

  phoneNumberInput = () => {
    return (
      <View style={styles.promptAndInput}>
      <Text style={styles.promptText}>By texting </Text>
      <View style={styles.promptTextOutline}>
        <TextInput 
          style={styles.textInput} 
          placeholder='(123) 456-7890' 
          placeholderTextColor='#BFC0C0'
          onChangeText={this.onChangePhoneNumber}
          />
      </View>
    </View>
    );
  }

  //TODO: Add Contact methods. Right now the method selector cannot update list so think of creative ways to address this!
  keepUpInfoForm = () => {
    return (
      <View style={styles.form}>
       
        <this.nameInput/>
        <this.lastContactedInput/>
        <this.contactFrequencyInput/>
        <this.phoneNumberInput/>
        
      </View>
    );
  }

  render() {
    // add back in <this.searchForContact/> once contact methods are ironed out :)
    return (
      <View style={appStyles.container}>
          <this.searchForContact/>
          <this.keepUpInfoForm/>
          <View style={styles.submitContactButtonWrapper}>
            <Button
              onPress={this.onAddContact}
              buttonStyle={styles.submitContactButton}
              title='Keep Up!'
            />
          </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addContact,
  }, dispatch)
);

export default connect(null, mapDispatchToProps)(AddContactScreen);