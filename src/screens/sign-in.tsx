import { useState } from 'react'
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native'

import * as Crypto from 'expo-crypto'
import * as FileSystem from 'expo-file-system'

import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { Loading } from '@/components/loading'
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
  const [isLoading, setIsLoading] = useState(false)

  function handleGoBack() {
    navigation.goBack()
  }

  const downloadResumable = FileSystem.createDownloadResumable(
    urlInput,
    FileSystem.documentDirectory + 'list.m3u',
  )

  async function handleSignIn() {
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

    try {
      setIsLoading(true)

      Keyboard.dismiss()

      const { exists } = await FileSystem.getInfoAsync(
        FileSystem.documentDirectory + 'list.m3u',
      )

      if (!exists) {
        await downloadResumable.downloadAsync()
      }

      const content = await FileSystem.readAsStringAsync(
        FileSystem.documentDirectory + 'list.m3u',
      )

      const data = content
        .slice(content.indexOf('#EXTINF:-1'))
        .split('#EXTINF:-1')
        .map((item) => item.trim())
        .filter(Boolean)
        .map((item) => item.split('\n'))
        .map(([inlineInfo, fileUrl]) => {
          const infoArray = inlineInfo.split('"').map((item) => item.trim())

          const name = infoArray[1]
          // const slug = slugify(name, {
          //   lower: true,
          // })
          const isSerie = /S\d*E\d*/g.test(infoArray[1])
          const image = infoArray[3]
          const category =
            infoArray[5]
              .split('|')
              .map((tag) => tag.trim())[0]
              .toLowerCase()
              .replace(/:/g, '')
              .replace(/\s/g, '-')
              .replace(/./g, '-') ?? ''

          return {
            id: Crypto.randomUUID(),
            name,
            // slug,
            image,
            category,
            fileUrl,
            isSerie,
          }
        })

      await FileSystem.deleteAsync(FileSystem.documentDirectory + 'list.m3u')

      await FileSystem.writeAsStringAsync(
        FileSystem.documentDirectory + 'items.json',
        JSON.stringify(data),
      )

      signIn()
    } catch (err) {
      Alert.alert('Error', JSON.stringify(err))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {isLoading && <Loading />}

      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
          <SafeAreaView
            style={{
              flex: 1,
            }}
          >
            <View style={{ flex: 1, padding: 24, gap: 48 }}>
              <TouchableOpacity hitSlop={24} onPress={handleGoBack}>
                <Feather
                  name="chevron-left"
                  size={20}
                  color={colors.gray[50]}
                />
              </TouchableOpacity>

              <View style={{ gap: 8 }}>
                <Input
                  placeholder="URL"
                  autoCapitalize="none"
                  autoCorrect={false}
                  isErrored={!!error}
                  onChangeText={setUrlInput}
                  returnKeyType="done"
                  onSubmitEditing={handleSignIn}
                  keyboardAppearance="dark"
                  leftIcon={
                    <Feather name="link-2" size={18} color={colors.gray[500]} />
                  }
                  keyboardType="url"
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
    </>
  )
}
