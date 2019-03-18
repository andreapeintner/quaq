import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './src/screens/Home'
import Chat from './src/screens/Chat'
import Loginscreen from './src/screens/Loginscreen'
import AuthLoadingScreen from './src/screens/AuthLoadingScreen'


const AppStack = createStackNavigator({ Home });
const AuthStack = createStackNavigator({ Loginscreen, Chat });

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));