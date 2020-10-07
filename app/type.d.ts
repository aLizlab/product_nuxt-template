// import Vue from 'vue'
import { Route } from 'vue-router'
import { Store } from 'vuex'
import { MetaInfo } from 'vue-meta'
import { AxiosInstance } from 'axios'
import dayjs from 'dayjs'

interface NuxtContext {
  isClient: boolean
  isServer: boolean
  isStatic: boolean
  isDev: boolean
  isHMR: boolean
  route: Route
  store: Store<any>
  env: object
  query: object
  nuxtState: object
  req: Request
  res: Response
  params: { [key: string]: any }
  redirect: (path: string) => void
  error: (params: { statusCode?: String; message?: String }) => void
  beforeNuxtRender: ({ Conmponents, nuxtState }) => void
  $axios: AxiosInstance // axios-moduleを利用している場合
}

declare module 'vue/types/vue' {
  interface Vue {
    layout?: string
    middleware?: string | String[]
    fetch?: (context: NuxtContext) => void
    scrollToTop?: boolean
    transition?: string | object | Function
    validate?: (context: NuxtContext) => boolean
    head?: MetaInfo
    $dayjs?: typeof dayjs
  }
}
