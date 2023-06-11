import moment from 'moment';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from "react";
import {
    TouchableOpacity, View, Text,
    TextInput, StyleSheet, Dimensions, FlatList,
    Image, Button, RefreshControl,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { Divider } from 'react-native-elements';
import Usercircle from '../../../Assets/Svgs/Usercircle.svg';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { ScrollView } from 'react-native-gesture-handler';
import Star from '../../../Assets/Svgs/Star.svg'
import Forwardicon from '../../../Assets/Svgs/Forwardicon.svg'
import EvilIcons from 'react-native-vector-icons/EvilIcons';


function Dashboard(props) {

    const dispatch = useDispatch()

    const defaultValues = {
        Quantity: "",
        MarketValue: "",
    }

    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        mode: 'onChange',
        defaultValues: defaultValues,
    });
    const {
        mainColor,
        mainLighterColor,
        backgroundColor,
        textColor,
        modalColor,
        textLighterColor, buttoncolor,
        orangeColor,
        greenColor,
        lightbluecolor,
        redcolor,
        borderColor,
        blackcolor
    } = useSelector(state => state.styles)

    useEffect(() => {
    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
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
                        Dashboard
                    </Text>
                    <View style={{
                        flexDirection: "row", justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Usercircle color={'#fff'} height={24} width={24} style={{}} />
                    </View>


                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    justifyContent: "center",
                    alignItems: "center", marginTop: 30,
                }}
                style={{
                    flex: 1, backgroundColor: backgroundColor,
                    paddingHorizontal: 10,
                }}>
                <View style={{

                    backgroundColor: "#fff", borderColor: 'red', borderWidth: 0, shadowColor: "#000",
                    paddingHorizontal: 10, borderRadius: 5, shadowOffset: {
                        width: 0,
                        height: 2,
                    }, shadowOpacity: 0.25, shadowRadius: 3.84, alignSelf: "center",
                    elevation: 5, height: 150, width: "95%", marginBottom: 20,
                    flexDirection: "row", justifyContent: "space-between"

                }}>
                    <View style={{}}>
                        <Text style={{ color: textColor, fontWeight: "600", fontSize: 18, marginTop: 10 }}>
                            {"Hi Haleema,"}
                        </Text>
                        <Text style={{ color: textColor, fontWeight: "600", fontSize: 18, marginTop: 10 }}>
                            {"Have a good day!"}
                        </Text>
                        <Star color={"#000"} height={70} width={70} style={{ color: textColor, marginTop: -20 }} />
                    </View>

                    <Image
                        source={require('../../../Assets/Images/UserImg.png')}
                        style={{ width: "50%", height: 160, alignSelf: "center", borderRadius: 5, marginTop: -10 }}
                    />

                </View>

                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 10, width: "95%",
                    alignSelf: "center"
                }}>
                    <TouchableOpacity
                        // onPress={() => props.navigation.navigate("FindWork")}
                        style={{
                            height: 150, width: "48%", backgroundColor: "#fff",
                            borderColor: 'red', borderWidth: 0, shadowColor: "#000",
                            paddingHorizontal: 10, borderRadius: 5,
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5,
                            alignItems: "center",
                            justifyContent: "center"

                        }}>
                        <View style={{ marginTop: 0 }}>
                            <Image
                                source={require('../../../Assets/Images/User01.png')}
                                style={{
                                    width: 70, height: 70, alignSelf: "center",
                                    borderRadius: 100,
                                }}
                            />
                        </View>
                        <View style={{ flexDirection: "row", paddingBottom: 5 }}>
                            <View style={{
                                // flexDirection: "row",
                                justifyContent: "space-between",
                                // alignItems: "center"
                            }}>
                                <Text style={{
                                    color: textColor,
                                    fontWeight: "bold",
                                    marginTop: 5,
                                }}>
                                    HR
                                </Text>
                                <Text style={{
                                    color: blackcolor,
                                    marginTop: 5, opacity: 0.5,
                                    fontSize: 12
                                }}>
                                    {"Click to Check In/Out"}
                                </Text>
                            </View>
                            <Forwardicon color={{ mainColor }}
                                height={12} width={12}
                                style={{ marginTop: 10 }} />
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity
                        // onPress={() => props.navigation.navigate("EmployeesList")}
                        style={{
                            height: 150, width: "48%", backgroundColor: "#fff",
                            borderColor: 'red', borderWidth: 0,
                            shadowColor: "#000",
                            paddingHorizontal: 10, borderRadius: 5,
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5,
                            // alignItems:"center",
                            justifyContent: "center"

                        }}>
                        <View style={{ marginTop: 0 }}>
                            <Image
                                source={require('../../../Assets/Images/User02.png')}
                                style={{
                                    width: 70, height: 70, alignSelf: "center",
                                    borderRadius: 100,
                                }}
                            />
                        </View>
                        <View style={{ paddingBottom: 5 }}>
                            <View style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center"
                            }}>
                                <Text style={{
                                    color: textColor,
                                    fontWeight: "bold", marginTop: 5
                                }}>
                                    Employees
                                </Text>
                                <Forwardicon color={{ mainColor }}
                                    height={12} width={12}
                                    style={{ marginTop: 10 }} />
                            </View>
                            <Text style={{
                                color: blackcolor,
                                marginTop: 5, opacity: 0.5,
                                fontSize: 12
                            }}>
                                {"Click to View All Employees List."}
                            </Text>
                        </View>

                    </TouchableOpacity>
                </View>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 10, width: "95%",
                    alignSelf: "center", paddingBottom: 50
                }}>
                    <TouchableOpacity
                        // onPress={() => props.navigation.navigate("Professor")}
                        style={{
                            height: 150, width: "48%",
                            backgroundColor: "#fff",
                            borderColor: 'red', borderWidth: 0,
                            shadowColor: "#000",
                            paddingHorizontal: 10, borderRadius: 5,
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            }, shadowOpacity: 0.25,
                            shadowRadius: 3.84, elevation: 5,
                            justifyContent: "center"

                        }}>
                        <View style={{ marginTop: 0 }}>
                            <Image
                                source={require('../../../Assets/Images/User03.png')}
                                style={{
                                    width: 70, height: 70, alignSelf: "center",
                                    borderRadius: 100,
                                }}
                            />
                        </View>
                        <View style={{ paddingBottom: 5 }}>
                            <View style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center"
                            }}>
                                <Text style={{
                                    color: textColor,
                                    fontWeight: "bold", marginTop: 5
                                }}>
                                    Professors
                                </Text>
                                <Forwardicon color={{ mainColor }}
                                    height={12} width={12} style={{ marginTop: 10 }} />
                            </View>
                            <Text style={{
                                color: blackcolor,
                                marginTop: 5, opacity: 0.5, fontSize: 12
                            }}>
                                {"Click to View All Professors list."}
                            </Text>
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity
                        // onPress={() => props.navigation.navigate("GuardList")}
                        style={{
                            height: 150, width: "48%",
                            backgroundColor: "#fff",
                            borderColor: 'red',
                            borderWidth: 0,
                            shadowColor: "#000",
                            paddingHorizontal: 10,
                            borderRadius: 5,
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            }, shadowOpacity: 0.25,
                            shadowRadius: 3.84, elevation: 5,
                            justifyContent: "center"

                        }}>
                        <View style={{ marginTop: 0 }}>
                            <Image
                                source={require('../../../Assets/Images/User05.png')}
                                style={{
                                    width: 70, height: 70, alignSelf: "center",
                                    borderRadius: 100,
                                }}
                            />
                        </View>
                        <View style={{ paddingBottom: 5 }}>
                            <View style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center"
                            }}>
                                <Text style={{
                                    color: textColor,
                                    fontWeight: "bold", marginTop: 5
                                }}>
                                    Guards
                                </Text>
                                <Forwardicon color={{ mainColor }}
                                    height={12} width={12} style={{ marginTop: 10 }} />
                            </View>
                            <Text style={{
                                color: blackcolor,
                                marginTop: 5, opacity: 0.5, fontSize: 12
                            }}>
                                {"Click to View All SecurityGuards list."}
                            </Text>
                        </View>

                    </TouchableOpacity>
                </View>


            </ScrollView>



            <View style={{ backgroundColor: backgroundColor, height: 15 }}>

            </View>

        </View>

    );
};

export default Dashboard;