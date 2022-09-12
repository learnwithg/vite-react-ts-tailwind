import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// initialize an empty api service that we'll inject endpoints into later as needed
export const erpApi = createApi({
  baseQuery: fetchBaseQuery({
    credentials: 'include',
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    baseUrl: `${import.meta.env.VITE_ERP_API_BASE_URL}/api`
  }),
  endpoints: () => ({})
})
// base url = 1 createApi
