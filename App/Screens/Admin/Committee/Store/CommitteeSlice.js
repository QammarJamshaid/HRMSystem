import { createSlice } from '@reduxjs/toolkit';

const CommitteeSlice = createSlice({
    name: 'committee',
    initialState: {
        detailsItem: [
            {
                id: 1,
                Title: "Job Title :",
                value: "React Native Developer",
                score: 4
            },
            {
                id: 2,
                Title: "Location :",
                value: "Rawalpindi",
                score: 7
            },
            {
                id: 3,
                Title: "Salary :",
                value: "50K to 80K",
                score: 9
            },
            {
                id: 4,
                Title: "Last Date :",
                value: "12/04/2024",
                score: 6
            },
        ]
    },
    reducers: {
        setDetailsItem: (state, action) => {

            console.log("action.payload===>", action.payload)

            state.detailsItem = action.payload
        }
    },
});

export const {
    setDetailsItem,
} = CommitteeSlice.actions;

export default CommitteeSlice.reducer;