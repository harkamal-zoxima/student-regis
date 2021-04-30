import Login from './App/Login'
import Signup from './App/Signup'
import Register from './App/Register'
import Success from './App/Success'
import {createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'


const appNavigator = createStackNavigator({
   Home:Signup,
   Login:Login,
   Register:Register,
   Success:Success
 })

export default createAppContainer(appNavigator)


