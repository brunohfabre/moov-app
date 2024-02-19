import { NavigationContainer, DefaultTheme } from '@react-navigation/native'

import { AppProvider } from './src/contexts'
import { Routes } from './src/routes'

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer
        theme={{
          ...DefaultTheme,
          colors: {
            ...DefaultTheme.colors,
            background: 'transparent',
          },
        }}
      >
        <Routes />
      </NavigationContainer>
    </AppProvider>
  )
}
