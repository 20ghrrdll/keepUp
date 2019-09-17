import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './assets/screens/HomeScreen.js'
import AddContactScreen from './assets/screens/AddContactScreen.js'

const MainNavigator = createStackNavigator(
  {
    Home: {screen: HomeScreen},
    AddContact: {screen: AddContactScreen},
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(MainNavigator);