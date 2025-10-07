/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View , SafeAreaView} from 'react-native';
import Home from './src/screens/Home'
import Gallery from './src/screens/Gallery';
import MapScreen from './src/screens/MapScreen';
import AttractionDetails from './src/screens/AttractionDetails';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const Stack = createStackNavigator();

  const appTheme = {
    ...DefaultTheme,
    colors:{
      ...DefaultTheme.colors,
      background : "#ffffff"
    },
    
  }

  return (

  
      <NavigationContainer theme={appTheme}>
      <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen component={Home} name="Home"/>
          <Stack.Screen component={AttractionDetails} name="AttractionDetails" />
          <Stack.Screen component={Gallery} name="Gallery" />
          <Stack.Screen component={MapScreen} name="MapScreen" />
      </Stack.Navigator>
        
    </NavigationContainer>
    
  

    
  
      
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
