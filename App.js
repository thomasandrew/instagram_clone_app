import React from 'react'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import { Icon } from 'react-native-elements'
import Home from './screens/Home'
import Gallery from './screens/Gallery'
import List from './screens/List'
import Contact from './screens/Contact'

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: " ",
        tabBarIcon: () => (
          <Icon name="home" size={20} />
        )
      },
    },
    Gallery: {
      screen: Gallery,
      navigationOptions: {
        tabBarLabel: " ",
        tabBarIcon: () => (
          <Icon name="search" size={20} />
        )
      },
    },
    Middle: {
      screen: Gallery,
      navigationOptions: {
        tabBarLabel: " ",
        tabBarIcon: () => (
          <Icon type="font-awesome" name="plus-square-o" size={20} />
        )
      },
    },
    List: {
      screen: List,
      navigationOptions: {
        tabBarLabel: " ",
        tabBarIcon: () => (
          <Icon type='evilicon' name="heart" size={25} />
        )
      },
    },
    Contact: {
      screen: Contact,
      navigationOptions: {
        tabBarLabel: " ",
        tabBarIcon: () => (
          <Icon type="font-awesome" name="user-o" size={17} />
        )
      },
    }
  },
);

export default createAppContainer(TabNavigator);
