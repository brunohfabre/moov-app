import { Text, View } from 'react-native'

import { Button } from '@/components/button'
import { useAuth } from '@/contexts/auth'

export function Home() {
  const { signOut } = useAuth()

  function handleSignOut() {
    signOut()
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 32,
      }}
    >
      <Text>Home page</Text>

      <Button onPress={handleSignOut} variant="destructive">
        Sign out
      </Button>
    </View>
  )
}
