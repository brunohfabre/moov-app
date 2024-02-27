import { ReactNode } from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

interface BottomTabButtonProps extends TouchableOpacityProps {
  children: ReactNode
}

export function BottomTabButton({ children, ...props }: BottomTabButtonProps) {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      activeOpacity={0.6}
      {...props}
    >
      {children}
    </TouchableOpacity>
  )
}
