import {
    createApi,
    fetchBaseQuery
} from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../Config/baseURL'

export const api = createApi({
    tagTypes: [
        "Job",
        "Leave",
        "AdminJobApp",
        "Committee",
        "Profile",
        "Attendance",
        "SignUp",
        "employeeLeave",
    ],
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.user?.token

            if(token)
                headers.set('authorization', `Bearer ${token}`)

            return headers
        },
    }),
    endpoints: () => ({}),
})