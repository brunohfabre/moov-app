import { Button, Text, View } from 'react-native'

import { useAuth } from '../contexts/auth'

export function SignIn() {
  const { signIn } = useAuth()

  function handleSignIn() {
    const token = 'asdasdlkjasdlkjalsdkj'

    const user = {
      id: '123123ljlkjlkjlkj123lkj12',
      name: 'John Doe',
      email: 'johndoe@email.com',
    }

    signIn({ token, user })
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
      <Text>Sign in page</Text>

      <Button title="Sign in" onPress={handleSignIn} />
    </View>
  )
}
