import { SafeAreaView } from 'react-native'

import { colors } from '@/styles/colors'
import { Foundation } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import { BottomTabButton } from './bottom-tab-button'

export function BottomTab() {
  const navigation = useNavigation()

  return (
    <SafeAreaView
      style={{ backgroundColor: colors.gray[800], flexDirection: 'row' }}
    >
      <BottomTabButton disabled>
        <Foundation name="home" color={colors.gray[50]} size={20} />
      </BottomTabButton>

      <BottomTabButton onPress={() => navigation.navigate('search')}>
        <Foundation
          name="magnifying-glass"
          color={colors.gray[500]}
          size={20}
        />
      </BottomTabButton>

      <BottomTabButton onPress={() => navigation.navigate('profile')}>
        <Foundation name="torso" color={colors.gray[500]} size={20} />
      </BottomTabButton>
    </SafeAreaView>
  )
}
