import 'react-native-gesture-handler';
import * as React from 'react';
import { TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { Home, Account, Notifications, Activity, PaymentHistory, Services, Service, AuthScreens } from './screens/index';
import { Navigations } from './components/index';
import { Contexts } from './helpers/index';
import styles from './styles/main.style';
library.add(fab, fas, far);
const { Profile: { ProfileProvider } } = Contexts;
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} options={{title: 'Titiko'}} />
    </HomeStack.Navigator>
  )
}
const HomeTabScreen = () => {
  return (
    <Tab.Navigator initialRouteName="Home"
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
        icon: "home",
        
      }}
    />
    <Tab.Screen /*Protected Screen*/
      name="PaymentHistory"
      component={PaymentHistory}
      options={{
        tabBarLabel: 'Payment',
        icon: "credit-card"
      }}
    />
    <Tab.Screen /*Protected Screen*/
      name="Activity"
      component={Activity}
      options={{
        tabBarLabel: 'Activity',
        icon: "calendar"
      }}
    />
    <Tab.Screen /*Protected Screen*/
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
  )
}
export default function App() {
  return (
    <ProfileProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" headerMode="screen" mode="modal" >
          <Stack.Screen
            name="Services"
            component={Services}
            options={{
             headerTitleAlign: "left",
            }}
          />
          <Stack.Screen name="Service" component={Service} />
          <Stack.Screen
            name="Home"
            component={HomeTabScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="AuthServices" component={AuthScreens} />
          <Stack.Screen name="Categories" component={AuthScreens} />
          <Stack.Screen name="SubCategories" component={AuthScreens} />
        </Stack.Navigator>
      </NavigationContainer>
    </ProfileProvider>
  );
}