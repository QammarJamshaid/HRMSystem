import { baseUrl } from '../../../../Config/baseURL'
import { api } from '../../../../Services'

export const AttendenceApi = api.injectEndpoints({
    endpoints: (builder) => ({

        getAttendance: builder.query({
            query: (Uid) => {

                return {
                    url:`/Attendance/NewAttendanceGet`
                }
            },
            invalidatesTags: ['Attendance']
        }),
    }),
})

export const {
    useGetAttendanceQuery,
} = AttendenceApi
