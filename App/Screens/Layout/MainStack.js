import { createDrawerNavigator } from '@react-navigation/drawer'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import {
    DefaultTheme,
    NavigationContainer
} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React, { useRef, useState, useEffect } from 'react'
import { useGlobalContext } from '../../Services2'
import {
    Animated,
    Dimensions,
    Platform,
    TouchableOpacity,
    View
} from 'react-native'
import { FAB } from 'react-native-paper'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'
import ChatIcon from '../../Assets/Svgs/ChatIcon.svg'
import HomeIcon from '../../Assets/Svgs/HomeIcon.svg'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import user from '../../Assets/Svgs/RewardIcon.svg'
import LogIn from '../Auth/LogIn'
import SignUp from '../Auth/SignUp'
import StartedScreen from '../Auth/StartedScreen'
import DrawerContent from './DrawerContent'
import ProfileTopBar from '../Profile/ProfileTopBar'
import Profile from '../Profile/Profile'
import EditProfile from '../Profile/EditProfile'
import Jobs from '../Jobs/Jobs'
import JobDetails from '../Jobs/JobDetails'
import ApplyJob from '../Jobs/ApplyJob'
import JobApplications from '../JobApplication/JobApplications'
import AdminJobApplications from '../Admin/AdminJobApplications/AdminJobApplications'
import LeaveApplicant from '../Admin/LeaveApplicant/LeaveApplicant'
import Attendence from '../Admin/Attendence/Attendence'
import AdminProfile from '../Admin/AdminProfile/AdminProfile'
import AdminEditProfile from '../Admin/AdminProfile/AdminEditProfile'
import JobPost from '../Admin/JobPost/JobPost'
import JobPostdetail from '../Admin/JobPost/JobPostdetail'
import GuardProfile from '../Guard/GuardProfile/GuardProfile'
import GuardEditProfile from '../Guard/GuardProfile/GuardEditProfile'
import Dashboard from '../Guard/Dashboard/Dashboard'
import EmployeesList from '../Guard/GuardEmployees/EmployeesList'
import GuardList from '../Guard/Dashboard/GuardList'
import Professor from '../Guard/Dashboard/Professor'
import { StorageManager } from '../../Services2'
import AllMembers from '../Admin/Committee/AllMembers'
import CommitteeMembers from '../Admin/Committee/CommitteeMembers'
import Committe from '../Admin/Committee/Committe'
import CommitteHead from '../Admin/Committee/CommitteHead'
import CreateCommitte from '../Admin/Committee/CreateCommitte'
import CommitteDetail from '../Admin/Committee/CommitteDetail'
import EmployeeDetail from '../Admin/Committee/EmployeeDetail'
import AttendenceReport from '../Admin/Attendence/AttendenceReport'
import Home from '../Home/Home'
import CheckInAttendance from '../Guard/GuardEmployees/CheckInAttendance'
import AttendanceRecord from '../Guard/GuardAttendance/AttendanceRecord'
import GuardAttendanceReport from '../Guard/GuardAttendance/GuardAttendanceReport'
import LeaveTopBar from '../Employee/EmployeeLeave/LeaveTopBar'
import EmployeeLeaveApp from '../Employee/EmployeeLeave/ApprovedLeaveApp'
import EmployeeProfile from '../Employee/EmployeeProfile/EmployeeProfile'
import EmployeeEditProfile from '../Employee/EmployeeProfile/EmployeeEditProfile'
import EmployeeAttendanceReport from '../Employee/EmployeeAttendance/EmployeeAttendanceReport'
import EmployeeCommittees from '../Employee/EmployeeCommittee/EmployeeCommittees'
import ApprovedLeaveApp from '../Employee/EmployeeLeave/ApprovedLeaveApp'
import PendingLeaveApp from '../Employee/EmployeeLeave/PendingLeaveApp'
import RejectedLeaveApp from '../Employee/EmployeeLeave/RejectedLeaveApp'
import EmployeeAssignedJob from '../Employee/EmployeeCommittee/EmployeeAssignedJob'
import EmployeeApplicantDetail from '../Employee/EmployeeCommittee/EmployeeApplicantDetail'
import UpdateScoring from '../Admin/Committee/UpdateScoring'
import SelectedMember from '../Admin/SelectedMembers/SelectedMember'

