import { ActivityIndicator, View } from 'react-native'

export function Loading() {
  return (
    <View
      style={{
        zIndex: 100,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ActivityIndicator color="white" />
    </View>
  )
}
