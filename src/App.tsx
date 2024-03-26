import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import{
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Router from './router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
  );
};


export default App;
