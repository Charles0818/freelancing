import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Settings from './Settings';
import Entry from './Entry';
import Feedback from './Feedback';
const Stack = createStackNavigator();
const Account = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Account" component={Entry} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Feedback" component={Feedback} />
        </Stack.Navigator>
    );
}

export default Account;
