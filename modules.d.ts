declare namespace NodeJS {
  export interface ProcessEnv {
    siteMeta: {
      url: string
      title: string
      description?: string
      imageUrl?: string
    }
    APPWRITE_ENDPOINT: string
    APPWRITE_PROJECT_ID: string
    APPWRITE_API_KEY: string
  }
}
