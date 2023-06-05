import { baseUrl } from '../../../../Config/baseURL'
import { api } from '../../../../Services'

export const CommitteeApi = api.injectEndpoints({
    endpoints: (builder) => ({

        getCommittes: builder.query({
            query: () => {

                return {
                    url:baseUrl +`/Committee/NewAllCommitteeGet`
                }
            },
            invalidatesTags: ['Committee']
        }),
        getCommittes: builder.query({
            query: (id) => {

                return {
                    url:baseUrl +`/Committee/CommitteeGet?comid=${id}`
                }
            },
            invalidatesTags: ['Committee']
        }),
        getAllMember: builder.query({
            query: () => ({
                url:baseUrl + `/User/UserroleGet`
            }),
            providesTags: ['Committee'],
        }),
        getAllHod: builder.query({
            query: () => ({
                url:baseUrl + `/User/HodroleGet`
            }),
            providesTags: ['Committee'],
        }),
        CreateCommitte: builder.mutation({
            query: (body) => {

                console.log("body===>", body)

                return {
                    url: baseUrl + `/Committee/Createcommitte`,
                    method: 'POST',
                    body,
                }
            },
            invalidatesTags: ['Committee']
        }),
        addInCommite: builder.mutation({
            query: (body) => {

                console.log("body===>", body)

                return {
                    url: baseUrl + `/Committeemembers/Createcommittemember`,
                    method: 'POST',
                    body,
                }
            },
            invalidatesTags: ['Committee']
        }),
    }),
})

export const {
    useGetAllMemberQuery,
    useGetCommittesQuery,
    useGetAllHodQuery,
    useCreateCommitteMutation,
    useAddInCommiteMutation
} = CommitteeApi
