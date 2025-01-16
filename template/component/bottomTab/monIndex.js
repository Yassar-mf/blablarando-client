import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import SettingsScreen from './templates/monSettingScreen'
import HistoryScreen from './templates/monSettingScreen2'
import UsersScreen from './templates/monSettingScreen3'

const BottomTab = createBottomTabNavigator()

const leBottomTab = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen  name="Reglages" component={SettingsScreen} options={{ headerShown: false }}/>
      <BottomTab.Screen  name="Historiques" component={HistoryScreen} options={{ headerShown: false }}/>
      <BottomTab.Screen  name="Utilisateurs" component={UsersScreen} options={{ headerShown: false }}/>

    </BottomTab.Navigator>
  )
}

export default leBottomTab