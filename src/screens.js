import { Navigation } from 'react-native-navigation';

import LoginScreen from './components/login';
import ChatScreen from './components/chat';

// register all screens of the app (including internal ones)
export function registerScreens() {
    Navigation.registerComponent('FirebaseMessenger.LoginScreen', () => LoginScreen);
    Navigation.registerComponent('FirebaseMessenger.ChatScreen', () => ChatScreen);
}
