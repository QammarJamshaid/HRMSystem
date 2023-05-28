import { baseUrl } from '../../../../Config/baseURL'
import { api } from '../../../../Services'

export const LeaveApi = api.injectEndpoints({
    endpoints: (builder) => ({

        getLeaveApp: builder.query({
            query: (id) => {

                console.log("id===>", id)

                return {
                    url:baseUrl + `/Leave/AllNewPendingLeaveGet`
                }
            },
            providesTags: ['Leave'],
        }),
    }),
})

export const {
    useGetLeaveAppQuery,
} = LeaveApi
