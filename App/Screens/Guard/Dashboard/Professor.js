import React, { useEffect, useState, useRef } from 'react';
import {
    Text, View, TouchableOpacity,
    FlatList, TextInput
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
// import { SearchBar } from 'react-native-elements';
import ThreeDotIcon from '../../../Assets/Svgs/ThreeDotIcon.svg'
import Usercircle from '../../../Assets/Svgs/Usercircle.svg'
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
    useForm,
    Controller
} from 'react-hook-form';
import {
    Menu,
    MenuProvider,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from "react-native-popup-menu";
import AttendenceStatusModal from './AttendenceStatusModal';
import { changeAttendenceStatusModal } from './Store/AttendenceSlice';
function Professor(props) {
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
        backgroundColor,
        textColor,
        modalColor,
        textLightColor, buttoncolor,
        borderColor,
    } = useSelector(state => state.styles)

    const professorList = [
        {
            technician: 'Plumbing Technician :',
            name: "Johan Doe",
            type: "Professors"
        },
        {
            technician: 'Customer Name :',
            name: "Alex Brooklyn",
            type: "Professors"
        },
        {
            technician: 'Date :',
            name: "Alex henry",
            type: "Professors"
        },
        {
            technician: 'Type Of Form :',
            name: "Mark jay",
            type: "Professors"
        },

    ];
    function renderItems({ item, index }) {
        return (
            <View style={{
                flex: 1, width: "90%", alignSelf: "center",
                backgroundColor: backgroundColor,
                borderColor: 'red', borderWidth: 0,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5,
                marginTop: 10, borderRadius: 8,
                paddingHorizontal: 10,
                marginBottom: 10,
                // padding: 15
            }}>
                <View style={{
                    width: 50, alignSelf: "flex-end",
                    height: 50,
                    flexDirection: "row", zIndex: 100,
                }}>
                    <MenuProvider style={{
                        height: 50, alignSelf: "flex-end",
                        justifyContent: "center"
                    }}>
                        <Menu style={{ backgroundColor: backgroundColor }}>
                            <MenuTrigger
                                customStyles={{
                                    triggerWrapper: {
                                        marginTop: -10,
                                        zIndex: 100,
                                        with: 100, backgroundColor: backgroundColor
                                    },
                                }}
                            >
                                <ThreeDotIcon color={{ mainColor }}
                                    height={16} width={16} style={{}} />
                            </MenuTrigger>
                            <MenuOptions
                                optionsContainerStyle={{
                                    // borderColor: 'gray', borderWidth: 1,
                                    flex: 1, backgroundColor: "lightgray",
                                }}
                            >
                                <MenuOption onSelect={() => {
                                    dispatch(changeAttendenceStatusModal(true))
                                }
                                } text="CheckIn/Out" />
                                {/* <MenuOption onSelect={() => alert(`Delete`)} text="Delete" /> */}
                            </MenuOptions>
                        </Menu>
                    </MenuProvider>
                </View>
                <View style={{
                    flexDirection: "row", justifyContent: "space-between",
                    marginBottom: 10, alignItems: "center", marginTop: -40
                }}>
                    <TouchableOpacity
                        style={{ width: "15%" }}
                        onPress={() => props.navigation.navigate("ProfileTopBar")}
                    >
                        <Usercircle color={{ mainColor }} height={50} width={50} style={{}} />
                    </TouchableOpacity>
                    <View style={{ width: "83%", marginTop: 5 }}>
                        <View style={{ flexDirection: "row", }}>
                            <Text style={{
                                color: textColor, fontSize: 14,
                                fontWeight: "700", width: "67%"
                            }}>
                                {item.name}
                            </Text>
                        </View>
                        <View style={{
                            // flexDirection: "row",
                            marginTop: 5,
                            // justifyContent: "space-between"
                        }}>
                            <Text style={{
                                color: borderColor, fontSize: 12,
                                fontWeight: "500", width: "67%"
                            }}>
                                {item.type}
                            </Text>
                            {/* <Text style={{
                                color: textLightColor, fontSize: 12,
                                fontWeight: "500",
                            }}>
                                {"01/23/2023"}
                            </Text> */}
                        </View>
                    </View>
                </View>
            </View>
        )
    }
    useEffect(() => {
    }, [])

    return (
        <>
            <View style={{
                flex: 1,
                backgroundColor: backgroundColor,
                paddingBottom: 70
            }}>
                <View style={{
                    height: getStatusBarHeight() + 60,
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
                                Professors
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
                <View style={{
                    width: "100%",
                    marginTop: 10
                }}>
                    <FlatList
                        data={professorList}
                        ListFooterComponent={() => <View style={{ height: 20 }} />}
                        renderItem={renderItems}
                        keyExtractor={(item, index) => index}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>
            <AttendenceStatusModal />
        </>
    )
}

export default Professor