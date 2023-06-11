import React, { useEffect, useState } from 'react';
import {
    Text, View, TextInput,
    TouchableOpacity, FlatList
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import BackIcon from '../../../Assets/Svgs/BackIcon.svg';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { ScrollView } from 'react-native-gesture-handler';
import { ActivityIndicator, Divider } from 'react-native-paper';
import Calender from '../../../Assets/Svgs/Calender.svg'
import DateTimePicker from '@react-native-community/datetimepicker'

function CheckInAttendance(props) {

    const defaultValues = {
        Quantity: "",
        MarketValue: "",
    }
    const { item } = props.route.params
    const dispatch = useDispatch()
    const {
        textColor,
        mainColor,
        textOffColor,
        textLighterColor,
        backgroundColor, buttoncolor,
        backgroundDarkerColor, borderColor
    } = useSelector(state => state.styles)
    const [secureTextEntry, ChangeSecureTextEntry] = useState(true);
    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        mode: 'onChange',
        defaultValues: defaultValues,
    });
    const [jobDetail, setJobDetail] = useState(null)
    const [loader, setLoader] = useState(false)
    const [isStopCheckInOut, setIsStopCheckInOut] = useState(false);
    const jobDetailsItem = [
        {
            Title: "Job Title :",
            value: "React Native Developer",
        },
        {
            Title: "Location :",
            value: "Rawalpindi",
        },
        {
            Title: "Salary :",
            value: "50K to 80K",
        },
        {
            Title: "Last Date :",
            value: "12/04/2024",
        },
        {
            Title: "Description :",
            value: "Muestra tu marca en cada mail con el correo electrónico profesional de GoDaddy.GoDaddy",
        },


    ]
    const showDatepicker = () => {
        showMode('date');
    };
    const [showDate, setshowDate] = useState(false)
    const [date, setdate] = useState(new Date("2022-03-25"))
    const [showDatefrom, setshowDatefrom] = useState(false)
    const [datefrom, setdatefrom] = useState(new Date("2022-03-25"))
    const showTimepicker = () => {
        showMode('time');
    };

    function JobdetailFunc() {
        return (
            <>
                <View
                    // key={key}
                    style={{
                        backgroundColor: backgroundDarkerColor, shadowColor: "#000",
                        paddingHorizontal: 10, borderRadius: 10, shadowOffset: {
                            width: 0,
                            height: 2,
                        }, shadowOpacity: 0.25, shadowRadius: 3.84,
                        elevation: 5, width: "90%", flex: 1,
                        marginTop: 10, alignSelf: "center",
                    }}>
                    <View style={{
                        height: 80, width: 80, top: -30,
                        borderRadius: 100, backgroundColor: mainColor,
                        alignSelf: "center", justifyContent: "center"
                    }}>
                        {/* <Image
                                // resizeMode="contain"
                                source={{ uri: baseUrl + data.image }}
                                style={{
                                    height: 65, width: 65,
                                    alignSelf: "center", borderRadius: 100,
                                }}
                            /> */}
                        {/* <EmergencyStockIcon color={{ mainColor }} height={22} width={22} style={{}} /> */}
                    </View>
                    <View style={{
                        width: "100%",
                        backgroundColor: backgroundDarkerColor,
                        paddingHorizontal: 10,
                        borderTopRightRadius: 5,
                        borderBottomRightRadius: 8,
                        marginBottom: 20
                    }}>
                        <View style={{
                            flexDirection: "row",
                        }}>
                            <Text style={{
                                color: textColor, fontSize: 14,
                                width: 90, fontWeight: "bold"
                            }}>
                                {"Name:"}
                            </Text>
                            <Text style={{
                                color: textColor, fontSize: 14,
                                fontWeight: "bold"
                            }}>
                                {item.Fname + item.Lname}
                            </Text>
                        </View>
                        <View style={{
                            flexDirection: "row", marginTop: 10,
                        }}>
                            <Text style={{
                                color: textColor, fontSize: 14,
                                width: 90, fontWeight: "bold"
                            }}>
                                {"Number:"}
                            </Text>
                            <Text style={{
                                color: textColor, fontSize: 14,

                            }}>
                                {item.mobile}
                            </Text>
                        </View>
                        <View style={{
                            width: "100%", alignSelf: "center",
                            marginTop: 20
                        }}>
                            <View style={{ marginTop: 30, }}>
                                <Text style={{
                                    fontWeight: "bold",
                                    color: textColor, fontSize: 14
                                }}>
                                    {"Check In Time:"}
                                </Text>
                            </View>
                            <View style={{
                                alignSelf: "center",
                                width: "100%",
                                marginTop: 10
                            }}>
                                <Controller
                                    control={control}
                                    rules={{
                                        required: true,
                                    }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TouchableOpacity
                                            // onPress={showTimepicker}
                                            style={{
                                                width: '100%', height: 35, justifyContent: "space-between",
                                                alignSelf: "center", flexDirection: "row",
                                                paddingHorizontal: 0, borderWidth: 0.5,
                                                borderRadius: 5, borderColor: borderColor,
                                                alignItems: "center",
                                                backgroundColor: "lightgray"
                                            }}>

                                            {(showDate || Platform.OS == "ios") && (
                                                <DateTimePicker
                                                    // minimumDate={new Date()}
                                                    value={date}
                                                    mode={'time'}
                                                    is24Hour={true}
                                                    // style={{ backgroundColor: "transparent" }}
                                                    onChange={(event, selectedDate) => setdate(selectedDate)}
                                                    accentColor={textLighterColor}
                                                    textColor={textLighterColor}
                                                />
                                            )}
                                            <View style={{
                                                width: '10%', height: 37, alignSelf: "center",
                                                justifyContent: "center", alignItems: "center"
                                            }}>
                                                <Calender color={mainColor} height={18} width={18} style={{ right: 10 }} />
                                            </View>
                                        </TouchableOpacity>
                                    )}
                                    name="purchaseDate"
                                />
                                {errors.purchaseDate && <Text style={{ color: 'red', marginLeft: 10, marginBottom: 8 }}>Purchase Date is required</Text>}

                            </View>
                            <View style={{ marginTop: 20, }}>
                                <Text style={{
                                    fontWeight: "bold",
                                    color: textColor, fontSize: 14
                                }}>
                                    {"Check In Time:"}
                                </Text>
                            </View>
                            <View style={{
                                alignSelf: "center",
                                width: "100%",
                                marginTop: 10
                            }}>
                                <Controller
                                    control={control}
                                    rules={{
                                        required: true,
                                    }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TouchableOpacity
                                            // onPress={showDatepicker}
                                            style={{
                                                width: '100%', height: 35, justifyContent: "space-between",
                                                alignSelf: "center", flexDirection: "row",
                                                paddingHorizontal: 0, borderWidth: 0.5,
                                                borderRadius: 5, borderColor: borderColor,
                                                alignItems: "center", backgroundColor: "lightgray"
                                            }}>
                                            {(showDatefrom || Platform.OS == "ios") && (
                                                <DateTimePicker
                                                    // minimumDate={new Date()}
                                                    value={datefrom}
                                                    mode={'date'}
                                                    is24Hour={true}
                                                    // style={{ backgroundColor: "transparent" }}
                                                    onChange={(event, selectedDate) => setdatefrom(selectedDate)}
                                                    accentColor={textLighterColor}
                                                    textColor={textLighterColor}
                                                />
                                            )}
                                            <View style={{
                                                width: '10%', height: 37, alignSelf: "center",
                                                justifyContent: "center", alignItems: "center"
                                            }}>
                                                <Calender color={mainColor} height={18} width={18} style={{ right: 10 }} />
                                            </View>
                                        </TouchableOpacity>
                                    )}
                                    name="purchaseDateTo"
                                />
                                {errors.purchaseDateTo && <Text style={{ color: 'red', marginLeft: 10, marginBottom: 8 }}>Purchase Date is required</Text>}

                            </View>

                            <View style={{
                                paddingHorizontal: 10,
                                marginBottom: 10,
                                marginTop: 30
                            }}>
                                <TouchableOpacity
                                    onPress={() => setIsStopCheckInOut(!isStopCheckInOut)}
                                    style={{
                                        backgroundColor: mainColor,
                                        height: 35,
                                        width: 100,
                                        justifyContent: "center",
                                        borderRadius: 5,
                                        alignSelf: "center",
                                        // marginBottom: 20,
                                        marginRight: 5
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: 12,
                                            color: "#fff",
                                            fontWeight: 'bold',
                                            alignSelf: "center",
                                        }}>
                                        {!isStopCheckInOut ? 'CHECK IN' : 'CHECK OUT'}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </View>

            </>
        )
        // )
    }
    return (
        <View style={{ flex: 1, backgroundColor: backgroundColor }}>
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
                        {"Attendence Check In"}
                    </Text>
                    <View style={{
                        flexDirection: "row", justifyContent: "center",
                        alignItems: "center"
                    }}>

                    </View>
                </View>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 30,
                    backgroundColor: backgroundColor,
                }}>

                <View style={{
                    width: "100%", alignSelf: "center",
                    marginTop: 20
                }}>
                    <View
                        style={{
                            width: "100%", backgroundColor: backgroundColor,
                            alignSelf: "center",
                            flex: 1,
                            borderRadius: 8,
                        }}>
                        {
                            loader ?
                                <View style={{ justifyContent: "center", alignItems: "center" }}>
                                    <ActivityIndicator color={mainColor} size={40} />
                                </View>
                                :
                                <View style={{ marginTop: 10, backgroundColor: backgroundColor, }}>
                                    {JobdetailFunc()}
                                </View>
                        }
                    </View>
                </View>
            </ScrollView>
            <View style={{
                height: 10,
                width: "100%",
                backgroundColor: backgroundColor
            }}>

            </View>
        </View>
    )
}

export default CheckInAttendance