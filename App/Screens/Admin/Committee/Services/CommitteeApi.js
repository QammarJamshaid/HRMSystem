import { baseUrl } from '../../../../Config/baseURL'
import { api } from '../../../../Services'

export const CommitteeApi = api.injectEndpoints({
    endpoints: (builder) => ({

        getCommittes: builder.query({

            query: () => ({
                url: baseUrl + `/Committee/AllCommitteeGet`
            }),
            // providesTags: ['Committee'],
        }),

        deleteCommitte: builder.mutation({
            query: (id) => {

                return {
                    url: baseUrl + `/Committee/DeleteCommitte?CommitteeId=${id}`,
                    method: 'DELETE',
                }
            },
            invalidatesTags: ['Committee']
        }),

        getAllMember: builder.query({
            query: () => ({
                url: baseUrl + `/User/UserroleGet`
            }),
            providesTags: ['Committee'],
        }),
        getAllHod: builder.query({
            query: () => ({
                url: baseUrl + `/User/HodroleGet`
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
    useGetCommittesQuery,
    useDeleteCommitteMutation,
    useGetAllMemberQuery,
    useGetAllHodQuery,
    useCreateCommitteMutation,
    useAddInCommiteMutation
} = CommitteeApi
