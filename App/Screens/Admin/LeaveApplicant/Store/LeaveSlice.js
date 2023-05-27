import { createSlice } from '@reduxjs/toolkit';

const LeaveSlice = createSlice({
    name: 'leave',
    initialState: {
        addApprovedModal: false,
        addRejectedModal: false,
    },
    reducers: {
        changeAddApprovedModal: (state, action) => {
            state.addApprovedModal = action.payload
        },
        changeAddRejectedModal: (state, action) => {
            state.addRejectedModal = action.payload
        },
    },
});

export const {
    changeAddApprovedModal,
    changeAddRejectedModal
} = LeaveSlice.actions;

export default LeaveSlice.reducer;