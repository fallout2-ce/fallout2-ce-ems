interface ImportMetaEnv {
  readonly [key: string]: any
  readonly BASE_URL: string
  readonly MODE: string
  readonly DEV: boolean
  readonly PROD: boolean
  readonly SSR: boolean
  readonly F2_WEB_INFO: string
  readonly F2_GAME_VERSION: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
