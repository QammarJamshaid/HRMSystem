import { createSlice } from '@reduxjs/toolkit';

const AdminJobApplicationSlice = createSlice({
    name: 'adminJobApp',
    initialState: {
        // addApprovedModal: false,
        // addRejectedModal: false,
    },
    reducers: {
        // changeAddApprovedModal: (state, action) => {
        //     state.addApprovedModal = action.payload
        // },
        // changeAddRejectedModal: (state, action) => {
        //     state.addRejectedModal = action.payload
        // },
    },
});

export const {
    // changeAddApprovedModal,
    // changeAddRejectedModal
} = AdminJobApplicationSlice.actions;

export default AdminJobApplicationSlice.reducer;