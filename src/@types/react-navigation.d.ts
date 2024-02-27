type ItemType = {
  id: string
  name: string
  slug: string
  image: string
  category: string
  fileUrl: string
  isSerie: boolean
}

export type RootStackParamList = {
  onboarding: undefined
  'sign-in': undefined
  home: undefined
  search: undefined
  profile: undefined
  movie: {
    item: ItemType
  }
  player: {
    url: string
  }
}

declare global {
  export namespace ReactNavigation {
    export interface RootParamList extends RootStackParamList {}
  }
}
