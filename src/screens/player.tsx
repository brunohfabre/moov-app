import { useRef, useState } from 'react'

import { Video } from 'expo-av'

import { Loading } from '@/components/loading'
import { useNavigation, useRoute } from '@react-navigation/native'

export function Player() {
  const videoRef = useRef<Video>(null)

  const navigation = useNavigation()

  const [isLoading, setIsLoading] = useState(true)

  const { params } = useRoute()

  const { url } = params as { url: string }

  return (
    <>
      {isLoading && <Loading />}

      <Video
        ref={videoRef}
        style={{ flex: 1 }}
        source={{ uri: url }}
        useNativeControls
        onPlaybackStatusUpdate={async (status) => {
          if (isLoading && status.isLoaded) {
            await videoRef.current?._setFullscreen(true)

            videoRef.current?.playAsync()

            setIsLoading(false)
          }
        }}
        onFullscreenUpdate={(event) => {
          if (event.fullscreenUpdate === 2) {
            navigation.goBack()
          }
        }}
      />
    </>
  )
}
