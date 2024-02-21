import { useState } from 'react'
import {
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native'

import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { useAuth } from '@/contexts/auth'
import { colors } from '@/styles/colors'
import { fontSizes } from '@/styles/font-sizes'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

export function SignIn() {
  const navigation = useNavigation()

  const { signIn } = useAuth()

  const [urlInput, setUrlInput] = useState('')
  const [error, setError] = useState('')

  function handleGoBack() {
    navigation.goBack()
  }

  function handleSignIn() {
    if (!urlInput) {
      setError('URL cannot be empty.')
      return
    }

    if (
      !urlInput.match(
        /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g,
      )
    ) {
      setError('Invalid URL format.')

      return
    }

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
          <View style={{ flex: 1, padding: 24, gap: 48 }}>
            <TouchableOpacity hitSlop={24} onPress={handleGoBack}>
              <Feather name="chevron-left" size={20} color={colors.gray[50]} />
            </TouchableOpacity>

            <View style={{ gap: 8 }}>
              <Input
                placeholder="URL"
                autoCapitalize="none"
                autoCorrect={false}
                isErrored={!!error}
                onChangeText={setUrlInput}
              />

              {error && (
                <Text
                  style={[
                    { color: colors.red[500], paddingHorizontal: 16 },
                    fontSizes.sm,
                  ]}
                >
                  {error}
                </Text>
              )}
            </View>

            <Button onPress={handleSignIn} style={{ marginTop: 'auto' }}>
              Import
            </Button>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}
