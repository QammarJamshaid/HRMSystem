import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';

const stylesSlice = createSlice({
    name: 'styles',
    initialState: {

        mainColor: "#702963",
        mainLighterColor: "#FFFFFF",
        mainDarkerColor: "#373054",
        mainTransColor: '#C5BCF3',
        backgroundDarkerColor: "#FFFFFF",
        backgroundColor: "#FAFAFA",
        textLighterColor: "#fff",
        textXXLightColor: "#4D5757",
        textXLightColor: "#424242",
        textDarkColor: "#79848E",
        textColor: "#000000",
        textOffColor: "#818181",
        textMainishColor: "#575E71",
        modalColor: "#fff",
        modalBorderLightColor: "#F0F0F0",
        modalBorderColor: "silver",
        infoColor: "#23CDFF",
        successColor: "#12C719",
        dangerColor: "#D20000",
        dangerLightColor: "#FF4B6A",
        warningColor: "#FCD438",
        hitPinkColor: "#FFA26B",
        slateBlue: "#A7B437",
        yellowColor: "#FFBB01",
        yellowRaitingColor: "#F5CE6C",
        purpleColor: "#B391FF",
        skyBlueColor: "#79D1E8",
        darkBlueColor: "#3763BB",
        orangeColor: "#FFA41B",
        greenColor: "#3AB54A",
        greenDarkerColor: "#A9AC57",
        barDarkColor: "#413768",
        barLightColor: "#796DBD",
        blackcolor: "#000000",
        buttoncolor: "#6CBAFA",
        buttonlightcolor: "#B7B7B7",
        borderColor: "#707070",
        textDecorationColor: "#103ED2",
        redColor:"#F1394C"
    },
    reducers: {
    },
    extraReducers: {
    },
});

export const {
} = stylesSlice.actions;

export default stylesSlice.reducer;