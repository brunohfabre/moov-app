import { Text, TextInput, View } from 'react-native'

import { StatusBar } from 'expo-status-bar'

import { colors } from '@/styles/colors'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'

import { AppProvider } from './src/contexts'
import { Routes } from './src/routes'

const textComponent = Text as any

textComponent.defaultProps = {
  ...(textComponent.defaultProps || {}),
  allowFontScaling: false,
}

const textInputComponent = TextInput as any

textInputComponent.defaultProps = {
  ...(textInputComponent.defaultProps || {}),
  allowFontScaling: false,
}

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.gray[900] }}>
      <NavigationContainer
        theme={{
          ...DefaultTheme,
          dark: true,
          colors: {
            ...DefaultTheme.colors,
            background: colors.gray[900],
          },
        }}
      >
        <AppProvider>
          <Routes />
        </AppProvider>
      </NavigationContainer>

      <StatusBar style="light" />
    </View>
  )
}
