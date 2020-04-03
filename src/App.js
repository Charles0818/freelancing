import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { Home, Account, Notifications, Activity } from './screens/index';
import { Navigations } from './components/index';
import { Contexts } from './helpers/index';
import styles from './styles/main.style';
library.add(fab, fas);
const { Profile: { ProfileProvider } } = Contexts;
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} options={{title: 'Grab'}} />
    </HomeStack.Navigator>
  )
}
export default function App() {
  return (
    <ProfileProvider>
      <NavigationContainer>
          <Tab.Navigator
            tabBar={props => <Navigations.BottomTab {...props} />}
            tabBarOptions={{
              activeTintColor: styles.color1,
              style: { ...styles.flexCenter }
            }} >
            <Tab.Screen
              name="Home"
              component={HomeStackScreen}
              options={{
                tabBarLabel: 'Home',
                icon: "home"
              }}
            />
            <Tab.Screen
              name="Activity"
              component={Activity}
              options={{
                tabBarLabel: 'Activity',
                icon: "calendar"
              }}
            />
            <Tab.Screen
              name="Notifications"
              component={Notifications}
              options={{
                tabBarLabel: 'Updates',
                icon: "bell"
              }}
            />
            <Tab.Screen
              name="Account"
              component={Account}
              options={{
                tabBarLabel: 'Account',
                icon: "user"
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </ProfileProvider>
  );
}