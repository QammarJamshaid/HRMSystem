import { baseUrl } from '../../../Config/baseURL'
import { api } from '../../../Services'

export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        addNewUser: builder.mutation({
            query: (body) => {

                console.log("body===>", body)

                return {
                    url: baseUrl + `/User/Adduser`,
                    method: 'POST',
                    body,
                }
            },
            invalidatesTags: ['SignUp']
        }),
    }),
})

export const {
    useAddNewUserMutation
} = authApi