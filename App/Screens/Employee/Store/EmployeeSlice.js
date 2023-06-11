import { createSlice } from '@reduxjs/toolkit';

const EmployeeSlice = createSlice({
    name: 'employee',
    initialState: {
        addApplyLeaveModal: false,
        addAttendanceDetailModal: false,
        addAtAssignedJobModal: false,
    },
    reducers: {
        changeAddApplyLeaveModal: (state, action) => {
            state.addApplyLeaveModal = action.payload
        },
        changeAddAttendanceDetailModal: (state, action) => {
            state.addAttendanceDetailModal = action.payload
        },
        changeAddAtAssignedJobModal: (state, action) => {
            state.addAtAssignedJobModal = action.payload
        },
    },
});

export const {
    changeAddApplyLeaveModal,
    changeAddAttendanceDetailModal,
    changeAddAtAssignedJobModal
} = EmployeeSlice.actions;

export default EmployeeSlice.reducer;