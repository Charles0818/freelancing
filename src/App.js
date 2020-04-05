import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { Home, Account, Notifications, Activity, PaymentHistory } from './screens/index';
import { Navigations } from './components/index';
import { Contexts } from './helpers/index';
import styles from './styles/main.style';
library.add(fab, fas, far);
const { Profile: { ProfileProvider } } = Contexts;
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} options={{title: 'Titiko'}} />
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
              activeTintColor: "#ff680a",
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
              name="PaymentHistory"
              component={PaymentHistory}
              options={{
                tabBarLabel: 'Payment',
                icon: "credit-card"
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
                icon: "bell",
                badgeCount: 3,
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