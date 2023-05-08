import React from 'react';
import { Platform } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-remix-icon';

import { heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Home from '../components/home/Home';
import Favourites from '../components/favourites/Favourites';
import Recipes from '../components/favourites/Favourites';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

/**
 * Props for TabBarIcon component.
 */
type TabIconProps = {
  focused: boolean;
  color: string;
  size: number;
  route: any;
}

/**
 * Component for rendering the tab screens.
 */
const TabScreens = () => {
  /**
   * Renders the icon for the tab bar.
   * @param {TabIconProps} props - The props for the component.
   * @returns {JSX.Element} The rendered icon component.
   */
  const renderTabBarIcon = ({ focused, color, size, route }: TabIconProps): JSX.Element => {
    let iconName = '';
    if (route.name === 'Home') {
      iconName = 'home-5-fill';
    } else if (route.name === 'Favourites') {
      iconName = 'heart-3-fill';
    } else if (route.name === 'Recipes') {
      iconName = 'file-list-2-fill';
    } else if (route.name === 'Logout') {
      iconName = 'trello';
    }
    return <Icon name={iconName} size={size} color={color} focused={focused} />;
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => renderTabBarIcon({ focused, color, size, route }),
        tabBarActiveTintColor: '#FB9400',
        tabBarInactiveTintColor: '#A7A9B6',
        headerShown: false,
        tabBarStyle: {
          paddingTop: 10,
          paddingBottom: Platform.OS === 'ios' ? 20 : 10,
          height: hp(7),
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favourites" component={Favourites} />
      <Tab.Screen name="Recipes" component={Recipes} />
    </Tab.Navigator>
  );
};

/**
 * The main app component.
 * @returns {JSX.Element} The rendered app component.
 */
const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={TabScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
