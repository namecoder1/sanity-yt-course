import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

const env = process.env.NODE_ENV

const studioUrl = 
  env === 'production' ? process.env.NEXT_PUBLIC_SANITY_STUDIO_URL
   : process.env.NEXT_PUBLIC_SANITY_STUDIO_URL_DEV

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, 
  token: process.env.SANITY_VIEWER_TOKEN,
  stega: {
    studioUrl
  }
})
