import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { RootStackParamList } from '../@types/react-navigation'
import { SignIn } from '../screens/sign-in'

const Stack = createNativeStackNavigator<RootStackParamList>()

export function AuthRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="sign-in" component={SignIn} />
    </Stack.Navigator>
  )
}
