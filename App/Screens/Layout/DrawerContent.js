import React, { useState } from 'react';
import {
    Image,
    Platform,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import {
    getStatusBarHeight
} from 'react-native-status-bar-height';

import {
    DrawerItem
} from '@react-navigation/drawer';
import { Divider } from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import { useDispatch, useSelector } from 'react-redux';
import Usercircle from '../../Assets/Svgs/Usercircle.svg';
import { container, space, textStyle } from '../../Styles/CustomStyles';
import { ChangeUser } from '../Auth/Store/authSlice';
import JobPost from '../Admin/JobPost/JobPost';
import { StorageManager, useGlobalContext } from '../../Services2';

export default function DrawerContent({ navigation, state }) {
    const { updateUser, user } = useGlobalContext()
    const dispatch = useDispatch()
    const {
        textColor,
        mainColor,
        textOffColor,
        mainLighterColor,
        textLightColor,
        textBluecolor, buttoncolor
    } = useSelector(state => state.styles)

    const [show, setshow] = useState(false);

    var { index, routes } = state;
    var currentPage = routes[index].name;



    const onLogout = async () => {
        dispatch(ChangeUser(null))
        await StorageManager.deleteAll()
        updateUser(null)
    }
    return (
        <>
            {Platform.OS == 'ios' && (
                <View
                    style={{
                        backgroundColor: mainColor,
                        width: '100%',
                        height: getStatusBarHeight() + 30,
                    }}></View>
            )}
            
            {user?.role == "admin" ?
            <View style={{}}>
                <TouchableOpacity onPress={() => navigation.navigate("ProfileTopBar")}
                    style={
                        {
                            backgroundColor: mainColor,
                            paddingHorizontal: 15, flexDirection: "row"
                        }
                    }>
                    <View style={{
                        width: 55, height: 55, borderRadius: 100,
                        backgroundColor: "lightgray", justifyContent: "center",
                        alignItems: "center", marginBottom: 20
                    }}>
                        <Usercircle color={'#fff'} height={55} width={55} style={{}} />
                    </View>
                    <View style={{
                        flex: 1, justifyContent: "space-between",
                        flexDirection: "row"
                    }}>
                        <View style={[{ justifyContent: "center", marginBottom: 18 }]}>
                            <Text style={{
                                color: "#fff", marginLeft: 5,
                                fontWeight: "bold", fontSize: 18
                            }}>Haleema Sagheer</Text>
                            <Text style={{
                                color: "#fff", marginLeft: 5,
                                fontWeight: "bold", fontSize: 13
                            }}>HaleemaSagheer@gmail.com</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                {/* <Divider
                    style={{ borderWidth: 0.5, borderColor: "#fff", marginTop: 10 }}
                /> */}

                <View
                    style={{
                        borderTopWidth: 1,
                        borderColor: '#f4f4f4',
                        backgroundColor: 'transparent',
                        // marginTop: 10,
                        paddingHorizontal: 10,
                    }}>
                    <View style={{ justifyContent: 'flex-end', marginTop: 20 }}>
                        <DrawerItem
                            activeBackgroundColor="#D44B25"
                            activeTintColor="#fff"
                            inactiveBackgroundColor="transparent"
                            inactiveTintColor="#000"
                            focused={currentPage == 'Main'}
                            onPress={() => navigation.navigate('Main')}
                            labelStyle={[textStyle.p, { color: textColor, marginLeft: -12, fontWeight: "bold", fontSize: 15 }]}
                            icon={() => (
                                <MaterialCommunityIcons
                                    name="briefcase-check-outline"
                                    color={textColor}
                                    size={24}>
                                </MaterialCommunityIcons>
                            )}
                            label="Applictions"
                        />
                    </View>
                        <View style={{ flexDirection: "row" }}>
                            <DrawerItem
                                activeBackgroundColor="#D44B25"
                                activeTintColor="#fff"
                                inactiveBackgroundColor="transparent"
                                inactiveTintColor="#000"
                                focused={currentPage == 'setting'}
                                onPress={() => setshow(!show)}
                                style={{ width: 200, }}
                                labelStyle={[textStyle.p, { color: textColor, marginLeft: -12, fontWeight: "bold", fontSize: 15 }]}
                                icon={() => (
                                    <MaterialCommunityIcons
                                        name="briefcase-check-outline"
                                        color={textColor}
                                        size={24}>
                                    </MaterialCommunityIcons>
                                )}
                                label="Committee"
                            />
                            <TouchableOpacity
                                onPress={() => setshow(!show)}
                                style={{ justifyContent: "center" }}>
                                <Entypo name="chevron-down" size={20} color={textColor}></Entypo>
                            </TouchableOpacity>
                        </View>
                        {show ? (
                            <>
                                <DrawerItem
                                    activeBackgroundColor="#D44B25"
                                    activeTintColor="#fff"
                                    inactiveBackgroundColor="transparent"
                                    inactiveTintColor="#000"
                                    focused={currentPage == 'setting'}
                                    onPress={() => navigation.navigate('AllMembers')}
                                    labelStyle={[textStyle.p, { color: textColor, marginLeft: -25, fontWeight: "500", fontSize: 14 }]}
                                    icon={() => (
                                        <AntDesign
                                            name="addusergroup"
                                            size={15}
                                            color={textColor}
                                            style={{ marginLeft: 20 }}></AntDesign>
                                    )}
                                    label="All Members"
                                />
                                <DrawerItem
                                    activeBackgroundColor="#D44B25"
                                    activeTintColor="#fff"
                                    inactiveBackgroundColor="transparent"
                                    inactiveTintColor="#000"
                                    focused={currentPage == 'setting'}
                                    onPress={() => navigation.navigate('CommitteeMembers')}
                                    labelStyle={[textStyle.p, { color: textColor, marginLeft: -25, fontWeight: "500", fontSize: 14 }]}
                                    icon={() => (
                                        <FontAwesome
                                            name="users"
                                            size={16}
                                            color={textColor}
                                            style={{ marginLeft: 20 }}></FontAwesome>
                                    )}
                                    label="Committee Members"
                                />
                            </>
                        ) : null}
                        <View style={{ justifyContent: 'flex-end' }}>
                            <DrawerItem
                                activeBackgroundColor="#D44B25"
                                activeTintColor="#fff"
                                inactiveBackgroundColor="transparent"
                                inactiveTintColor="#000"
                                focused={currentPage == 'Committee'}
                                onPress={() => navigation.navigate("Committee")}
                                labelStyle={[textStyle.p, { color: textColor, marginLeft: -12, fontWeight: "bold", fontSize: 15 }]}
                                icon={() => (

                                    <Feather
                                        name="settings"
                                        size={24}
                                        color={textColor}
                                        style={{}}></Feather>
                                )}
                                label="Setting"
                            />
                        </View>
                        <View style={{ justifyContent: 'flex-end' }}>
                            <DrawerItem
                                activeBackgroundColor="#D44B25"
                                activeTintColor="#fff"
                                inactiveBackgroundColor="transparent"
                                inactiveTintColor="#000"
                                focused={currentPage == 'login'}
                                onPress={onLogout}
                                labelStyle={[textStyle.p, { color: { textColor }, marginLeft: -12, fontWeight: "bold", fontSize: 16 }]}
                                icon={() => (
                                    <MaterialIcons
                                        name="logout"
                                        color={textColor}
                                        size={24}></MaterialIcons>
                                )}
                                label="Sign Out"
                            />
                        </View>
                </View>
            </View>

                :

                <View style={{}}>
                    <TouchableOpacity
                        // onPress={() => navigation.navigate("ProfileTopBar")}
                        style={
                            {
                                backgroundColor: mainColor,
                                paddingHorizontal: 15, flexDirection: "row"
                            }
                        }>
                        <View style={{
                            width: 55, height: 55, borderRadius: 100,
                            backgroundColor: "lightgray", justifyContent: "center",
                            alignItems: "center", marginBottom: 20
                        }}>
                            <Usercircle color={'#fff'} height={55} width={55} style={{}} />
                        </View>
                        <View style={{
                            flex: 1, justifyContent: "space-between",
                            flexDirection: "row"
                        }}>
                            <View style={[{ justifyContent: "center", marginBottom: 18 }]}>
                                <Text style={{
                                    color: "#fff", marginLeft: 5,
                                    fontWeight: "bold", fontSize: 18
                                }}>Haleema Sagheer</Text>
                                <Text style={{
                                    color: "#fff", marginLeft: 5,
                                    fontWeight: "bold", fontSize: 13
                                }}>HaleemaSagheer@gmail.com</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    {/* <Divider
                    style={{ borderWidth: 0.5, borderColor: "#fff", marginTop: 10 }}
                /> */}

                    <View
                        style={{
                            borderTopWidth: 1,
                            borderColor: '#f4f4f4',
                            backgroundColor: 'transparent',
                            // marginTop: 10,
                            paddingHorizontal: 10,
                        }}>
                        <DrawerItem
                            activeBackgroundColor="#2776EA"
                            activeTintColor="#fff"
                            inactiveBackgroundColor="transparent"
                            inactiveTintColor="#000"
                            focused={currentPage == 'AdminProfile'}
                            style={{ marginTop: 20 }}
                            onPress={() => navigation.navigate('AdminProfileNav')}
                            labelStyle={[textStyle.p, { color: textColor, marginLeft: -12, fontWeight: "bold", fontSize: 16 }]}
                            icon={() => (
                                <FontAwesome name="user-circle-o" size={24} color={textColor}></FontAwesome>
                            )}
                            label="Profile"
                        />
                        <View style={{ justifyContent: 'flex-end' }}>
                            <DrawerItem
                                activeBackgroundColor="#D44B25"
                                activeTintColor="#fff"
                                inactiveBackgroundColor="transparent"
                                inactiveTintColor="#000"
                                focused={currentPage == 'JobsPost'}
                                onPress={() => navigation.navigate('JobsPost')}
                                labelStyle={[textStyle.p, { color: { textColor }, marginLeft: -12, fontWeight: "bold", fontSize: 16 }]}
                                icon={() => (
                                    <FontAwesome
                                        name="briefcase"
                                        color={textColor}
                                        size={24}>
                                    </FontAwesome>
                                )}
                                label="Jobs"
                            />
                        </View>
                        <View style={{ justifyContent: 'flex-end' }}>
                            <DrawerItem
                                activeBackgroundColor="#D44B25"
                                activeTintColor="#fff"
                                inactiveBackgroundColor="transparent"
                                inactiveTintColor="#000"
                                focused={currentPage == 'Main'}
                                onPress={() => navigation.navigate('Main')}
                                labelStyle={[textStyle.p, { color: { textColor }, marginLeft: -12, fontWeight: "bold", fontSize: 16 }]}
                                icon={() => (
                                    <MaterialCommunityIcons
                                        name="briefcase-check-outline"
                                        color={textColor}
                                        size={24}>
                                    </MaterialCommunityIcons>
                                )}
                                label="Applictions"
                            />
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <DrawerItem
                                activeBackgroundColor="#D44B25"
                                activeTintColor="#fff"
                                inactiveBackgroundColor="transparent"
                                inactiveTintColor="#000"
                                focused={currentPage == 'setting'}
                                onPress={() => (null)}
                                style={{ width: 200, }}
                                labelStyle={[textStyle.p, { color: textColor, marginLeft: -12, fontWeight: "bold", fontSize: 16 }]}
                                icon={() => (
                                    <Feather
                                        name="settings"
                                        size={24}
                                        color={textColor}
                                        style={{}}></Feather>
                                )}
                                label="Settings"
                            />
                            {/* <TouchableOpacity style={{ justifyContent: "center" }}>
                                <Entypo name="chevron-down" size={20} color={textColor}></Entypo>
                            </TouchableOpacity> */}
                        </View>
                        <View style={{ justifyContent: 'flex-end' }}>
                            <DrawerItem
                                activeBackgroundColor="#D44B25"
                                activeTintColor="#fff"
                                inactiveBackgroundColor="transparent"
                                inactiveTintColor="#000"
                                focused={currentPage == 'login'}
                                onPress={onLogout}
                                labelStyle={[textStyle.p, { color: { textColor }, marginLeft: -12, fontWeight: "bold", fontSize: 16 }]}
                                icon={() => (
                                    <MaterialIcons
                                        name="logout"
                                        color={textColor}
                                        size={24}>
                                    </MaterialIcons>
                                )}
                                label="Sign Out"
                            />
                        </View>
                    </View>
                </View>
            }
        </>
    );
}
