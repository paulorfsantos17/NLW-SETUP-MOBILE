import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Navigator, Screen } = createNativeStackNavigator()

import { Home } from '../screens/Home'
import { Habits } from '../screens/Habits'
import { NewHabit } from '../screens/NewHabit'

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={
        {
          headerShown: false
        }
      }>
      <Screen
        name="home"
        component={Home}
      />
      <Screen
        name="new"
        component={NewHabit}
      />
      <Screen
        name="habit"
        component={Habits}
      />
    </Navigator>
  )
}