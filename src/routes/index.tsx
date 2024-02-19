import * as SplashScreen from 'expo-splash-screen'

import { useAuth } from '../contexts/auth'
import { AppRoutes } from './app-routes'
import { AuthRoutes } from './auth-routes'

SplashScreen.preventAutoHideAsync()

export function Routes() {
  const { isLoading, session } = useAuth()

  if (isLoading) {
    return null
  }

  if (!session) {
    return <AuthRoutes />
  }

  return <AppRoutes />
}
