import { StackNavigator } from 'react-navigation';

import Home from '../app/Home';
import ScrollView from '../app/ScrollView';

const routes = {
  Home: { screen: Home },
  ScrollView: { screen: ScrollView }
};

const Router = StackNavigator(routes, {
  headerMode: 'none'
});

export {routes};
export default Router;