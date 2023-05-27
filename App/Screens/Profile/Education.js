import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import {
    Text,
    TouchableOpacity, View
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { useDispatch, useSelector } from 'react-redux';
import Delete from '../../Assets/Svgs/Delete.svg';
import EditIcon from '../../Assets/Svgs/EditIcon.svg';
import { changeAddEducationModal } from "./Store/MyProfileSlice";
import Ionicons from 'react-native-vector-icons/Ionicons';
import AddEducationModal from "./AddEducationModal";

function Education(props) {

    const defaultValues = {
        Quantity: "",
        MarketValue: "",
    }

    const dispatch = useDispatch()

    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        mode: 'onChange',
        defaultValues: defaultValues,
    });
    const {
        mainColor,
        mainLighterColor,
        backgroundColor,
        textColor,
        textOffColor,
        textLightColor, buttoncolor,
        backgroundDarkerColor,
        greenColor,
        lightbluecolor,
        redcolor,
        borderColor,
        blackcolor
    } = useSelector(state => state.styles)
    const [enableNotificationIcon, setEnableNotificationIcon] = useState(false)
    const data = [
        {
            Name: 'Test for Altra ',
            address: "Mon, Wed, Fri",
            textcolor: mainColor,
            color: "#5FAF67",
            status: "Paid",
        },
        {
            Name: 'Test for Altra ',
            address: "Mon, Wed, Fri",
            textcolor: greenColor,
            state: "California",
            color: "#FD3E3E",
            status: "Unpaid",
        },
        {
            Name: 'Test for Altra ',
            address: "Mon, Wed, Fri",
            textcolor: greenColor,
            state: "California",
            color: "#5FAF67",
            status: "Paid",
        },


    ];
    function AllAssets() {

        return data.map((item, key) => {

            return (
                <>
                    <View style={{
                        backgroundColor: backgroundDarkerColor, shadowColor: "#000",
                        paddingHorizontal: 10, borderRadius: 10, shadowOffset: {
                            width: 0,
                            height: 2,
                        }, shadowOpacity: 0.25, shadowRadius: 3.84,
                        elevation: 5, width: "100%", flex: 1,
                        marginTop: 10
                    }}>
                        <View style={{
                            marginTop: 20,
                            marginBottom: 10,
                            flexDirection: "row",
                            paddingHorizontal: 10,
                            justifyContent: "space-between"
                        }}>
                            <Text style={{
                                color: textLightColor,
                                // backgroundColor:"red",
                                fontSize: 14,
                                width: "40%",
                                fontWeight: "500"
                            }}>
                                {"Title :"}
                            </Text>
                            <Text style={{
                                color: borderColor,
                                fontSize: 12,
                                width: "40%",
                                fontWeight: "500"
                            }}>
                                {"BSCS"}
                            </Text>
                            <View style={{
                                flexDirection: "row", width: "20%",
                                justifyContent: "flex-end",marginTop:-10
                            }}>
                                <TouchableOpacity
                                    // onPress={() => props.navigation.navigate('EditProfile')}
                                    style={{
                                        height: 25, width: 25,
                                        borderRadius: 100, justifyContent: "center",
                                        alignItems: "center",
                                        backgroundColor: "lightgray", marginRight: 5
                                    }}>
                                    <EditIcon color={mainColor} height={12} width={12} style={{}} />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    // onPress={() => props.navigation.navigate('EditProfile')}
                                    style={{
                                        height: 25, width: 25,
                                        borderRadius: 100, justifyContent: "center",
                                        alignItems: "center",
                                        backgroundColor: "lightgray"
                                    }}>
                                    <Delete color={"#FF3B3B"} height={14} width={14} style={{}} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{
                            // marginTop: 10,
                            marginBottom: 10,
                            flexDirection: "row",
                            paddingHorizontal: 10,
                        }}>
                            <Text style={{
                                color: textLightColor,
                                fontSize: 12,
                                width: "40%",
                                fontWeight: "500"
                            }}>
                                {"Institute"}
                            </Text>
                            <Text style={{
                                color: borderColor,
                                fontSize: 12,
                                width: "60%",
                                fontWeight: "500"
                            }}>
                                {"BIIT"}
                            </Text>
                        </View>
                        <View style={{
                            // marginTop: 10,
                            marginBottom: 10,
                            flexDirection: "row",
                            paddingHorizontal: 10,
                        }}>
                            <Text style={{
                                color: textLightColor,
                                fontSize: 12,
                                width: "40%",
                                fontWeight: "500"
                            }}>
                                {"StartDate"}
                            </Text>
                            <Text style={{
                                color: borderColor,
                                fontSize: 12,
                                width: "60%",
                                fontWeight: "500"
                            }}>
                                {"10/04/2016"}
                            </Text>
                        </View>
                        <View style={{
                            // marginTop: 10,
                            marginBottom: 20,
                            flexDirection: "row",
                            paddingHorizontal: 10,
                        }}>
                            <Text style={{
                                color: textLightColor,
                                fontSize: 12,
                                width: "40%",
                                fontWeight: "500"
                            }}>
                                {"EndDate"}
                            </Text>
                            <Text style={{
                                color: borderColor,
                                fontSize: 12,
                                width: "60%",
                                fontWeight: "500"
                            }}>
                                {"10/04/2020"}
                            </Text>
                        </View>
                    </View>

                </>
            )
        })
    }

    return (
        <>
            <View style={{ flex: 1, backgroundColor: backgroundColor }}>
                <ScrollView
                    contentContainerStyle={{
                        backgroundColor: backgroundColor,
                        paddingHorizontal: 10,
                        paddingBottom: 100
                    }}>

                    <View style={{
                        justifyContent: "space-between",
                        marginTop: 30, width: "95%", alignSelf: "center"
                    }}>
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}>
                            <View>
                                <Text style={{
                                    color: borderColor,
                                    fontSize: 16,
                                    fontWeight: "bold"
                                }}>
                                    Education
                                </Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => {
                                    console.log("sdfs")
                                    dispatch(changeAddEducationModal(true))
                                }}
                                style={{
                                    backgroundColor: mainColor,
                                    height: 40,
                                    width: 150,
                                    justifyContent: "center",
                                    borderRadius: 8,

                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 14,
                                        color: "#fff",
                                        fontWeight: 'bold',
                                        alignSelf: "center",
                                    }}>
                                    Add Education
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            backgroundColor: backgroundColor,
                            marginBottom: 10, marginTop: 10
                        }}>
                            {AllAssets(data)}
                        </View>
                    </View>
                </ScrollView>
                <View style={{ backgroundColor: backgroundColor, height: 15 }} />
            </View>
            <AddEducationModal />
        </>
    );
};

export default Education;