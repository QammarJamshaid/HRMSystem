import { baseUrl } from '../../../Config/baseURL'
import { api } from '../../../Services'

export const EmployeeApi = api.injectEndpoints({
    endpoints: (builder) => ({

        getApprovedLeaveApp: builder.query({
            query: (id) => {

                console.log("id===>", id)

                return {
                    url: baseUrl + `/Leave/AllNewApprovedLeaveGet`
                }
            },
            providesTags: ['employeeLeave'],
        }),
        getRejectedLeaveApp: builder.query({
            query: (id) => {

                console.log("id===>", id)

                return {
                    url: baseUrl + `/Leave/AllNewRejectedLeaveGet`
                }
            },
            providesTags: ['employeeLeave'],
        }),
        getPendingLeaveApp: builder.query({
            query: (id) => {

                console.log("id===>", id)

                return {
                    url: baseUrl + `/Leave/AllNewPendingLeaveGet`
                }
            },
            providesTags: ['employeeLeave'],
        }),
        getEmployeeAllCommittees: builder.query({
            query: (id) => {

                console.log("id===>", id)

                return {
                    url: baseUrl + `/Committeemembers/CommitteeWithMemberGet?uid=${42}`
                }
            },
            providesTags: ['employeeLeave'],
        }),
        addLeavePost: builder.mutation({
            query: (body) => {
                console.log("body===>", body)
                return {
                    url: baseUrl + `/Leave/LeavePost`,
                    method: 'POST',
                    body,
                }
            },
            invalidatesTags: ['employeeLeave']
        }),
        getEmployeeAttendance: builder.query({
            query: (id) => {
                return {
                    url: baseUrl + `/Attendance/NewAttendanceGet?uid=${id}`
                }
            },
            providesTags: ['employeeAttendance'],
        }),
    }),
})
export const {
    useGetApprovedLeaveAppQuery,
    useGetRejectedLeaveAppQuery,
    useGetPendingLeaveAppQuery,
    useGetEmployeeAllCommitteesQuery,
    useAddLeavePostMutation,
    useGetEmployeeAttendanceQuery,
} = EmployeeApi
