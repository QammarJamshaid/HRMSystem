import { createSlice } from '@reduxjs/toolkit';

const JobPostSlice = createSlice({
    name: 'jobPost',
    initialState: {
        addJobModal: false,
    },
    reducers: {
        changeAddJobModal: (state, action) => {
            state.addJobModal = action.payload
        },
    },
});

export const {
    changeAddJobModal,
} = JobPostSlice.actions;

export default JobPostSlice.reducer;