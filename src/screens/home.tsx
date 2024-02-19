import { Button, Text, View } from 'react-native'

import { useAuth } from '../contexts/auth'

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

      <Button title="Sign out" onPress={handleSignOut} color="red" />
    </View>
  )
}
