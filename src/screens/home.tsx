import { SafeAreaView, Text, View } from 'react-native'

import { BottomTab } from '@/components/bottom-tab'
import { useAuth } from '@/contexts/auth'
import { colors } from '@/styles/colors'
import { fontSizes } from '@/styles/font-sizes'

export function Home() {
  const { session } = useAuth()

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <SafeAreaView>
        <View style={{ padding: 24 }}>
          <Text
            style={[
              { color: colors.gray[50], fontWeight: '600' },
              fontSizes['2xl'],
            ]}
          >
            Moov
          </Text>
        </View>
      </SafeAreaView>

      <View
        style={{
          flex: 1,
          gap: 32,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text style={{ color: colors.gray[50] }}>Home page</Text>
        <Text style={{ color: colors.gray[50] }}>{session?.url}</Text>
      </View>

      <BottomTab />
    </View>
  )
}