const { height, width } = Dimensions.get('window')

const Stack = createStackNavigator()
const AuthStack = createStackNavigator()
const BottomTab = createMaterialBottomTabNavigator()
const Drawer = createDrawerNavigator()



function getWidth() {


    // * Horizontal Padding = 20...
    let calculatedWidth = width
    // * Total five Tabs...
    return calculatedWidth / 3
}
const ProfileNav = () => (
    <Stack.Navigator

        initialRouteName="ProfileTopBar"
        drawerContent={props => null}>
        <Stack.Screen
            options={{ headerShown: false }}
            name="ProfileTopBar"
            component={ProfileTopBar}
        />
        {/* <Stack.Screen
            options={{ headerShown: false }}
            name="Profile"
            component={Profile}
        /> */}
        <Stack.Screen
            options={{ headerShown: false }}
            name="EditProfile"
            component={EditProfile}
        />

    </Stack.Navigator>
)
const JobNav = () => (
    <Stack.Navigator

        initialRouteName="Jobs"
        drawerContent={props => null}>
        <Stack.Screen
            options={{ headerShown: false }}
            name="Jobs"
            component={Jobs}
        />
        <Stack.Screen
            options={{ headerShown: false }}
            name="JobDetails"
            component={JobDetails}
        />
        <Stack.Screen
            options={{ headerShown: false }}
            name="ApplyJob"
            component={ApplyJob}
        />

    </Stack.Navigator>
)
function ApplicantTabNav(props) {
    const {
        mainColor,
        backgroundColor,
        textDarkColor,
        textColor
    } = useSelector(state => state.styles)
    const tabOffsetValue = useRef(new Animated.Value(0)).current
    const insets = useSafeAreaInsets()
    const swapAddValue = 0
    const fabWidth = 60

    return (
        <>
            <BottomTab.Navigator
                initialRouteName="desh" //todo: change it to Offers
                barStyle={{
                    backgroundColor: backgroundColor,
                    height: 70,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 3.84,
                    elevation: 5,
                    borderColor: 'red', borderWidth: 0,
                }}
                screenOptions={{
                }}
                shifting={false}
                labeled={true}
                activeColor={"purple"}
                inactiveColor={textDarkColor}
                sceneContainerStyle={{
                    borderColor: 'red', borderWidth: 0,
                }}
            >
                <BottomTab.Screen
                    name="home"
                    component={Home}
                    tabBarOptions={{
                    }}
                    options={{

                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color }) => (
                            <FontAwesome
                                name="home"
                                color={color}
                                size={25}></FontAwesome>
                        ),
                    }}
                    listeners={({ navigation, route }) => ({
                        // Onpress Update....
                        tabPress: e => {
                            Animated.spring(tabOffsetValue, {
                                toValue: 0,
                                useNativeDriver: true
                            }).start()
                        }
                    })}
                />
                <BottomTab.Screen
                    name="Job"
                    component={JobNav}
                    tabBarOptions={{
                    }}
                    options={{

                        tabBarLabel: 'Jobs',
                        tabBarIcon: ({ color }) => (
                            <FontAwesome
                                name="briefcase"
                                color={color}
                                size={25}></FontAwesome>
                        ),
                    }}
                    listeners={({ navigation, route }) => ({
                        // Onpress Update....
                        tabPress: e => {
                            Animated.spring(tabOffsetValue, {
                                toValue: 0,
                                useNativeDriver: true
                            }).start()
                        }
                    })}
                />
                <BottomTab.Screen
                    name="jobapp"
                    component={JobApplications}
                    tabBarOptions={{
                    }}
                    options={{

                        tabBarLabel: 'JobApp',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons
                                name="briefcase-check-outline"
                                color={color}
                                size={24}>
                            </MaterialCommunityIcons>
                        ),
                    }}
                    listeners={({ navigation, route }) => ({
                        // Onpress Update....
                        tabPress: e => {
                            Animated.spring(tabOffsetValue, {
                                toValue: 0,
                                useNativeDriver: true
                            }).start()
                        }
                    })}
                />
                {/* <BottomTab.Screen
                    name="Main"
                    component={JobApplications}
                    tabBarOptions={{ indicatorStyle: { backgroundColor: 'green' } }}
                    options={{
                        tabBarLabel: '',
                    }}
                    listeners={({ navigation, route }) => ({
                        tabPress: e => {
                            Animated.spring(tabOffsetValue, {
                                toValue: (getWidth() + swapAddValue) * 1,
                                useNativeDriver: true
                            }).start()
                        }
                    })}
                /> */}
                <BottomTab.Screen
                    name="Profil"
                    component={ProfileNav}
                    tabBarOptions={{ indicatorStyle: { backgroundColor: 'green' } }}
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({ color }) => (
                            <FontAwesome
                                name="user-circle-o"
                                color={color}
                                size={25}></FontAwesome>
                        )
                    }}
                    listeners={({ navigation, route }) => ({
                        // Onpress Update....
                        tabPress: e => {
                            Animated.spring(tabOffsetValue, {
                                toValue: (getWidth() + swapAddValue) * 2,
                                useNativeDriver: true
                            }).start()
                        }
                    })}
                />
            </BottomTab.Navigator>
            {/* <TouchableOpacity
                onPress={() => props.navigation.navigate("JobApplications")}
                style={{
                    position: 'absolute',
                    right: width / 2 - 45,
                    bottom: 25,
                }}
            >
                <FAB
                    onPress={() => {
                        props.navigation.navigate("Main")
                    }}
                    style={{
                        margin: 16,
                        justifyContent: "center",
                        alignItems: 'center',
                        backgroundColor: mainColor,
                        width: fabWidth,
                        height: 60,
                        borderColor: "lightgray",
                        borderWidth: 2,
                        borderRadius: 100,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5,

                    }}
                    small
                    icon="home"
                    color={"#fff"}
                    animated={true}
                />
            </TouchableOpacity> */}
        </>
    )
}
const LeaveNav = () => (
    <Stack.Navigator

        initialRouteName="LeaveApplicant"
        drawerContent={props => null}>
        <Stack.Screen
            options={{ headerShown: false }}
            name="LeaveApplicant"
            component={LeaveApplicant}
        />
        {/* <Stack.Screen
            options={{ headerShown: false }}
            name="Profile"
            component={Profile}
        /> */}

    </Stack.Navigator>
)
const AttendenceNav = () => (
    <Stack.Navigator

        initialRouteName="LeaveApplicant"
        drawerContent={props => null}>
        <Stack.Screen
            options={{ headerShown: false }}
            name="Attendence"
            component={Attendence}
        />
        <Stack.Screen
            options={{ headerShown: false }}
            name="AttendenceReport"
            component={AttendenceReport}
        />

    </Stack.Navigator>
)
const CommitteNav = () => (
    <Stack.Navigator

        initialRouteName="LeaveApplicant"
        drawerContent={props => null}>
        <Stack.Screen
            options={{ headerShown: false }}
            name="Committe"
            component={Committe}
        />
        <Stack.Screen
            options={{ headerShown: false }}
            name="CommitteHead"
            component={CommitteHead}
        />
        <Stack.Screen
            options={{ headerShown: false }}
            name="CreateCommitte"
            component={CreateCommitte}
        />
        <Stack.Screen
            options={{ headerShown: false }}
            name="CommitteDetail"
            component={CommitteDetail}
        />
        <Stack.Screen
            options={{ headerShown: false }}
            name="AllMembers"
            component={AllMembers}
        />
        <Stack.Screen
            options={{ headerShown: false }}
            name="EmployeeDetail"
            component={EmployeeDetail}
        />
        <Stack.Screen
            options={{ headerShown: false }}
            name="UpdateScoring"
            component={UpdateScoring}
        />

    </Stack.Navigator>
)
const AdminProfileNav = () => (
    <Stack.Navigator

        initialRouteName="AdminProfile"
        drawerContent={props => null}>
        <Stack.Screen
            options={{ headerShown: false }}
            name="AdminProfile"
            component={AdminProfile}
        />
        <Stack.Screen
            options={{ headerShown: false }}
            name="AdminEditProfile"
            component={AdminEditProfile}
        />

    </Stack.Navigator>
)
const AdminJobNav = () => (
    <Stack.Navigator

        initialRouteName="JobPost"
        drawerContent={props => null}>
        <Stack.Screen
            options={{ headerShown: false }}
            name="JobPost"
            component={JobPost}
        />
        <Stack.Screen
            options={{ headerShown: false }}
            name="JobPostdetail"
            component={JobPostdetail}
        />

    </Stack.Navigator>
)
function AdminTabNav(props) {
    const {
        mainColor,
        backgroundColor,
        textDarkColor,
    } = useSelector(state => state.styles)
    const tabOffsetValue = useRef(new Animated.Value(0)).current
    const insets = useSafeAreaInsets()
    const swapAddValue = 0
    const fabWidth = 60

    return (
        <>
            <BottomTab.Navigator
                initialRouteName="desh" //todo: change it to Offers
                barStyle={{
                    backgroundColor: backgroundColor,
                    height: 70,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 3.84,
                    elevation: 5,
                    borderColor: 'red', borderWidth: 0,
                }}
                screenOptions={{
                }}
                shifting={false}
                labeled={true}
                activeColor={"purple"}
                inactiveColor={textDarkColor}
                sceneContainerStyle={{
                    borderColor: 'red', borderWidth: 0,
                }}
            >
                <BottomTab.Screen
                    name="Leaveapp"
                    component={LeaveNav}
                    tabBarOptions={{
                    }}
                    options={{

                        tabBarLabel: 'LeaveApp',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons
                                name="briefcase-eye"
                                color={color}
                                size={25}>
                            </MaterialCommunityIcons>
                        ),
                    }}
                    listeners={({ navigation, route }) => ({
                        // Onpress Update....
                        tabPress: e => {
                            Animated.spring(tabOffsetValue, {
                                toValue: 0,
                                useNativeDriver: true
                            }).start()
                        }
                    })}
                />
                <BottomTab.Screen
                    name="JobsPost"
                    // component={AdminJobNav}
                    component={SelectedMember}
                    tabBarOptions={{
                    }}
                    options={{

                        tabBarLabel: 'Members',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons
                                name="briefcase-plus"
                                color={color}
                                size={25}>
                            </MaterialCommunityIcons>
                        ),
                    }}
                    listeners={({ navigation, route }) => ({
                        // Onpress Update....
                        tabPress: e => {
                            Animated.spring(tabOffsetValue, {
                                toValue: 0,
                                useNativeDriver: true
                            }).start()
                        }
                    })}
                />
                <BottomTab.Screen
                    name="Main"
                    component={CommitteNav}
                    tabBarOptions={{ indicatorStyle: { backgroundColor: 'green' } }}
                    options={{
                        tabBarLabel: '',
                    }}
                    listeners={({ navigation, route }) => ({
                        tabPress: e => {
                            Animated.spring(tabOffsetValue, {
                                toValue: (getWidth() + swapAddValue) * 1,
                                useNativeDriver: true
                            }).start()
                        }
                    })}
                />
                <BottomTab.Screen
                    name="Attendenc"
                    component={AttendenceNav}
                    tabBarOptions={{ indicatorStyle: { backgroundColor: 'green' } }}
                    options={{
                        tabBarLabel: 'Attendence',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons
                                name="briefcase-account"
                                color={color}
                                size={25}></MaterialCommunityIcons>
                        )
                    }}
                    listeners={({ navigation, route }) => ({
                        // Onpress Update....
                        tabPress: e => {
                            Animated.spring(tabOffsetValue, {
                                toValue: (getWidth() + swapAddValue) * 2,
                                useNativeDriver: true
                            }).start()
                        }
                    })}
                />
                <BottomTab.Screen
                    name="AdminProfil"
                    component={AdminProfileNav}
                    tabBarOptions={{ indicatorStyle: { backgroundColor: 'green' } }}
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({ color }) => (
                            <FontAwesome
                                name="user-circle-o"
                                color={color}
                                size={25}></FontAwesome>
                        )
                    }}
                    listeners={({ navigation, route }) => ({
                        // Onpress Update....
                        tabPress: e => {
                            Animated.spring(tabOffsetValue, {
                                toValue: (getWidth() + swapAddValue) * 2,
                                useNativeDriver: true
                            }).start()
                        }
                    })}
                />
            </BottomTab.Navigator>
            <TouchableOpacity
                onPress={() => props.navigation.navigate("JobApplications")}
                style={{
                    position: 'absolute',
                    right: width / 2 - 45,
                    bottom: 25,
                }}
            >
                <FAB
                    onPress={() => {
                        props.navigation.navigate("Main")
                    }}
                    style={{
                        margin: 16,
                        justifyContent: "center",
                        alignItems: 'center',
                        backgroundColor: mainColor,
                        width: fabWidth,
                        height: 60,
                        borderColor: "lightgray",
                        borderWidth: 2,
                        borderRadius: 100,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5,
                    }}
                    small
                    icon="briefcase-check-outline"
                    color={"#fff"}
                    animated={true}
                />
            </TouchableOpacity>
        </>
    )
}


