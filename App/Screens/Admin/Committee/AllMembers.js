import React, { useEffect, useState, useRef } from 'react';
import {
    Text, View, TouchableOpacity,
    FlatList, Image
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import {
    useForm,
    Controller
} from 'react-hook-form';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ms, mvs, s, vs } from 'react-native-size-matters';
import { ScrollView } from 'react-native-gesture-handler';
import { useGetAllMemberQuery } from './Services/CommitteeApi';
import { baseUrl } from '../../../Config/baseURL';
import employeeImages from '../../../Global/EmployeeImages';


function AllMembers(props) {
    const defaultValues = {
        locationIds: [],
        conditionIds: [],
    }

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
        watch
    } = useForm({
        mode: 'onChange',
        defaultValues,
    });

    const dispatch = useDispatch()
    const {
        mainColor,
        mainLighterColor,
        textOffColor,
        backgroundColor,
        textColor,
        textLighterColor, buttoncolor,
        borderColor,
        greenColor,
    } = useSelector(state => state.styles)

    useEffect(() => {
    }, [])
    const ReportData = [
        {
            // icon: <ClockIcon color={{}} height={40} width={40} style={{}} />,
            title: 'Clock In /Clock Out',
        },
        {
            // icon: <ClockIcon color={{}} height={40} width={40} style={{}} />,
            title: 'Clock In /Clock Out',
        },
        {
            // icon: <ClockIcon color={{}} height={40} width={40} style={{}} />,
            title: 'Clock In /Clock Out',
        },
        {
            // icon: <ClockIcon color={{}} height={40} width={40} style={{}} />,
            title: 'Clock In /Clock Out',
        },
        {
            // icon: <ClockIcon color={{}} height={40} width={40} style={{}} />,
            title: 'Clock In /Clock Out',
        },
        {
            // icon: <ClockIcon color={{}} height={40} width={40} style={{}} />,
            title: 'Clock In /Clock Out',
        },
        {
            // icon: <ClockIcon color={{}} height={40} width={40} style={{}} />,
            title: 'Clock In /Clock Out',
        },
    ]
    const {
        data = [],
        isFetching,
    } = useGetAllMemberQuery();
    console.log("AllMemberData::::::::::", data)
    console.log("AllMemberImage::::::::::", baseUrl + data?.[0]?.image)

    function AllHead({ item, index }) {
        return data.map((item, key) => {
            const imageSource = employeeImages[item.image];

            return (
                <TouchableOpacity
                    onPress={() => props.navigation.navigate("EmployeeDetail", { item: item })}
                    style={{
                        height: s(90), width: s(145),
                        marginLeft: s(15),
                        alignSelf: "center",
                        backgroundColor: backgroundColor,
                        borderColor: 'red', borderWidth: 0,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        }, shadowOpacity: 0.25, shadowRadius: 3.84,
                        elevation: 5, borderRadius: 8, alignItems: "center",
                        justifyContent: "center", marginTop: 40
                    }}>
                    <View style={{
                        height: 65, width: 65, top: -30,
                        borderRadius: 100, backgroundColor: mainColor,
                        alignItems: "center", justifyContent: "center"
                    }}>
                        {item.image && imageSource ? (
                            <Image
                                source={imageSource}
                                style={{ height: 65, width: 65, alignSelf: 'center', borderRadius: 100 }}
                            />
                        ) : null}
                        {/* <EmergencyStockIcon color={{ mainColor }} height={22} width={22} style={{}} /> */}
                    </View>
                    <View style={{
                        alignItems: "center",
                        justifyContent: "center", top: -20
                    }}>
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 14, color: textOffColor
                        }}>
                            {item.Fname + item.Lname}
                        </Text>
                    </View>
                </TouchableOpacity>
            )
        })
    }
    return (
        <>
            <View style={{ flex: 1, backgroundColor: backgroundColor, }}>
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
                                        size={24}
                                        color={borderColor}
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
                                All Employees
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
                <ScrollView
                    contentContainerStyle={{
                        paddingBottom: 50,
                        backgroundColor: backgroundColor,
                        borderColor: 'red',
                        borderWidth: 0,
                        alignItems: 'center',
                        marginLeft: 10,
                        borderRadius: 8,
                        marginTop: 20
                    }}>
                    <View style={{
                        flexDirection: "row",
                        width: "100%",
                        flexWrap: "wrap",
                        marginRight: s(20)
                    }}>
                        <AllHead />
                    </View>
                </ScrollView>
            </View>
        </>
    )
}

export default AllMembers