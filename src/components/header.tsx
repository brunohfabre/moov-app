import { SafeAreaView, TouchableOpacity, View } from 'react-native'

import { colors } from '@/styles/colors'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

export function Header() {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <SafeAreaView>
      <View style={{ padding: 24 }}>
        <TouchableOpacity hitSlop={24} onPress={handleGoBack}>
          <Feather name="chevron-left" size={20} color={colors.gray[50]} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
