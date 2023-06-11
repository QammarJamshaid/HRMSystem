import AsyncStorage from '@react-native-async-storage/async-storage'
import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from "redux"
import { persistReducer } from 'redux-persist'
import { api } from '../Services'
import { authApi } from '../Screens/Auth/Services/authApi'
import auth from '../Screens/Auth/Store/authSlice'
import styles from '../Styles/Store/stylesSlice'
import myProfile from '../Screens/Profile/Store/MyProfileSlice'
import leave from '../Screens/Admin/LeaveApplicant/Store/LeaveSlice'
import attendence from '../Screens/Admin/Attendence/Store/AttendenceSlice'
import jobPost from '../Screens/Admin/JobPost/Store/JobPostSlice'
import adminJobApp from '../Screens/Admin/AdminJobApplications/Store/AdminJobApplicationSlice'
import committee from '../Screens/Admin/Committee/Store/CommitteeSlice'
import profile from '../Screens/Admin/AdminProfile/Store/AdminProfileSlice'
import employee from '../Screens/Employee/Store/EmployeeSlice'

const reducers = combineReducers({
    auth,
    myProfile,
    styles,
    leave,
    attendence,
    jobPost,
    adminJobApp,
    committee,
    profile,
    employee,
    [api.reducerPath]: api.reducer,
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const middlewares = [authApi.middleware]
if(__DEV__) {
    const createDebugger = require('redux-flipper').default;
    middlewares.push(createDebugger());
}

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }).concat(
            api.middleware,
        ),
});;

export default store;