import React, { useEffect, useRef, useState } from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity, TextInput, Image } from "react-native";
import { useForm, Controller } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { Divider } from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";
import CamerIcon from '../../../Assets/Svgs/CamerIcon.svg';
import EditIcon from '../../../Assets/Svgs/EditIcon.svg';
import Usercircle from '../../../Assets/Svgs/Usercircle.svg';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { useGlobalContext } from '../../../Services2'

export default function EmployeeProfile(props) {


    const defaultValues = {
        Quantity: "",
        MarketValue: "",
    }

    const { user } = useGlobalContext()
    const dispatch = useDispatch()

    const {
        textColor,
        mainColor,
        backgroundDarkerColor,
        backgroundColor,
        textLighterColor, greenColor,
        textBluecolor, buttoncolor
    } = useSelector(state => state.styles)
    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        mode: 'onChange',
        defaultValues: defaultValues,
    });
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: backgroundColor
            }}
        >
            <View style={{
                height: getStatusBarHeight() + 50,
                backgroundColor: backgroundColor,
                justifyContent: 'flex-end',
                paddingHorizontal: 10,
            }}>

                <View
                    style={{
                        marginBottom: 10,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingHorizontal: 10,
                        borderColor: 'red', borderWidth: 0,
                    }}
                >
                    <View style={{
                        flexDirection: "row", justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <TouchableOpacity
                            onPress={() => props.navigation.openDrawer()}
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
                        Profile
                    </Text>
                    <View style={{
                        flexDirection: "row", justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Usercircle color={'#fff'} height={24} width={24} style={{}} />
                    </View>


                </View>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ width: "100%", paddingBottom: 50 }}>
                <View style={{
                    height: 140, width: "100%",
                    backgroundColor: backgroundColor,
                    justifyContent: "center", alignItems: "center"
                }}>
                    <View style={{
                        height: 100, width: 100,
                        borderRadius: 100, backgroundColor: "gray",
                    }}>
                        <Image
                            source={require('../../../Assets/Images/User01.png')}
                            style={{
                                width: 100, height: 100,
                                alignSelf: "center", borderRadius: 100,
                            }}
                        />
                    </View>
                    <TouchableOpacity
                        //  onPress={() => props.navigation.navigate('EditProfile')}
                        style={{
                            height: 35, width: 35, borderRadius: 100,
                            justifyContent: "center", alignItems: "center",
                            position: "absolute", top: 90,
                            left: 200, backgroundColor: mainColor
                        }}>
                        <CamerIcon color={mainColor} height={25} width={25} style={{}} />
                    </TouchableOpacity>
                </View>

                <View style={{ paddingHorizontal: 20, backgroundColor: backgroundColor, }}>
                    <TouchableOpacity
                        // onPress={() => props.navigation.navigate('AdminEditProfile')}
                        style={{
                            flex: 1,
                            backgroundColor: "#fff", borderColor: 'red', borderWidth: 0,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5,
                            marginTop: 10, justifyContent: "center", borderRadius: 10

                        }}>
                        <View style={{ paddingHorizontal: 20, marginBottom: 20, justifyContent: "center", marginTop: 10 }}>
                            <View style={{
                                flexDirection: "row", marginTop: 10, zIndex: 30,
                                alignItems: "center", justifyContent: "space-between"
                            }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: textColor, }}>
                                    {"MANAGE PROFILE"}
                                </Text>
                                <TouchableOpacity
                                    onPress={() => props.navigation.navigate('EmployeeEditProfile', { user: user })}
                                    style={{
                                        height: 35, width: 35, borderRadius: 100, justifyContent: "center",
                                        alignItems: "center", backgroundColor: "lightgray"
                                    }}>
                                    <EditIcon color={mainColor} height={18} width={18} style={{}} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: 20, }}>
                                <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, opacity: 0.4, width: 100 }}>
                                    First Name:
                                </Text>
                                <View style={{ justifyContent: "center", }}>
                                    <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, opacity: 0.6, width: 30 }}>
                                        {":"}
                                    </Text>
                                </View>
                                <View style={{ justifyContent: "center", }}>
                                    <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, }}>
                                        {user.Fname}
                                    </Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: 20, }}>
                                <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, opacity: 0.4, width: 100 }}>
                                    Last Name:
                                </Text>
                                <View style={{ justifyContent: "center", }}>
                                    <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, opacity: 0.6, width: 30 }}>
                                        {":"}
                                    </Text>
                                </View>
                                <View style={{ justifyContent: "center", }}>
                                    <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, }}>
                                        {user.Lname}
                                    </Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: 20, }}>
                                <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, opacity: 0.4, width: 100 }}>
                                    Email:
                                </Text>
                                <View style={{ justifyContent: "center" }}>
                                    <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, opacity: 0.6, width: 30 }}>
                                        {":"}
                                    </Text>
                                </View>
                                <View style={{ justifyContent: "center", }}>
                                    <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, }}>
                                        {user.email}
                                    </Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: 20, }}>
                                <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, opacity: 0.4, width: 100 }}>
                                    Phone :
                                </Text>
                                <View style={{ justifyContent: "center" }}>
                                    <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, opacity: 0.6, width: 30 }}>
                                        {":"}
                                    </Text>
                                </View>
                                <View style={{ justifyContent: "center", }}>
                                    <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, }}>
                                        {user.mobile}
                                    </Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: 20, }}>
                                <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, opacity: 0.4, width: 100 }}>
                                    Address:
                                </Text>
                                <View style={{ justifyContent: "center" }}>
                                    <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, opacity: 0.6, width: 30 }}>
                                        {":"}
                                    </Text>
                                </View>
                                <View style={{ justifyContent: "center", }}>
                                    <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, }}>
                                        {user.address}
                                    </Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: 20, }}>
                                <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, opacity: 0.4, width: 100 }}>
                                    role:
                                </Text>
                                <View style={{ justifyContent: "center" }}>
                                    <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, opacity: 0.6, width: 30 }}>
                                        {":"}
                                    </Text>
                                </View>
                                <View style={{ justifyContent: "center", }}>
                                    <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, }}>
                                        {user.role}
                                    </Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: 20, }}>
                                <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, opacity: 0.4, width: 100 }}>
                                    CNIC:
                                </Text>
                                <View style={{ justifyContent: "center" }}>
                                    <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, opacity: 0.6, width: 30 }}>
                                        {":"}
                                    </Text>
                                </View>
                                <View style={{ justifyContent: "center", }}>
                                    <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, }}>
                                        {user.cnic}
                                    </Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: 20, }}>
                                <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, opacity: 0.4, width: 100 }}>
                                    Date Of Birth:
                                </Text>
                                <View style={{ justifyContent: "center" }}>
                                    <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, opacity: 0.6, width: 30 }}>
                                        {":"}
                                    </Text>
                                </View>
                                <View style={{ justifyContent: "center", }}>
                                    <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, }}>
                                        {user.dob}
                                    </Text>
                                </View>
                            </View>
                        </View>


                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View >

    );
}