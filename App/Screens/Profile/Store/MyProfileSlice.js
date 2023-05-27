import { createSlice } from '@reduxjs/toolkit';

const MyProfileSlice = createSlice({
    name: 'myProfile',
    initialState: {
        addEducationModal: false,
        addExperienceModal: false,
    },
    reducers: {
        changeAddEducationModal: (state, action) => {
            state.addEducationModal = action.payload
        },
        changeAddExperienceModal: (state, action) => {
            state.addExperienceModal = action.payload
        },
    },
});

export const {
    changeAddEducationModal,
    changeAddExperienceModal
} = MyProfileSlice.actions;

export default MyProfileSlice.reducer;