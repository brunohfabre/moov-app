import { ReactNode, useState } from 'react'
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
  View,
} from 'react-native'

import { colors } from '@/styles/colors'

interface InputProps extends TextInputProps {
  isErrored?: boolean
  leftIcon?: ReactNode
}

export function Input({ isErrored, leftIcon, style, ...props }: InputProps) {
  const [isFocused, setIsFocused] = useState(false)

  function handleBlur(event: NativeSyntheticEvent<TextInputFocusEventData>) {
    if (props.onBlur) {
      props.onBlur(event)
    }

    setIsFocused(false)
  }

  function handleFocus(event: NativeSyntheticEvent<TextInputFocusEventData>) {
    if (props.onFocus) {
      props.onFocus(event)
    }

    setIsFocused(true)
  }

  return (
    <View
      style={[
        {
          height: 56,
          borderRadius: 12,
          backgroundColor: colors.gray[800],
          borderWidth: 2,
          borderColor: colors.gray[800],
          fontSize: 16,
          flexDirection: 'row',
        },
        isFocused && {
          borderColor: colors.gray[700],
        },
        isErrored && {
          borderColor: colors.red[500],
        },
        style,
      ]}
    >
      {leftIcon && (
        <View style={{ paddingLeft: 12, justifyContent: 'center' }}>
          {leftIcon}
        </View>
      )}

      <TextInput
        style={{
          flex: 1,
          paddingLeft: 12,
          paddingRight: 16,
          color: colors.gray[50],
        }}
        onBlur={handleBlur}
        onFocus={handleFocus}
        placeholderTextColor={colors.gray[500]}
        {...props}
      />
    </View>
  )
}
