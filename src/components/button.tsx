import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

import { colors } from '@/styles/colors'
import { fontSizes } from '@/styles/font-sizes'

interface ButtonProps extends TouchableOpacityProps {
  variant?: 'primary' | 'destructive'
}

export function Button({
  children,
  variant = 'primary',
  style,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[
        {
          height: 56,
          backgroundColor: colors.amber[400],
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 12,
          paddingHorizontal: 24,
        },
        variant === 'destructive' && {
          backgroundColor: colors.red[500],
        },
        style,
      ]}
      activeOpacity={0.6}
      {...props}
    >
      <Text
        style={[
          {
            fontWeight: '600',
            color: colors.gray[950],
          },
          variant === 'destructive' && {
            color: colors.gray[50],
          },
          fontSizes.sm,
        ]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  )
}
