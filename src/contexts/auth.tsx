import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

import * as FileSystem from 'expo-file-system'
import * as SecureStore from 'expo-secure-store'
import * as SplashScreen from 'expo-splash-screen'

type Session = {
  isSigned: boolean
}

interface AuthContextData {
  isLoading: boolean
  session: Session | null

  signIn: () => void
  signOut: () => void
}

const AuthContext = createContext({} as AuthContextData)

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    async function loadPersistedData() {
      const persistedSessionData = await SecureStore.getItemAsync('session')

      setSession(
        persistedSessionData === null
          ? persistedSessionData
          : JSON.parse(persistedSessionData),
      )
      setIsLoading(false)

      await SplashScreen.hideAsync()
    }

    loadPersistedData()
  }, [])

  async function signIn() {
    const data = {
      isSigned: true,
    }

    await SecureStore.setItemAsync('session', JSON.stringify(data))

    setSession(data)
  }

  async function signOut() {
    await FileSystem.deleteAsync(FileSystem.documentDirectory + 'items.json')

    await SecureStore.deleteItemAsync('session')

    setSession(null)
  }

  return (
    <AuthContext.Provider value={{ isLoading, session, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  return context
}
