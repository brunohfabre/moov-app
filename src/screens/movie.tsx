import { SafeAreaView, Text, View } from 'react-native'

import { Button } from '@/components/button'
import { Header } from '@/components/header'
import { colors } from '@/styles/colors'
import { fontSizes } from '@/styles/font-sizes'
import { useNavigation, useRoute } from '@react-navigation/native'

type ItemType = {
  id: string
  name: string
  slug: string
  image: string
  category: string
  fileUrl: string
  isSerie: boolean
}

export default function Movie() {
  const { params } = useRoute()
  const navigation = useNavigation()

  const { item } = params as { item: ItemType }

  function handleWatchNow() {
    navigation.navigate('player', {
      url: item.fileUrl,
    })
  }

  return (
    <View style={{ flex: 1 }}>
      <Header />

      <View style={{ flex: 1, padding: 24 }}>
        <Text
          style={[{ color: colors.gray[50], fontWeight: '600' }, fontSizes.xl]}
        >
          {item.name}
        </Text>
      </View>

      <SafeAreaView>
        <View style={{ padding: 24 }}>
          <Button onPress={handleWatchNow}>Watch now</Button>
        </View>
      </SafeAreaView>
    </View>
  )
}
