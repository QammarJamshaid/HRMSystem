import React, { useEffect, useRef, useState } from "react";
import {
    View, Button, Text, StyleSheet, TouchableOpacity,
    TextInput, Image,
    ActivityIndicator
} from "react-native";
import { useForm, Controller } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { ScrollView } from "react-native-gesture-handler";
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
    ApiServices, StorageManager, flashSuccessMessage,
    useGlobalContext
} from '../../../Services2'
// import { ActivityIndicator } from "react-native-paper";

export default function EmployeeEditProfile(props) {


    const defaultValues = {
        Quantity: "",
        MarketValue: "",
    }
    const [showDatePicker, setShowDatePicker] = useState(false)
    const { updateUser, user } = useGlobalContext()
    const dispatch = useDispatch()

    const {
        textColor,
        mainColor,
        backgroundColor,
        mainLighterColor,
        textLighterColor, greenColor,
        textBluecolor, buttoncolor,
        textDarkColor
    } = useSelector(state => state.styles)
    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        mode: 'onChange',
        defaultValues: defaultValues,
    });
    const [saveChangeLoader, setSaveChangeLoader] = useState(false)
    const [firstName, setFirstName] = useState(user?.Fname)
    const [lastName, setLastName] = useState(user?.Lname)
    const [phoneNumber, setPhoneNumber] = useState(user?.mobile)
    const [address, setAddress] = useState(user?.address)
    const [cnic, setCnic] = useState(user?.cnic)
    const [dob, setDob] = useState(user?.dob)
    const onChangeFirstName = (text) => setFirstName(text)
    const onChangeLastName = (text) => setLastName(text)
    const onChangePhoneNumber = (text) => setPhoneNumber(text)
    const onChangeCnic = (text) => setCnic(text)
    const onChangeAddress = (text) => setAddress(text)

    const hideSaveChangeLoader = () => setSaveChangeLoader(false)
    const onSavePress = () => {
        setSaveChangeLoader(true)
        const data = {
            Fname: firstName,
            Lname: lastName,
            cnic: cnic,
            mobile: phoneNumber,
            dob: dob,
            address: address,
            Uid: user?.Uid,
            // gender: 'Female',
            // role: user?.role,
            // password: '123456'
        }
        ApiServices.updateUser(data).then(async () => {
            user.Fname = firstName,
                user.Lname = lastName,
                user.cnic = cnic,
                user.mobile = phoneNumber,
                user.dob = dob,
                user.address = address
            updateUser(user)
            await setData(storageKeys.USER, user)
            setSaveChangeLoader(false)
            flashSuccessMessage('Updated')
        })
            .catch(async () => {
                user.Fname = firstName,
                    user.Lname = lastName,
                    user.cnic = cnic,
                    user.mobile = phoneNumber,
                    user.dob = dob,
                    user.address = address
                updateUser(user)
                await setData(storageKeys.USER, user)
                setSaveChangeLoader(false)
                flashSuccessMessage('Updated')
            })
    }
    const onDatePickerVisible = () => setShowDatePicker(true)
    const onDatePickerInVisible = () => setShowDatePicker(false)

    const onDobSelection = (date) => {
        setShowDatePicker(false)
        setDob(moment(date).format('YYYY-MM-DD'))
    }
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
                justifyContent: 'flex-end'
            }}>
                <View
                    style={{
                        // marginTop: 50,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingHorizontal: 20,
                        borderColor: 'red', borderWidth: 0,
                        alignItems: "center"
                    }}
                >
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center", marginBottom: 10
                    }}>
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "center", alignItems: "center"
                        }}>
                            <TouchableOpacity
                                onPress={() => props.navigation.goBack()}
                            >
                                <Ionicons
                                    name="chevron-back"
                                    size={30}
                                    color={textColor}
                                // style={{marginLeft:10}}
                                />
                            </TouchableOpacity>
                        </View>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: "700",
                                color: textColor,
                                marginLeft: 10
                            }}
                        >
                            Edit Profile
                        </Text>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    </View>
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    width: "100%",
                    paddingBottom: 50
                }}>
                <View style={{
                    height: 20, width: "100%",
                    backgroundColor: backgroundColor,
                    marginTop: 10, paddingHorizontal: 20
                }}>
                    <Text style={{
                        color: textColor, opacity: 0.4,
                        fontSize: 16, fontWeight: "500"
                    }}>
                        {"MANAGE PROFILE"}
                    </Text>

                </View>
                <View style={{
                    paddingHorizontal: 20,
                    marginTop: 10,
                    backgroundColor: backgroundColor
                }}>
                    <TouchableOpacity
                        // onPress={() => props.navigation.navigate('Profile')}
                        style={{
                            flex: 1,
                            backgroundColor: "#FFFFFF", borderColor: 'red', borderWidth: 0,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5,
                            marginTop: 10, justifyContent: "center", borderRadius: 10

                        }}>
                        <View style={{ paddingHorizontal: 20, marginBottom: 20, justifyContent: "center", marginTop: 10 }}>
                            <View style={{ flexDirection: "row", marginTop: 20, alignItems: "center", }}>
                                <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, width: "35%" }}>
                                    First Name:
                                </Text>
                                <View style={{ alignSelf: "center", width: "65%", }}>
                                    <TextInput
                                        onChangeText={onChangeFirstName}
                                        value={firstName}
                                        placeholder="First Name"
                                        placeholderTextColor={textDarkColor}
                                        style={{
                                            backgroundColor: "#fff",
                                            zIndex: 10,
                                            height: 35,
                                            borderRadius: 5,
                                            paddingLeft: 13,
                                            color: textColor,
                                            fontSize: 13,
                                            width: "100%",
                                            borderWidth: 0.5,
                                            borderColor: textDarkColor
                                        }}
                                    />
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: 20, alignItems: "center" }}>
                                <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, width: "35%" }}>
                                    Last Name :
                                </Text>
                                <View style={{ alignSelf: "center", width: "65%", }}>
                                    <TextInput
                                        onChangeText={onChangeLastName}
                                        value={lastName}
                                        placeholder="Last Name"
                                        placeholderTextColor={textDarkColor}
                                        style={{
                                            backgroundColor: "#fff",
                                            zIndex: 10,
                                            height: 35,
                                            borderRadius: 5,
                                            paddingLeft: 13,
                                            color: textColor,
                                            fontSize: 13,
                                            width: "100%",
                                            borderWidth: 0.5,
                                            borderColor: textDarkColor
                                        }}
                                    />
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: 20, alignItems: "center" }}>
                                <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, width: "35%" }}>
                                    Cnic :
                                </Text>
                                <View style={{ alignSelf: "center", width: "65%", }}>
                                    <TextInput
                                        onChangeText={onChangeCnic}
                                        value={cnic}
                                        placeholder="Cnic"
                                        placeholderTextColor={textDarkColor}
                                        style={{
                                            backgroundColor: "#fff",
                                            zIndex: 10,
                                            height: 35,
                                            borderRadius: 5,
                                            paddingLeft: 13,
                                            color: textColor,
                                            fontSize: 13,
                                            width: "100%",
                                            borderWidth: 0.5,
                                            borderColor: textDarkColor
                                        }}
                                    />
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: 20, alignItems: "center" }}>
                                <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, width: "35%" }}>
                                    Phone Number :
                                </Text>
                                <View style={{ alignSelf: "center", width: "65%", }}>
                                    <TextInput
                                        onChangeText={onChangePhoneNumber}
                                        value={phoneNumber}
                                        placeholder="Phone number"
                                        placeholderTextColor={textDarkColor}
                                        style={{
                                            backgroundColor: "#fff",
                                            zIndex: 10,
                                            height: 35,
                                            borderRadius: 5,
                                            paddingLeft: 13,
                                            color: textColor,
                                            fontSize: 13,
                                            width: "100%",
                                            borderWidth: 0.5,
                                            borderColor: textDarkColor
                                        }}
                                    />
                                </View>
                            </View>

                            <View style={{ flexDirection: "row", marginTop: 20, alignItems: "center" }}>
                                <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, width: "35%" }}>
                                    Dob :
                                </Text>
                                <View style={{ alignSelf: "center", width: "65%", }}>
                                    <TouchableOpacity
                                        style={{
                                            backgroundColor: "#fff",
                                            zIndex: 10,
                                            height: 35,
                                            borderRadius: 5,
                                            paddingLeft: 13,
                                            width: "100%",
                                            borderWidth: 0.5,
                                            borderColor: textDarkColor,
                                            justifyContent: 'center'
                                        }}
                                    // onPress={onDatePickerVisible}
                                    >
                                        <Text style={{ color: !dob ? textDarkColor : textColor, fontSize: 13 }}>
                                            {!dob ? 'Date of birth' : dob}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={{ flexDirection: "row", marginTop: 20, alignItems: "center" }}>
                                <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, width: "35%" }}>
                                    Address :
                                </Text>
                                <View style={{ alignSelf: "center", width: "65%", }}>
                                    <TextInput
                                        onChangeText={onChangeAddress}
                                        value={address}
                                        placeholder="Address"
                                        placeholderTextColor={textDarkColor}
                                        style={{
                                            backgroundColor: "#fff",
                                            zIndex: 10,
                                            height: 35,
                                            borderRadius: 5,
                                            paddingLeft: 13,
                                            color: textColor,
                                            fontSize: 13,
                                            width: "100%",
                                            borderWidth: 0.5,
                                            borderColor: textDarkColor
                                        }}
                                    />
                                </View>
                            </View>
                        </View>

                    </TouchableOpacity>
                </View>

                <View style={{
                    flexDirection: "row", marginTop: 30,
                    justifyContent: "flex-end",
                    paddingHorizontal: 20, marginBottom: 30
                }}>
                    <TouchableOpacity style={{
                        justifyContent: "center", borderWidth: 0.5,
                        borderColor: textColor, marginRight: 10,
                        height: 40, width: 100, borderRadius: 5,
                    }}>
                        <Text style={{
                            fontSize: 14, fontWeight: '500',
                            color: textColor, alignSelf: "center"
                        }}>
                            {"Cancel"}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        justifyContent: "center", height: 40,
                        width: 120, paddingLeft: 10,
                        borderRadius: 5, backgroundColor: mainColor
                    }}
                        onPress={onSavePress}
                    >
                        <Text style={{
                            fontSize: 14, fontWeight: '500',
                            color: "#fff", alignSelf: "center"
                        }}>
                            {
                                saveChangeLoader ? <ActivityIndicator color={'#fff'} size={'small'} />
                                    :
                                    "Save Changes"
                            }
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            {
                showDatePicker &&
                <DateTimePicker
                    visible={true}
                    onClose={onDatePickerInVisible}
                    selectedDate={onDobSelection}
                />
            }
        </View >

    );
}