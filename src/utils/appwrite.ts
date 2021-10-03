import sdk from 'node-appwrite'

export const client = new sdk.Client()
  .setEndpoint(process.env.APPWRITE_ENDPOINT) // Your API Endpoint
  .setProject(process.env.APPWRITE_PROJECT_ID) // Your project ID
  .setKey(process.env.APPWRITE_API_KEY) // Your secret API key
  .setSelfSigned() // Use only on dev mode with a self-signed SSL certificate
