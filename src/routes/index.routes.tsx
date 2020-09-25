import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Chat from '../pages/Chat';
import ChatDetails from '../pages/ChatDetails';

function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="ChatDetails" component={ChatDetails} />
    </Stack.Navigator>
  );
}

export default Routes;
