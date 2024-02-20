import {
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  TouchableWithoutFeedback,
  View,
} from 'react-native'

import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { useAuth } from '@/contexts/auth'

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
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <SafeAreaView
          style={{
            flex: 1,
          }}
        >
          <View
            style={{ flex: 1, padding: 24, justifyContent: 'space-between' }}
          >
            <Input
              placeholder="URL"
              autoCapitalize="none"
              autoCorrect={false}
            />

            <Button onPress={handleSignIn}>Import</Button>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}
