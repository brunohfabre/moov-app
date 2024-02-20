import { SafeAreaView, Text, View } from 'react-native'

import { Button } from '@/components/button'
import { colors } from '@/styles/colors'
import { fontSizes } from '@/styles/font-sizes'
import { useNavigation } from '@react-navigation/native'

export function Onboarding() {
  const navigation = useNavigation()

  function handleNavigateToSignIn() {
    navigation.navigate('sign-in')
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{ flex: 1, padding: 24, justifyContent: 'flex-end', gap: 128 }}
      >
        <View style={{ gap: 12 }}>
          <Text
            style={[
              { fontWeight: '600', color: colors.gray[50] },
              fontSizes['4xl'],
            ]}
          >
            Moov
          </Text>
          <Text style={[{ color: colors.gray[300] }, fontSizes.md]}>
            Smart list player
          </Text>
        </View>

        <Button onPress={handleNavigateToSignIn}>Get started</Button>
      </View>
    </SafeAreaView>
  )
}
