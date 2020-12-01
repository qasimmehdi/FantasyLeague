import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import HomeScreen from './home';
import Leaderboard from './leaderboard';
import Leagues from './leagues';
import Logout from './logout';

const Tab = createBottomTabNavigator();

export default function HomeTabNav() {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      tabBarOptions={{
        activeTintColor: '#000',
        labelStyle: {
          fontSize: 12,
          marginBottom: 10,
        },
        style: {
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen name="Fantasy" component={HomeScreen} />
      <Tab.Screen name="Leagues" component={Leagues} />
      <Tab.Screen name="Leaderboard" component={Leaderboard} />
      <Tab.Screen name="Logout" component={Logout} />
    </Tab.Navigator>
  );
}
