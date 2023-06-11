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

function GuardAttendanceReport(props) {

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
            status: "Present",
            value: "2018-02-09 00:00:00",
        },
        {
            status: " Absent",
            value: "2020-03-011 00:00:00",
        },
        {
            status: "Present",
            value: "2021-03-012 00:00:00",
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
        return jobDetailsItem.map((item, key) => {
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
                            width: "100%",
                            backgroundColor: backgroundDarkerColor,
                            paddingHorizontal: 10,
                            borderTopRightRadius: 5,
                            borderBottomRightRadius: 8,
                            marginBottom: 20,
                            marginTop: 20,
                        }}>
                            <View style={{
                                flexDirection: "row",
                            }}>
                                <Text style={{
                                    color: textColor, fontSize: 14,
                                    width: 90, fontWeight: "bold"
                                }}>
                                    {"Date:"}
                                </Text>
                                <Text style={{
                                    color: borderColor, fontSize: 14,
                                    fontWeight: "bold"
                                }}>
                                    {item.value}
                                </Text>
                            </View>
                            <View style={{
                                flexDirection: "row", marginTop: 10,
                            }}>
                                <Text style={{
                                    color: textColor, fontSize: 14,
                                    width: 90, fontWeight: "bold"
                                }}>
                                    {"Status:"}
                                </Text>
                                <Text style={{
                                    color: mainColor, fontSize: 14,
                                    fontWeight: "bold"
                                }}>
                                    {item.status}
                                </Text>
                            </View>

                        </View>
                    </View>

                </>
            )
        })
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
                        {"Attendence Report"}
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

export default GuardAttendanceReport