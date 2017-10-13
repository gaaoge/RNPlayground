import { StackNavigator } from 'react-navigation';

import Home from '../app/Home';
import ScrollView from '../app/ScrollView';
import Networking from '../app/Networking';

const routes = {
  Home: { screen: Home },
  ScrollView: { screen: ScrollView },
  Networking: { screen: Networking },
};

const Router = StackNavigator(routes, {
  headerMode: 'none'
});

export {routes};
export default Router;