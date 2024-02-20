export type RootStackParamList = {
  onboarding: undefined
  'sign-in': undefined
  home: undefined
  search: undefined
  profile: undefined
}

declare global {
  export namespace ReactNavigation {
    export interface RootParamList extends RootStackParamList {}
  }
}
