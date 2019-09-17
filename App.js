import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ContactList from './assets/components/ContactList';
import testData from './assets/testData';

export default function App() {
  return (
    <View style={styles.container}>
     <Text style={styles.title}>KeepUp</Text>
      <ContactList contacts={testData}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 40,
  },
  title: {
    fontSize: 36,
  },
});
