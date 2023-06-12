import React, { useState } from "react";
import { Controller, useForm } from 'react-hook-form';
import {
    Text,
    TouchableOpacity, View
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { useDispatch, useSelector } from 'react-redux'
import Usercircle from '../../../Assets/Svgs/Usercircle.svg';
import { useGetEmployeeAllCommitteesQuery } from "../Services/EmployeeApi";
import { useGlobalContext } from "../../../Services2";
import { TextInput } from "react-native";
import BackIcon from '../../../Assets/Svgs/BackIcon.svg';

function EmployeeAssignedJob(props) {

    const defaultValues = {
        Quantity: "",
        MarketValue: "",
    }

    const dispatch = useDispatch()

    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        mode: 'onChange',
        defaultValues: defaultValues,
    });

    const { user }
        = useGlobalContext()

    const {
        mainColor,
        mainLighterColor,
        backgroundColor,
        textColor,
        textOffColor,
        buttoncolor,
        backgroundDarkerColor,
        greenColor,
        lightbluecolor,
        redcolor,
        borderColor,
        blackcolor
    } = useSelector(state => state.styles)

    const {
        data = [],
        isFetching,
    } = useGetEmployeeAllCommitteesQuery(user?.Uid)



    console.log("user:===>", user)
    console.log("EmployeeCommittee:::::::", data)

    function AllAssets() {

        return data[0].Committee.JobApplicationCommittees.map((
            {
                JobApplication: {
                    Job,
                    User,
                },
            },
            key
        ) => {

            return (
                <>
                    <View style={
                        {
                            backgroundColor: mainLighterColor,
                            borderRadius: 10,
                            width: "100%",
                            alignSelf: "center",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            }, shadowOpacity: 0.25, shadowRadius: 3.84,
                            elevation: 5,
                            marginTop:15
                            // flex: 1
                            // height: search ? "80%" : "30%",
                        }
                    }>
                        <View
                            style={{
                                // flexDirection: "row",
                                justifyContent: "center",
                                width: "100%",
                                alignSelf: "center",
                                // alignItems: "center",
                            }}
                        >
                            <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                                <Text style={{
                                    fontWeight: "500",
                                    color: borderColor, fontSize: 14
                                }}>
                                    {"Job Title :"}
                                </Text>
                            </View>
                            <View style={{
                                borderColor: 'red',
                                borderWidth: 0, width: "90%",
                                alignSelf: "center", marginTop: 10
                            }}>
                                <View
                                    style={{
                                        backgroundColor: backgroundColor,
                                        zIndex: 10,
                                        borderWidth: 0.3,
                                        borderColor: "lightgray",
                                        padding: 0,
                                        height: 35,
                                        borderRadius: 5,
                                        paddingLeft: 13,
                                        color: textColor,
                                        fontSize: 13,
                                        width: "100%",
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: textColor,
                                            fontSize: 14,
                                        }}
                                    >
                                        {Job.Title}
                                    </Text>
                                </View>
                            </View>
                            <View style={{ marginTop: 10, paddingHorizontal: 20 }}>
                                <Text style={{
                                    fontWeight: "500",
                                    color: borderColor, fontSize: 14
                                }}>
                                    {"Applicant :"}
                                </Text>
                            </View>
                            <View style={{
                                borderColor: 'red',
                                borderWidth: 0, width: "90%",
                                alignSelf: "center", marginTop: 10
                            }}>
                                <View
                                    style={{
                                        backgroundColor: backgroundColor,
                                        zIndex: 10,
                                        borderWidth: 0.3,
                                        borderColor: "lightgray",
                                        padding: 0,
                                        height: 35,
                                        borderRadius: 5,
                                        paddingLeft: 13,
                                        color: textColor,
                                        fontSize: 13,
                                        width: "100%",
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: textColor,
                                            fontSize: 14,
                                        }}
                                    >
                                        {User.Fname + " " + User.Lname}
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginBottom: 10 }} />
                    </View>

                </>
            )
        })
    }

    return (
        <>
            <View style={{ flex: 1, backgroundColor: backgroundColor }}>

                <View style={{
                    height: getStatusBarHeight() + 50,
                    backgroundColor: backgroundColor,
                    justifyContent: 'flex-end',
                    paddingHorizontal: 10,
                }}>

                    <View
                        style={{
                            // marginTop: 50,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            paddingHorizontal: 20,
                            borderColor: 'red', borderWidth: 0,
                            marginBottom: 10
                        }}
                    >
                        <View style={{
                            flexDirection: "row", justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <TouchableOpacity
                                onPress={() => props.navigation.goBack()}
                            >
                                <BackIcon name='burst-sale' height={14} width={14} color={textOffColor} />
                            </TouchableOpacity>
                        </View>
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: "bold",
                                color: textColor,
                                marginRight: 15
                            }}
                        >
                            {"Assigned Jobs"}
                        </Text>
                        <View style={{
                            flexDirection: "row", justifyContent: "center",
                            alignItems: "center"
                        }}>

                        </View>
                    </View>
                </View>
                <ScrollView
                    contentContainerStyle={{
                        backgroundColor: backgroundColor,
                        paddingHorizontal: 10,
                        paddingBottom: 100
                    }}>
                    <View style={{
                        justifyContent: "space-between",
                        marginTop: 20, width: "95%", alignSelf: "center"
                    }}>
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
        </>
    );
};

export default EmployeeAssignedJob;