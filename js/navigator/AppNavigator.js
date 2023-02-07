import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from '../page/LoginPage';
import RegistionPage from '../page/RegistionPage';
import HomePage from '../page/HomePage';
import DetailPage from '../page/DetailPage';
import WebViewPage from '../page/WebViewPage';
import CodePushPage from '../page/CodePushPage';
import CustomKeyPage from '../page/CustomKeyPage';
import SearchPage from '../page/SearchPage';
import SortKeyPage from '../page/SortKeyPage';
import AboutPage from '../page/about/AboutPage';
import AboutMePage from '../page/about/AboutMePage';

const Stack = createNativeStackNavigator();
//在这里配置除Tab页以外的页面
export default function AppNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{headerShown: false}}
        /> */}
        {/* <Stack.Screen
          name="RegistionPage"
          component={RegistionPage}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailPage"
          component={DetailPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="WebViewPage"
          component={WebViewPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CodePushPage"
          component={CodePushPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CustomKeyPage"
          component={CustomKeyPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SearchPage"
          component={SearchPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SortKeyPage"
          component={SortKeyPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AboutPage"
          component={AboutPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AboutMePage"
          component={AboutMePage}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
