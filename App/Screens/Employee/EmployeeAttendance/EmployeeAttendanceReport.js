import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { useDispatch, useSelector } from 'react-redux';
import BackIcon from '../../../Assets/Svgs/BackIcon.svg';
import Calender from '../../../Assets/Svgs/Calender.svg';
import { useGlobalContext } from '../../../Services2';
import { changeAddAttendanceDetailModal } from '../Store/EmployeeSlice';
import AttendanceDetailModal from './AttendanceDetailModal';
import { useGetEmployeeAttendanceQuery } from '../Services/EmployeeApi';
import moment from 'moment';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

function EmployeeAttendanceReport(props) {

    const defaultValues = {
        startDate: new Date(),
        endDate: new Date()
    }
    const dispatch = useDispatch()

    const { user }
        = useGlobalContext()

    const {
        data = [],
        isFetching,
    } = useGetEmployeeAttendanceQuery(user?.Uid)

    const {
        textColor,
        mainColor,
        textOffColor,
        backgroundLighterColor,
        backgroundColor, buttoncolor,
        backgroundDarkerColor, borderColor,
        textLightColor,
        greenColor
    } = useSelector(state => state.styles)
    const [secureTextEntry, ChangeSecureTextEntry] = useState(true);
    const {
        control,
        handleSubmit,
        reset,
        watch,
        formState: { errors }
    } = useForm({
        mode: 'onChange',
        defaultValues,
    });

    const watchStartDate = watch('startDate')
    const watchEndDate = watch('endDate')

    console.log("watchStartDate===>", watchStartDate)
    console.log("watchEndDate===>", watchEndDate)

    const [loader, setLoader] = useState(false)
    const [showItems, setShowItems] = useState(false)
    const {
        viewAttendenceModal
    } = useSelector(state => state.attendence) || {}

    console.log("viewAttendenceModal===>", viewAttendenceModal)
    const showDatepicker = () => {
        // showMode('date');
    };

    const [showDate, setshowDate] = useState(false)
    const [date, setdate] = useState(new Date("2022-03-25"))
    const [showDatefrom, setshowDatefrom] = useState(false)
    const [datefrom, setdatefrom] = useState(new Date("2022-03-25"))
    function AllAssets() {

        let dataToRender = data

        dataToRender = data.filter(({
            status,
            date,
        }) => {

            if (
                moment(date).isSameOrBefore(watchEndDate) &&
                moment(date).isSameOrAfter(watchStartDate)
            )
                return true
            return false
        })

        return dataToRender.map(({
            status,
            date,
        }, key) => {

            return (
                <>
                    <TouchableOpacity
                        onPress={() => dispatch(changeAddAttendanceDetailModal(true))}
                        key={key}
                        style={{
                            backgroundColor: backgroundDarkerColor, shadowColor: "#000",
                            paddingHorizontal: 10, borderRadius: 10, shadowOffset: {
                                width: 0,
                                height: 2,
                            }, shadowOpacity: 0.25, shadowRadius: 3.84,
                            elevation: 5, width: "95%", flex: 1,
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
                                    {moment(date).format("MMM DD, YYYY")}
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
                                    {status}
                                </Text>
                            </View>

                        </View>
                    </TouchableOpacity>

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
                        backgroundColor: backgroundLighterColor,
                    }}>

                    <View style={{
                        width: "95%", alignSelf: "center",
                        marginTop: 20, flexDirection: "row",
                        justifyContent: "space-between"
                    }}>
                        <View style={{ width: "48%", }}>
                            <View style={{ marginTop: 30, paddingHorizontal: 20 }}>
                                <Text style={{
                                    fontWeight: "bold",
                                    color: textColor, fontSize: 18
                                }}>
                                    {"From:"}
                                </Text>
                            </View>
                            <View style={{
                                alignSelf: "center",
                                width: "90%",
                                marginTop: 10
                            }}>
                                <Controller
                                    control={control}
                                    rules={{
                                        required: true,
                                    }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TouchableOpacity
                                            onPress={showDatepicker}
                                            style={{
                                                width: '100%', height: 35, justifyContent: "space-between",
                                                alignSelf: "center", flexDirection: "row",
                                                paddingHorizontal: 0, borderWidth: 0.5,
                                                borderRadius: 5, borderColor: borderColor,
                                                alignItems: "center",
                                                backgroundColor: backgroundColor
                                            }}>
                                            <DateTimePicker
                                                // minimumDate={new Date()}
                                                value={value}
                                                mode={'date'}
                                                is24Hour={true}
                                                // style={{ backgroundColor: "transparent" }}
                                                onChange={(event, selectedDate) =>
                                                    onChange(selectedDate)}
                                                accentColor={textLightColor}
                                                textColor={textLightColor}
                                            />
                                            <View style={{
                                                width: '10%', height: 37, alignSelf: "center",
                                                justifyContent: "center", alignItems: "center"
                                            }}>
                                                <Calender color={mainColor} height={18} width={18} style={{ right: 10 }} />
                                            </View>
                                        </TouchableOpacity>
                                    )}
                                    name="startDate"
                                />
                                {errors.startDate && <Text style={{ color: 'red', marginLeft: 10, marginBottom: 8 }}>Start Date is required</Text>}

                            </View>
                        </View>

                        <View style={{ width: "48%" }}>
                            <View style={{ marginTop: 30, paddingHorizontal: 20 }}>
                                <Text style={{
                                    fontWeight: "bold",
                                    color: textColor, fontSize: 18
                                }}>
                                    {"To:"}
                                </Text>
                            </View>
                            <View style={{
                                alignSelf: "center",
                                width: "90%",
                                marginTop: 10
                            }}>
                                <Controller
                                    control={control}
                                    rules={{
                                        required: true,
                                    }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TouchableOpacity
                                            onPress={showDatepicker}
                                            style={{
                                                width: '100%', height: 35, justifyContent: "space-between",
                                                alignSelf: "center", flexDirection: "row",
                                                paddingHorizontal: 0, borderWidth: 0.5,
                                                borderRadius: 5, borderColor: borderColor,
                                                alignItems: "center",
                                                backgroundColor: backgroundColor
                                            }}>
                                            <DateTimePicker
                                                // minimumDate={new Date()}
                                                value={value}
                                                mode={'date'}
                                                is24Hour={true}
                                                // style={{ backgroundColor: "transparent" }}
                                                onChange={(event, selectedDate) =>
                                                    onChange(selectedDate)}
                                                accentColor={textLightColor}
                                                textColor={textLightColor}
                                            />
                                            <View style={{
                                                width: '10%', height: 37, alignSelf: "center",
                                                justifyContent: "center", alignItems: "center"
                                            }}>
                                                <Calender color={mainColor} height={18} width={18} style={{ right: 10 }} />
                                            </View>
                                        </TouchableOpacity>
                                    )}
                                    name="endDate"
                                />
                                {errors.endDate && <Text style={{ color: 'red', marginLeft: 10, marginBottom: 8 }}>End Date is required</Text>}

                            </View>
                        </View>
                    </View>
                    <>
                        <View style={{
                            justifyContent: "space-between",
                            width: "95%", alignSelf: "center",
                            marginTop: 20,
                        }}>

                            <View style={{
                                backgroundColor: backgroundColor,
                                marginBottom: 10,
                            }}>
                                {AllAssets()}
                            </View>
                        </View>
                    </>
                </ScrollView>
                <View style={{
                    height: 10,
                    width: "100%",
                    backgroundColor: backgroundLighterColor
                }}>

                </View>
            </View>
            <AttendanceDetailModal />
        </>
    )
}

export default EmployeeAttendanceReport