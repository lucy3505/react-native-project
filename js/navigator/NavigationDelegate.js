import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {StyleSheet} from 'react-native';
const Tab = createMaterialTopTabNavigator();

function _genTabs({Component, keys, theme, extra = ({} = {})}) {
  const tabs = {};
  keys.forEach((item, index) => {
    if (item.checked) {
      tabs[`tab${index}`] = {
        screen: props => (
          <Component {...props} {...extra} tabLabel={item.name} theme={theme} />
        ),
        navigationOptions: {
          title: item.name,
        },
      };
    }
  });
}
