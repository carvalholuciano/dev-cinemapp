import React from 'react';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {colors} from '../styles';

const MainNavigator = createMaterialBottomTabNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Buscar',
        tabBarIcon: (props) => (
          <Icon
            name="search"
            color={props.focused ? colors.activeColor : colors.inactiveColor}
            size={props.focused ? 24 : 28}
          />
        ),
        activeColor: colors.activeColor,
        inactiveColor: colors.inactiveColor,
        tabBarColor: colors.tabColorSearch,
      },
    },
    FavoritesScreen: {
      screen: FavoritesScreen,
      navigationOptions: {
        tabBarLabel: 'Favoritos',
        tabBarIcon: (props) => (
          <Icon
            name="star"
            color={props.focused ? colors.activeColor : colors.inactiveColor}
            size={props.focused ? 24 : 28}
          />
        ),
        activeColor: colors.activeColor,
        inactiveColor: colors.inactiveColor,
        tabBarColor: colors.tabColorFavorites,
      },
    },
  },
  {
    initialRouteName: 'HomeScreen',
    backBehavior: 'order',
    keyboardHidesNavigationBar: false,
    shifting: true,
  },
);

export default MainNavigator;
