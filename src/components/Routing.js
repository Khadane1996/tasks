import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, UpdateScreen } from '../screens';

const Stack = createNativeStackNavigator();

export default function Routing() {

  return (
      <NavigationContainer> 
        <Stack.Navigator 
          initialRouteName={'Home'} 
          screenOptions={{
          headerShown: false,
          }}
        >
          <>     
            <Stack.Screen name="Home" component={HomeScreen}  />
            <Stack.Screen name="Update" component={UpdateScreen}  />
          </>
        </Stack.Navigator>
      </NavigationContainer>
  ); 
}