const GuardProfileNav = () => (
    <Stack.Navigator

        initialRouteName="GuardProfile"
        drawerContent={props => null}>
        <Stack.Screen
            options={{ headerShown: false }}
            name="GuardProfile"
            component={GuardProfile}
        />
        <Stack.Screen
            options={{ headerShown: false }}
            name="GuardEditProfile"
            component={GuardEditProfile}
        />

    </Stack.Navigator>
)
const GuardEmployeesNav = () => (
    <Stack.Navigator

        initialRouteName="EmployeesList"
        drawerContent={props => null}>
        <Stack.Screen
            options={{ headerShown: false }}
            name="EmployeesList"
            component={EmployeesList}
        />
        <Stack.Screen
            options={{ headerShown: false }}
            name="CheckInAttendance"
            component={CheckInAttendance}
        />

    </Stack.Navigator>
)
const GuardAttendanceNav = () => (
    <Stack.Navigator

        initialRouteName="AttendanceRecord"
        drawerContent={props => null}>
        <Stack.Screen
            options={{ headerShown: false }}
            name="AttendanceRecord"
            component={AttendanceRecord}
        />
        <Stack.Screen
            options={{ headerShown: false }}
            name="GuardAttendanceReport"
            component={GuardAttendanceReport}
        />

    </Stack.Navigator>
)
const DashboardNav = () => (
    <Stack.Navigator

        initialRouteName="Dashboard"
        drawerContent={props => null}>
        <Stack.Screen
            options={{ headerShown: false }}
            name="Dashboard"
            component={Dashboard}
        />
        <Stack.Screen
            options={{ headerShown: false }}
            name="EmployeesList"
            component={EmployeesList}
        />
        <Stack.Screen
            options={{ headerShown: false }}
            name="GuardList"
            component={GuardList}
        />
        <Stack.Screen
            options={{ headerShown: false }}
            name="Professor"
            component={Professor}
        />

    </Stack.Navigator>
)
function GuardTabNav(props) {
    const {
        mainColor,
        backgroundColor,
        textDarkColor,
    } = useSelector(state => state.styles)
    const tabOffsetValue = useRef(new Animated.Value(0)).current
    const insets = useSafeAreaInsets()
    const swapAddValue = 0
    const fabWidth = 60

    return (
        <>
            <BottomTab.Navigator
                initialRouteName="desh" //todo: change it to Offers
                barStyle={{
                    backgroundColor: backgroundColor,
                    height: 70,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 3.84,
                    elevation: 5,
                    borderColor: 'red', borderWidth: 0,
                }}
                screenOptions={{
                }}
                shifting={false}
                labeled={true}
                activeColor={"purple"}
                inactiveColor={textDarkColor}
                sceneContainerStyle={{
                    borderColor: 'red', borderWidth: 0,
                }}
            >
                <BottomTab.Screen
                    name="Dash"
                    component={DashboardNav}
                    tabBarOptions={{
                    }}
                    options={{

                        tabBarLabel: 'Dashboard',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons
                                name="briefcase-eye"
                                color={color}
                                size={25}>
                            </MaterialCommunityIcons>
                        ),
                    }}
                    listeners={({ navigation, route }) => ({
                        // Onpress Update....
                        tabPress: e => {
                            Animated.spring(tabOffsetValue, {
                                toValue: 0,
                                useNativeDriver: true
                            }).start()
                        }
                    })}
                />
                <BottomTab.Screen
                    name="employe"
                    component={GuardEmployeesNav}
                    tabBarOptions={{
                    }}
                    options={{

                        tabBarLabel: 'Employees',
                        tabBarIcon: ({ color }) => (
                            <FontAwesome
                                name="users"
                                color={color}
                                size={25}>
                            </FontAwesome>
                        ),
                    }}
                    listeners={({ navigation, route }) => ({
                        // Onpress Update....
                        tabPress: e => {
                            Animated.spring(tabOffsetValue, {
                                toValue: 0,
                                useNativeDriver: true
                            }).start()
                        }
                    })}
                />
                <BottomTab.Screen
                    name="attendence"
                    component={GuardAttendanceNav}
                    tabBarOptions={{
                    }}
                    options={{

                        tabBarLabel: 'Attendance',
                        tabBarIcon: ({ color }) => (
                            <Entypo
                                name="fingerprint"
                                color={color}
                                size={25}>
                            </Entypo>
                        ),
                    }}
                    listeners={({ navigation, route }) => ({
                        // Onpress Update....
                        tabPress: e => {
                            Animated.spring(tabOffsetValue, {
                                toValue: 0,
                                useNativeDriver: true
                            }).start()
                        }
                    })}
                />
                <BottomTab.Screen
                    name="GuardProfil"
                    component={GuardProfileNav}
                    tabBarOptions={{ indicatorStyle: { backgroundColor: 'green' } }}
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({ color }) => (
                            <FontAwesome
                                name="user-circle-o"
                                color={color}
                                size={25}></FontAwesome>
                        )
                    }}
                    listeners={({ navigation, route }) => ({
                        // Onpress Update....
                        tabPress: e => {
                            Animated.spring(tabOffsetValue, {
                                toValue: (getWidth() + swapAddValue) * 2,
                                useNativeDriver: true
                            }).start()
                        }
                    })}
                />
            </BottomTab.Navigator>
        </>
    )
}


