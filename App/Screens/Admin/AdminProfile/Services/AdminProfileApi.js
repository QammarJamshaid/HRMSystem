import { baseUrl } from '../../../../Config/baseURL'
import { api } from '../../../../Services'

export const AdminProfileApi = api.injectEndpoints({
    endpoints: (builder) => ({

        getAdminProfileData: builder.query({
            query: () => {

                return {
                    url:baseUrl + `/User/UpdateUser`
                }
            },
            invalidatesTags: ['Profile']
        }),
        // getAllMember: builder.query({
        //     query: () => ({
        //         url:baseUrl + `/User/UserroleGet`
        //     }),
        //     providesTags: ['Committee'],
        // }),
        // getAllHod: builder.query({
        //     query: () => ({
        //         url:baseUrl + `/User/HodroleGet`
        //     }),
        //     providesTags: ['Committee'],
        // }),
        // CreateCommitte: builder.mutation({
        //     query: (body) => {

        //         console.log("body===>", body)

        //         return {
        //             url: baseUrl + `/Committee/Createcommitte`,
        //             method: 'POST',
        //             body,
        //         }
        //     },
        //     invalidatesTags: ['Shared']
        // }),
    }),
})

export const {
    useGetAdminProfileDataQuery,
    // useCreateCommitteMutation
} = AdminProfileApi
