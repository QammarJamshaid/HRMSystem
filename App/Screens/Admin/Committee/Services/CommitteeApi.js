import { baseUrl } from '../../../../Config/baseURL'
import { api } from '../../../../Services'

export const CommitteeApi = api.injectEndpoints({
    endpoints: (builder) => ({

        getAllMember: builder.query({
            query: () => {

                return {
                    url:baseUrl + `/Committee/AllCommitteeGet`
                }
            },
            invalidatesTags: ['Committee']
        }),
    }),
})

export const {
    useGetAllMemberQuery,
} = CommitteeApi