const EmployeeLeaveNav = () => (
    <Stack.Navigator

        initialRouteName="EmployeesList"
        drawerContent={props => null}>
        <Stack.Screen
            options={{ headerShown: false }}
            name="LeaveTopBar"
            component={LeaveTopBar}
        />
        <Stack.Screen
            options={{ headerShown: false }}
            name="ApprovedLeaveApp"
            component={ApprovedLeaveApp}
        />
        <Stack.Screen
            options={{ headerShown: false }}
            name="PendingLeaveApp"
            component={PendingLeaveApp}
        />
        <Stack.Screen
            options={{ headerShown: false }}
            name="RejectedLeaveApp"
            component={RejectedLeaveApp}
        />

    </Stack.Navigator>
)
const EmployeeProfileNav = () => (
    <Stack.Navigator

        initialRouteName="EmployeeProfile"
        drawerContent={props => null}>
        <Stack.Screen
            options={{ headerShown: false }}
            name="EmployeeProfile"
            component={EmployeeProfile}
        />
        <Stack.Screen
            options={{ headerShown: false }}
            name="EmployeeEditProfile"
            component={EmployeeEditProfile}
        />

    </Stack.Navigator>
)
const EmployeeAttendenceNav = () => (
    <Stack.Navigator

        initialRouteName="EmployeeProfile"
        drawerContent={props => null}>
        <Stack.Screen
            options={{ headerShown: false }}
            name="EmployeeAttendanceReport"
            component={EmployeeAttendanceReport}
        />

    </Stack.Navigator>
)
const EmployeeCommitteeNav = () => (
    <Stack.Navigator

        initialRouteName="EmployeeProfile"
        drawerContent={props => null}>
        <Stack.Screen
            options={{ headerShown: false }}
            name="EmployeeCommittees"
            component={EmployeeCommittees}
        />
        <Stack.Screen
            options={{ headerShown: false }}
            name="EmployeeAssignedJob"
            component={EmployeeAssignedJob}
        />
        <Stack.Screen
            options={{ headerShown: false }}
            name="EmployeeApplicantDetail"
            component={EmployeeApplicantDetail}
        />

    </Stack.Navigator>
)
function EmployeeTabNav(props) {
    const {
        mainColor,
        backgroundColor,
        textDarkColor,
    } = useSelector(state => state.styles)
    const tabOffsetValue = useRef(new Animated.Value(0)).current
    const insets = useSafeAreaInsets()
    const swapAddValue = 0
    const fabWidth = 60

    return (
        <>
            <BottomTab.Navigator
                initialRouteName="desh" //todo: change it to Offers
                barStyle={{
                    backgroundColor: backgroundColor,
                    height: 70,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 3.84,
                    elevation: 5,
                    borderColor: 'red', borderWidth: 0,
                }}
                screenOptions={{
                }}
                shifting={false}
                labeled={true}
                activeColor={"purple"}
                inactiveColor={textDarkColor}
                sceneContainerStyle={{
                    borderColor: 'red', borderWidth: 0,
                }}
            >
                <BottomTab.Screen
                    name="employeeAttendance"
                    component={EmployeeAttendenceNav}
                    tabBarOptions={{
                    }}
                    options={{

                        tabBarLabel: 'Attendance',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons
                                name="briefcase-eye"
                                color={color}
                                size={25}>
                            </MaterialCommunityIcons>
                        ),
                    }}
                    listeners={({ navigation, route }) => ({
                        // Onpress Update....
                        tabPress: e => {
                            Animated.spring(tabOffsetValue, {
                                toValue: 0,
                                useNativeDriver: true
                            }).start()
                        }
                    })}
                />
                <BottomTab.Screen
                    name="leav"
                    component={EmployeeLeaveNav}
                    tabBarOptions={{
                    }}
                    options={{

                        tabBarLabel: 'LeaveApp',
                        tabBarIcon: ({ color }) => (
                            <FontAwesome
                                name="users"
                                color={color}
                                size={25}>
                            </FontAwesome>
                        ),
                    }}
                    listeners={({ navigation, route }) => ({
                        // Onpress Update....
                        tabPress: e => {
                            Animated.spring(tabOffsetValue, {
                                toValue: 0,
                                useNativeDriver: true
                            }).start()
                        }
                    })}
                />
                <BottomTab.Screen
                    name="employeeCommittees"
                    component={EmployeeCommitteeNav}
                    tabBarOptions={{
                    }}
                    options={{

                        tabBarLabel: 'Committee',
                        tabBarIcon: ({ color }) => (
                            <Entypo
                                name="fingerprint"
                                color={color}
                                size={25}>
                            </Entypo>
                        ),
                    }}
                    listeners={({ navigation, route }) => ({
                        // Onpress Update....
                        tabPress: e => {
                            Animated.spring(tabOffsetValue, {
                                toValue: 0,
                                useNativeDriver: true
                            }).start()
                        }
                    })}
                />
                <BottomTab.Screen
                    name="EmployeeProfil"
                    component={EmployeeProfileNav}
                    tabBarOptions={{ indicatorStyle: { backgroundColor: 'green' } }}
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({ color }) => (
                            <FontAwesome
                                name="user-circle-o"
                                color={color}
                                size={25}></FontAwesome>
                        )
                    }}
                    listeners={({ navigation, route }) => ({
                        // Onpress Update....
                        tabPress: e => {
                            Animated.spring(tabOffsetValue, {
                                toValue: (getWidth() + swapAddValue) * 2,
                                useNativeDriver: true
                            }).start()
                        }
                    })}
                />
            </BottomTab.Navigator>
        </>
    )
}

