import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import { baseUrl } from '../../../Config/baseUrl'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: null }),
    endpoints: (builder) => ({}),
})

export const {
    useLoginMutation,
} = authApi