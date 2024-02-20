import { RootStackParamList } from '@/@types/react-navigation'
import { Onboarding } from '@/screens/onboarding'
import { SignIn } from '@/screens/sign-in'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator<RootStackParamList>()

export function AuthRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="onboarding" component={Onboarding} />
      <Stack.Screen name="sign-in" component={SignIn} />
    </Stack.Navigator>
  )
}