const DrawerNav = () => {

    const { user } = useGlobalContext()
    // const {
    //     user,
    // } = useSelector(state => state.auth)

    return (
        <Drawer.Navigator
            initialRouteName="AccountTabNav"
            drawerContent={props => <DrawerContent {...props} />}
        >
            {user?.role == "applicant" ?
                <Drawer.Screen
                    options={{ headerShown: false }}
                    name="AccountTabNav"
                    component={ApplicantTabNav}
                />
                :
                user?.role == "hr" ?
                    <Drawer.Screen
                        options={{ headerShown: false }}
                        name="AdminTabNav"
                        component={AdminTabNav}
                    />
                    :
                    user?.role == "guard" ?
                        <Drawer.Screen
                            options={{ headerShown: false }}
                            name="AdminTabNav"
                            component={GuardTabNav}
                        />
                        :
                        <Drawer.Screen
                            options={{ headerShown: false }}
                            name="AdminTabNav"
                            component={EmployeeTabNav}
                        />
            }
            <Drawer.Screen
                options={{ headerShown: false }}
                name="JobPost"
                component={JobPost}
            />
            <Drawer.Screen
                options={{ headerShown: false }}
                name="Attendence"
                component={Attendence}
            />
            <Drawer.Screen
                options={{ headerShown: false }}
                name="LeaveApplicant"
                component={LeaveApplicant}
            />
            <Drawer.Screen
                options={{ headerShown: false }}
                name="CommitteeMembers"
                component={CommitteeMembers}
            />
            <Drawer.Screen
                options={{ headerShown: false }}
                name="AdminJobApplications"
                component={AdminJobApplications}
            />
            {/* <Drawer.Screen
                options={{ headerShown: false }}
                name="GuardProfile"
                component={GuardProfile}
            /> */}
        </Drawer.Navigator>
    )
}


const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#006FA1',

    },
}

export default App = () => {
    const { updateUser, user } = useGlobalContext()
    // const { user } = useSelector(state => state.auth)



    const getUser = async () => {
        const user = await StorageManager.getData(StorageManager.storageKeys.USER)
        if (user) {
            updateUser(user)
        }
    }


    useEffect(() => {
        getUser()
    }, [])

    return (
        <NavigationContainer
            theme={MyTheme}
        >
            <AuthStack.Navigator
                screenOptions={{
                    headerMode: 'none'
                }}
            >
                {user ?
                    <AuthStack.Screen
                        name='DrawerNav'
                        component={DrawerNav}
                    />
                    :
                    <>
                        <AuthStack.Screen
                            name='StartedScreen'
                            component={StartedScreen}
                        />
                        <AuthStack.Screen
                            name='SignUp'
                            component={SignUp}
                        />
                        <AuthStack.Screen
                            name='LogIn'
                            component={LogIn}
                        />
                    </>

                }


            </AuthStack.Navigator>

        </NavigationContainer>
    )
}

