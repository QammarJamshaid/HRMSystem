import React, { useEffect, useRef, useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSelector, useDispatch } from 'react-redux';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Divider, SearchBar } from 'react-native-elements';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Usercircle from '../../Assets/Svgs/Usercircle.svg';
import LogIn from "../Auth/LogIn";
import Profile from "./Profile";
import Education from "./Education";
import Experience from "./Experience";
import { DrawerActions } from '@react-navigation/native';


const Tab = createMaterialTopTabNavigator();

export default function ProfileTopBar(props) {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: mainColor
        },
        contentContainer: {
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            borderRadius: 10

        },
        content: {
            backgroundColor: "#fff",
            marginHorizontal: 20,
            marginVertical: 70,
            borderRadius: 10
        },
        content1: {
            backgroundColor: "#fff",
            marginHorizontal: 20,
            marginVertical: 70,
            borderRadius: 10,
            paddingHorizontal: 20
        },
        normalText: {
            fontSize: 12,
            fontWeight: 'normal',
            color: "#000",
        }
    }
    )

    const {
        mainColor,
        mainLighterColor,
        backgroundColor,
        textColor,
        modalColor,
        textOffColor, buttoncolor,
    } = useSelector(state => state.styles)

    return (
        <>
            <View style={styles.container}>

                <View style={{
                    height: getStatusBarHeight() + 50,
                    backgroundColor: backgroundColor,
                    justifyContent: 'flex-end',
                }}>

                    <View
                        style={{
                            marginBottom: 10,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            paddingHorizontal: 20,
                            borderColor: 'red', borderWidth: 0,
                        }}
                    >
                        <View style={{
                            flexDirection: "row", justifyContent: "center",
                            alignItems: "center",
                        }}>
                            <TouchableOpacity
                                onPress={() => DrawerActions.openDrawer()}
                            >
                                <EvilIcons
                                    name="navicon"
                                    size={26}
                                    color={"purple"}
                                // style={{marginLeft:10}}
                                />
                            </TouchableOpacity>
                        </View>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: "700",
                                color: textColor
                            }}
                        >
                            My Profile
                        </Text>
                        <View style={{
                            flexDirection: "row", justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <Usercircle color={'#fff'} height={30} width={30} style={{}} />
                        </View>


                    </View>
                </View>

                <View style={{
                    flex: 1, width: "100%",
                    alignSelf: "center",
                    backgroundColor: backgroundColor
                }}>
                    <Tab.Navigator
                        // tabBar={props =>
                        //     <CustomTabBar {...props} />
                        // }
                        style={{
                        }}
                        screenOptions={{
                            tabBarPressColor: "transparent",
                            // tabBarAndroidRipple:false,
                            tabBarGap: 6.7,
                            tabBarScrollEnabled: true,
                            tabBarActiveTintColor: 'white',
                            tabBarInactiveTintColor: textColor,
                            tabBarLabelStyle: {
                                fontSize: 12,
                                fontWeight: "bold",
                            },
                            tabBarItemStyle: {
                                borderWidth: 1, borderColor: 'lightgray',
                                borderRadius: 25,
                                padding: 0,
                                backgroundColor: 'transparent',
                                width: 120,
                                height: 48,
                            },
                            tabBarStyle: {
                                paddingBottom: 10,
                                // paddingTop:5,
                                shadowOpacity: 0,
                                elevation: 0,
                                backgroundColor: backgroundColor,
                                borderWidth: 0, borderColor: 'red',
                                width: "100%",
                                transform: [{ scaleX: .9 }, { scaleY: .9 }],
                                alignSelf: "center",
                            },
                            tabBarIndicatorStyle: {

                                backgroundColor: "purple",
                                height: 48,
                                width: 120,
                                marginBottom: 10,
                                borderRadius: 25,
                            },
                            sceneContainerStyle: {
                            },
                        }}
                    >
                        <Tab.Screen name="Personal" component={Profile} />
                        <Tab.Screen name="Education " component={Education} />
                        <Tab.Screen name="Experience " component={Experience} />
                    </Tab.Navigator>
                </View>

            </View>

        </>

    );
}
