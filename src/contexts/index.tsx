import { ReactNode } from 'react'

import { AuthContextProvider } from './auth'

export function AppProvider({ children }: { children: ReactNode }) {
  return <AuthContextProvider>{children}</AuthContextProvider>
}
