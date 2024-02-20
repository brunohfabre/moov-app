import { StatusBar } from 'expo-status-bar'

import { colors } from '@/styles/colors'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'

import { AppProvider } from './src/contexts'
import { Routes } from './src/routes'

export default function App() {
  return (
    <>
      <NavigationContainer
        theme={{
          ...DefaultTheme,
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
    </>
  )
}
