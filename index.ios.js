import { Navigation } from 'react-native-navigation';

import { registerScreens } from './src/screens';
registerScreens(); // this is where you register all of your app's screens

console.disableYellowBox = true;

Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Login',
      screen: 'FirebaseMessenger.LoginScreen', // this is a registered name for a screen
      title: 'Login'
    },
    {
      label: 'Chats',
      screen: 'FirebaseMessenger.ChatScreen',
      title: 'Chats'
    }
  ]
});
