import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
    },
    reducers: {
        ChangeUser: (state, action) => {
            state.user = action.payload
        }
    },
    extraReducers: {
    },
});

export const {
    ChangeUser,
} = authSlice.actions;

export default authSlice.reducer;