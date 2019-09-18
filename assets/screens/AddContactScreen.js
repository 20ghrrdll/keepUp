import React, { Component } from 'react';
import { 
  Button, 
  Text, 
  View, 
  DatePickerIOS,
  DatePickerAndroid, 
  Picker, 
  Platform,
  TextInput,
  FlatList,
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import moment from "moment";
import update from 'immutability-helper';

import appStyles from '../appStyles.js'


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
    contactMethods: [{contactInfo: "", contactMedium: 'just-call'}]

  };

  addContact = () => this.props.navigation.navigate('Home');

  updateContactSearch = contactSearch => {
    this.setState({contactSearch});
  }

  setLastContacted = lastContacted => {
    lastContacted = moment(lastContacted)
    this.setState({lastContacted});
  }
  
  onChangeDate = async () => {
    const { changeDate } = this.state;
    this.setState({changeDate: !changeDate});
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

  onChangeContactFrequencyUnits = (itemValue, itemIndex) =>
  this.setState({contactFrequencyUnits: itemValue})

  searchForContact = () => {
    return (
      <View>
        <Text>Is this person already in your contacts?</Text>
        <SearchBar
          placeholder="Search for them here!"
          onChangeText={this.updateContactSearch}
          value={this.state.contactSearch}
          lightTheme={true}
        />
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

  contactFrequencyUnitsPicker = () => {
    const {Item} = Picker
    return (
      <Picker
        selectedValue={this.state.contactFrequencyUnits}
        onValueChange={this.onChangeContactFrequencyUnits}
      >
        <Item label='days' value='days'/>
        <Item label='weeks' value='weeks'/>
        <Item label='months' value='months'/>
        <Item label='years' value='years'/>
      </Picker>
    );
  }

  keepUpInfoForm = () => {
    return (
      <View>
        <Text>Stay in touch with...</Text>
        <TextInput placeholder='name'/>
        <Text>Last contacted on {this.state.lastContacted.format("MMMM Do, YYYY")} </Text>
        <this.lastContactedDatePicker/>
        <Button title={this.state.changeDate ? 'Confirm Date' : 'Change Date'} onPress={this.onChangeDate}/>
        <Text>Get in touch every </Text>
        <TextInput placeholder='1'/>
        <this.contactFrequencyUnitsPicker/>
        <this.contactMethodList/>
      </View>
    );
  }

  contactMediumPicker = (contactMedium, contactMethodIndex) => { 
    const {Item} = Picker
    return (
      <Picker
        selectedValue={this.state.contactMethods[contactMethodIndex].contactMedium}
        onValueChange={(mediumValue, mediumIndex) => {
          console.log(mediumValue)
          console.log(this.state.contactMethods[contactMethodIndex].contactMedium)
          /*const currentContactMethods = this.state.contactMethods;
          currentContactMethods[contactMethodIndex].contactMedium = mediumValue
          console.log(currentContactMethods)*/
          this.setState({
            contactMethods: update(this.state.contactMethods, { contactMethodIndex: { contactMedium: { $set: mediumValue } } })
          })
        }}
      >
        <Item label='just text' value='just-text'/>
        <Item label='just call' value='just-call'/>
        <Item label='text or call' value='text-or-call'/>
        <Item label='email' value='email'/>
      </Picker>

    );
  }


  
  contactMethod = ({item: { contactInfo, contactMedium }, index: contactMethodIndex }) => {
    return (
      <View>
        <TextInput value={contactInfo ? contactInfo : "contact info"} onChange={info => {
          const currentContactMethods = this.state.contactMethods;
          currentContactMethods[contactMethodIndex].contactInfo = info
          this.setState({contactMethods: currentContactMethods})
        }}/>
        {this.contactMediumPicker(contactMedium, contactMethodIndex)}
      </View>
    );
  }

  contactMethodList = () => {
    const { contactMethods } = this.state;
    return (
      <View>
        <Text>Reach out by...</Text>
        <FlatList
          data={contactMethods}
          renderItem={this.contactMethod}
          keyExtractor={(item, index) => item.contactInfo + String(index)}
        />
      </View>
    );
  }

  render() {
    return (
      <View style={appStyles.container}>
        <this.searchForContact/>
        <this.keepUpInfoForm/>
        <Button
          onPress={this.addContact}
          title='Keep Up!'
        />
      </View>
    );
  }
}

export default AddContactScreen;