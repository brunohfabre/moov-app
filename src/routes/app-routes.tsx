import { RootStackParamList } from '@/@types/react-navigation'
import { Home } from '@/screens/home'
import Movie from '@/screens/movie'
import { Player } from '@/screens/player'
import { Profile } from '@/screens/profile'
import { Search } from '@/screens/search'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator<RootStackParamList>()

export function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="search" component={Search} />
      <Stack.Screen name="profile" component={Profile} />
      <Stack.Screen name="movie" component={Movie} />
      <Stack.Screen name="player" component={Player} />
    </Stack.Navigator>
  )
}
