import { baseUrl } from '../../../../Config/baseURL'
import { api } from '../../../../Services'

export const JobPostApi = api.injectEndpoints({
    endpoints: (builder) => ({

        getJobPosted: builder.query({
            query: () => ({
                url:baseUrl + `/Job/NewJobGet`
            }),
            providesTags: ['Job'],
        }),
        getJobPostedDetail: builder.query({
            query: (id) => {

                console.log("id===>", id)

                return {
                    url:baseUrl + `/Job/NewJobdetailGet?jid=${"14"}`
                }
            },
            providesTags: ['Job'],
        }),
        postJob: builder.mutation({
            query: (body) => {

                console.log("body===>", body)

                return {
                    url: `/Job/JobPost`,
                    method: 'POST',
                    body,
                }
            },
            invalidatesTags: ['Job']
        }),
    }),
})

export const {
    useGetJobPostedQuery,
    useGetJobPostedDetailQuery,
    usePostJobMutation
} = JobPostApi