import { baseUrl } from '../../../../Config/baseURL'
import { api } from '../../../../Services'

export const AdminJobAppApi = api.injectEndpoints({
    endpoints: (builder) => ({

        getAdminJobApp: builder.query({
            query: () => {

                return {
                    url:baseUrl + `/JobApplication/NewAllJobApplicationsGet`
                }
            },
            providesTags: ['AdminJobApp'],
        }),
    }),
})

export const {
    useGetAdminJobAppQuery,
} = AdminJobAppApi
