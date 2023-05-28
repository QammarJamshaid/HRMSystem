import { createSlice } from '@reduxjs/toolkit';
import { authApi } from '../Services/authApi';

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
    extraReducers: () => {

    },
});

export const {
    ChangeUser,
} = authSlice.actions;

export default authSlice.reducer;