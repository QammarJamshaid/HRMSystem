import React, { useState } from "react";
import { Controller, useForm } from 'react-hook-form';
import {
    Text,
    TouchableOpacity, View
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { useDispatch, useSelector } from 'react-redux';
import DropDownPicker from 'react-native-dropdown-picker';
import Usercircle from '../../../Assets/Svgs/Usercircle.svg';
import { useGetApprovedLeaveAppQuery } from "../Services/EmployeeApi";



function ApprovedLeaveApp(props) {

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
    const {
        data = [],
        isFetching,
    } = useGetApprovedLeaveAppQuery();
    console.log("Approved Data:::::",data)
    const data1 = [
        {
            jobTitle: 'React',
            applicantName: "Haleema",
            leaveType: "Sick",
            textcolor: mainColor,
            color: "#5FAF67",
            status: "Pending",
        },
        {
            jobTitle: 'Ios',
            applicantName: "Qammar",
            leaveType: "Unpaid",
            textcolor: greenColor,
            state: "California",
            color: "#5FAF67",
            status: "Approved",
        },
        {
            jobTitle: 'Web',
            applicantName: "Saad",
            leaveType: "Paid",
            textcolor: greenColor,
            state: "California",
            color: "#5FAF67",
            status: "Rejected",
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
                        }}>
                            <Text style={{
                                color: borderColor,
                                fontSize: 14,
                                width: "40%",
                                fontWeight: "500"
                            }}>
                                {"Applicant Name"}
                            </Text>
                            <Text style={{
                                color: borderColor,
                                fontSize: 14,
                                width: "60%",
                                fontWeight: "500",
                            }}>
                                {":   " + item.Fname}
                            </Text>
                        </View>
                        <View style={{
                            marginBottom: 10,
                            flexDirection: "row",
                            paddingHorizontal: 10,
                        }}>
                            <Text style={{
                                color: borderColor,
                                fontSize: 14,
                                width: "40%",
                                fontWeight: "500"
                            }}>
                                {"Job Role"}
                            </Text>
                            <Text style={{
                                color: borderColor,
                                fontSize: 14,
                                width: "60%",
                                fontWeight: "500"
                            }}>
                                {':  ' + item.role}
                            </Text>
                        </View>
                        <View style={{
                            // marginTop: 10,
                            marginBottom: 20,
                            flexDirection: "row",
                            paddingHorizontal: 10,
                        }}>
                            <Text style={{
                                color: borderColor,
                                fontSize: 14,
                                width: "40%",
                                fontWeight: "500"
                            }}>
                                {"Leave Type"}
                            </Text>
                            <Text style={{
                                color: item.color,
                                fontSize: 14,
                                width: "60%",
                                fontWeight: "500"
                            }}>
                                {':  ' + item.leavetype}
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

                {/* <View style={{
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
                            Leave Applications
                        </Text>
                        <View style={{
                            flexDirection: "row", justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <Usercircle color={'#fff'} height={30} width={30} style={{}} />
                        </View>


                    </View>
                </View> */}
                <ScrollView
                    contentContainerStyle={{
                        backgroundColor: backgroundColor,
                        paddingHorizontal: 10,
                        paddingBottom: 100,
                    }}>
                    <View style={{
                        justifyContent: "space-between",
                        marginTop: 20, width: "95%", alignSelf: "center"
                    }}>

                        <View style={{
                            backgroundColor: backgroundColor,
                            marginBottom: 10,
                        }}>
                            {AllAssets(data1)}
                        </View>
                    </View>
                </ScrollView>
                <View style={{ backgroundColor: backgroundColor, height: 15 }} />
            </View>
        </>
    );
};

export default ApprovedLeaveApp;