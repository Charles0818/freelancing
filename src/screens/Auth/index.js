import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ConfirmEmail from './confirmEmail';
import Login from './Login';
import SignUp from './SignUp';
const AuthStack = createStackNavigator();

const AuthScreens = () => {
    return (
        <AuthStack.Navigator initialRouteName="Login">
            <AuthStack.Screen name="Login" component={Login}/>
            <AuthStack.Screen name="SignUp" component={SignUp}/>
            <AuthStack.Screen name="ConfirmEmail" component={ConfirmEmail}/>
        </AuthStack.Navigator>
    )
}

export default AuthScreens;
