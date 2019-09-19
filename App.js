import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './assets/reducers.js'

import HomeScreen from './assets/screens/HomeScreen.js'
import AddContactScreen from './assets/screens/AddContactScreen'

const store = createStore(reducers);

const MainNavigator = createStackNavigator(
  {
    Home: {screen: HomeScreen},
    AddContact: {screen: AddContactScreen},
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(MainNavigator);

export default class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <AppContainer/>
      </Provider>
    );
  }
}