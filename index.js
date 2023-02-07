/**
 * @format
 */
// window.__REDUX_DEVTOOLS_EXTENSION__;
// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
// window.__REDUX_DEVTOOLS_EXTENSION__.connect;

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AsyncStorageDemoPage from './js/AsyncStorageDemoPage';
import FetchDemoPage from './js/FetchDemoPage';
import LoginPage from './js/page/LoginPage';
import PopularPage from './js/page/popular/PopularPage';
import AppNavigator from './js/navigator/AppNavigator';

AppRegistry.registerComponent(appName, () => App);
