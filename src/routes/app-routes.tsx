import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { RootStackParamList } from '../@types/react-navigation'
import { Home } from '../screens/home'

const Stack = createNativeStackNavigator<RootStackParamList>()

export function AppRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
  )
}
