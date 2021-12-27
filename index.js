/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Notification from './src/Notification/Notification';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Notification);
