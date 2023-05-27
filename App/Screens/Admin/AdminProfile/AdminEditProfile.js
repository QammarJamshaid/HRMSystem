import React, { useEffect, useRef, useState } from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity, TextInput, Image } from "react-native";
import { useForm, Controller } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { ScrollView } from "react-native-gesture-handler";
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function AdminEditProfile(props) {


    const defaultValues = {
        Quantity: "",
        MarketValue: "",
    }


    const dispatch = useDispatch()

    const {
        textColor,
        mainColor,
        backgroundColor,
        mainLighterColor,
        textLightColor, greenColor,
        textBluecolor, buttoncolor,
        textDarkColor
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
                                onPress={() => props.navigation.navigate('AdminProfile')}
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
                            backgroundColor: "#fff", borderColor: 'red', borderWidth: 0,
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
                                    <Controller
                                        control={control}
                                        rules={{
                                            required: true,
                                        }}
                                        render={({ field: { onChange, onBlur, value } }) => (
                                            <TextInput
                                                onChangeText={onChange}
                                                onBlur={onBlur}
                                                value={value}
                                                // error={errors.fullName}
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
                                        )}
                                        name="firstname"
                                        defaultValue=""
                                    />
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: 20, alignItems: "center" }}>
                                <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, width: "35%" }}>
                                    Last Name :
                                </Text>
                                <View style={{ alignSelf: "center", width: "65%", }}>
                                    <Controller
                                        control={control}
                                        rules={{
                                            required: true,
                                        }}
                                        render={({ field: { onChange, onBlur, value } }) => (
                                            <TextInput
                                                onChangeText={onChange}
                                                onBlur={onBlur}
                                                value={value}
                                                // error={errors.fullName}
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
                                        )}
                                        name="lastname"
                                        defaultValue=""
                                    />
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: 20, alignItems: "center" }}>
                                <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, width: "35%" }}>
                                    Phone :
                                </Text>
                                <View style={{ alignSelf: "center", width: "65%", }}>
                                    <Controller
                                        control={control}
                                        rules={{
                                            required: true,
                                        }}
                                        render={({ field: { onChange, onBlur, value } }) => (
                                            <TextInput
                                                onChangeText={onChange}
                                                onBlur={onBlur}
                                                value={value}
                                                // error={errors.fullName}
                                                placeholder="Phone"
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
                                        )}
                                        name="phone"
                                        defaultValue=""
                                    />
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: 20, alignItems: "center" }}>
                                <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, width: "35%" }}>
                                    Address :
                                </Text>
                                <View style={{ alignSelf: "center", width: "65%", }}>
                                    <Controller
                                        control={control}
                                        rules={{
                                            required: true,
                                        }}
                                        render={({ field: { onChange, onBlur, value } }) => (
                                            <TextInput
                                                onChangeText={onChange}
                                                onBlur={onBlur}
                                                value={value}
                                                // error={errors.fullName}
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
                                        )}
                                        name="address"
                                        defaultValue=""
                                    />
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: 20, alignItems: "center" }}>
                                <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, width: "35%" }}>
                                    City :
                                </Text>
                                <View style={{ alignSelf: "center", width: "65%", }}>
                                    <Controller
                                        control={control}
                                        rules={{
                                            required: true,
                                        }}
                                        render={({ field: { onChange, onBlur, value } }) => (
                                            <TextInput
                                                onChangeText={onChange}
                                                onBlur={onBlur}
                                                value={value}
                                                // error={errors.fullName}
                                                placeholder="City"
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
                                        )}
                                        name="city"
                                        defaultValue=""
                                    />
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: 20, alignItems: "center" }}>
                                <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, width: "35%" }}>
                                    State :
                                </Text>
                                <View style={{ alignSelf: "center", width: "65%", }}>
                                    <Controller
                                        control={control}
                                        rules={{
                                            required: true,
                                        }}
                                        render={({ field: { onChange, onBlur, value } }) => (
                                            <TextInput
                                                onChangeText={onChange}
                                                onBlur={onBlur}
                                                value={value}
                                                // error={errors.fullName}
                                                placeholder="State"
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
                                        )}
                                        name="state"
                                        defaultValue=""
                                    />
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: 20, alignItems: "center" }}>
                                <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, width: "35%" }}>
                                    Postal Code :
                                </Text>
                                <View style={{ alignSelf: "center", width: "65%", }}>
                                    <Controller
                                        control={control}
                                        rules={{
                                            required: true,
                                        }}
                                        render={({ field: { onChange, onBlur, value } }) => (
                                            <TextInput
                                                onChangeText={onChange}
                                                onBlur={onBlur}
                                                value={value}
                                                // error={errors.fullName}
                                                placeholder="Postal Code"
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
                                        )}
                                        name="postalCode"
                                        defaultValue=""
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
                    }}>
                        <Text style={{
                            fontSize: 14, fontWeight: '500',
                            color: "#fff", alignSelf: "center"
                        }}>
                            {"Save Changes"}
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View >

    );
}