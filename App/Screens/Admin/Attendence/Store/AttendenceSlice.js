import { createSlice } from '@reduxjs/toolkit';

const AttendenceSlice = createSlice({
    name: 'attendence',
    initialState: {
        viewAttendenceModal: false,
    },
    reducers: {
        changeAttendenceStatusModal: (state, action) => {
            state.viewAttendenceModal = action.payload
        },
    },
});

export const {
    changeAttendenceStatusModal,
} = AttendenceSlice.actions;

export default AttendenceSlice.reducer;