import { Text, View } from 'react-native'

import { Button } from '@/components/button'
import { useAuth } from '@/contexts/auth'
import { colors } from '@/styles/colors'

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
      <Text style={{ color: colors.gray[50] }}>Home page</Text>

      <Button onPress={handleSignOut} variant="destructive">
        Sign out
      </Button>
    </View>
  )
}
