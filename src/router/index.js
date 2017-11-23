import { StackNavigator } from 'react-navigation'

import Home from '../app/Home'
import ScrollView from '../app/ScrollView'
import Networking from '../app/Networking'
import StatusBar from '../app/StatusBar'
import AppState from '../app/AppState'

const routes = {
  Home: {screen: Home},
  ScrollView: {screen: ScrollView},
  Networking: {screen: Networking},
  StatusBar: {screen: StatusBar},
  AppState: {screen: AppState}
}

const Router = StackNavigator(routes, {
  headerMode: 'none'
})

export { routes }
export default Router