import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DynamicTabNavigator from '../navigator/DynamicTabNavigator';
import NavigationUtil from '../navigator/Navigationutil';
export default class Index extends Component {
  render() {
    NavigationUtil.navigation = this.props.navigation;
    return <DynamicTabNavigator />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
