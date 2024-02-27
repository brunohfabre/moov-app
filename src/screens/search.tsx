import { useState } from 'react'
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import * as FileSystem from 'expo-file-system'

import { Header } from '@/components/header'
import { Input } from '@/components/input'
import { Loading } from '@/components/loading'
import { colors } from '@/styles/colors'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

type ItemType = {
  id: string
  name: string
  slug: string
  image: string
  category: string
  fileUrl: string
  isSerie: boolean
}

export function Search() {
  const navigation = useNavigation()

  const { bottom } = useSafeAreaInsets()

  const [isLoading, setIsLoading] = useState(false)
  const [searchText, setSearchText] = useState('')
  const [data, setData] = useState<ItemType[]>([])

  async function handleSearch() {
    try {
      setIsLoading(true)

      const content = await FileSystem.readAsStringAsync(
        `${FileSystem.documentDirectory}/items.json`,
      )

      const filteredData = JSON.parse(content).filter((item: ItemType) =>
        item.name.toLowerCase().includes(searchText.toLowerCase()),
      )

      setData(filteredData)
    } catch (err) {
      Alert.alert('Error', JSON.stringify(err))
    } finally {
      setIsLoading(false)
    }
  }

  function handleNavigateToMovie(item: ItemType) {
    navigation.navigate('movie', {
      item,
    })
  }

  return (
    <>
      {isLoading && <Loading />}

      <View style={{ flex: 1 }}>
        <Header />

        <Input
          style={{ marginHorizontal: 24 }}
          placeholder="Search anything..."
          leftIcon={
            <Feather name="search" size={18} color={colors.gray[500]} />
          }
          onChangeText={setSearchText}
          returnKeyType="search"
          onSubmitEditing={handleSearch}
          keyboardAppearance="dark"
        />

        {data.length ? (
          <FlatList
            style={{ flex: 1, marginTop: 24 }}
            data={data}
            contentContainerStyle={{
              gap: 8,
              paddingHorizontal: 24,
              paddingBottom: 24 + bottom,
            }}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.6}
                style={{
                  backgroundColor: colors.gray[800],
                  borderRadius: 12,
                  padding: 12,
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 16,
                }}
                onPress={() => handleNavigateToMovie(item)}
              >
                <Image
                  source={{ uri: item.image }}
                  style={{
                    width: 48,
                    aspectRatio: 3 / 4,
                    backgroundColor: colors.gray[700],
                    borderRadius: 6,
                  }}
                />

                <Text style={{ color: colors.gray[50], flex: 1 }}>
                  {item.name}
                </Text>

                <Feather
                  name="chevron-right"
                  size={20}
                  color={colors.gray[500]}
                />
              </TouchableOpacity>
            )}
          />
        ) : (
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
          >
            <Text style={{ color: colors.gray[500] }}>Search is empty</Text>
          </View>
        )}
      </View>
    </>
  )
}
