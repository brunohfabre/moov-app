import { useState } from 'react'
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
} from 'react-native'

import { colors } from '@/styles/colors'

interface InputProps extends TextInputProps {
  isErrored?: boolean
}

export function Input({ isErrored, style, ...props }: InputProps) {
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
    <TextInput
      style={[
        {
          color: colors.gray[50],
          height: 56,
          borderRadius: 12,
          backgroundColor: colors.gray[800],
          borderWidth: 1,
          borderColor: colors.gray[800],
          paddingHorizontal: 16,
          fontSize: 16,
        },
        isFocused && {
          borderColor: colors.amber[500],
        },
        isErrored && {
          borderColor: colors.red[500],
        },
        style,
      ]}
      onBlur={handleBlur}
      onFocus={handleFocus}
      placeholderTextColor={colors.gray[500]}
      {...props}
    />
  )
}
