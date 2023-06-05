import React, { useState } from "react";
import { Controller, useForm } from 'react-hook-form';
import {
    Image,
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput
} from "react-native";
import { Divider } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { changeAttendenceStatusModal } from "./Store/AttendenceSlice";
import Entypo from 'react-native-vector-icons/Entypo';
import CheckBoxIcon from '../../../Assets/Svgs/CheckBoxIcon.svg';
import Calender from '../../../Assets/Svgs/Calender.svg'
import DateTimePicker from '@react-native-community/datetimepicker' 
import moment from "moment";
export default function AttendenceStatusModal({
    props
}) {
    const defaultValues = {
        propertyId: null,
    }
    const dispatch = useDispatch()
    const [attend , setattend] = useState([])

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "#fff"
        },
        card: {
            flex: 1,
            backgroundColor: mainLighterColor,
            borderRadius: 10,
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 10,
            marginTop: 20, alignSelf: "center"



        },
        contentContainer: {
            flexDirection: 'column',
            justifyContent: 'center',
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            borderRadius: 10

        },
        content: {
            alignSelf: "center",
            width: "90%",
            backgroundColor: "#fff",
            marginHorizontal: 20,
            marginVertical: 70,
            borderRadius: 10
        },
        space: {
            marginTop: 12,
        },

    })
    const {
        textColor,
        mainColor,
        textOffColor,
        mainLighterColor,
        textLightColor,
        backgroundColor, buttoncolor,
        borderColor
    } = useSelector(state => state.styles)

    const { control, handleSubmit, reset, formState: { errors }, watch } = useForm({
        mode: 'onChange',
        defaultValues: defaultValues,
    });
    const {
        viewAttendenceModal
    } = useSelector(state => state.attendence) || {}


    console.log("viewAttendenceModal===>", viewAttendenceModal)
    const showDatepicker = () => {
        showMode('date');
    };

    const [showDate , setshowDate] = useState(false)
    const [date , setdate] = useState(new Date("2022-03-25"))
    const [showDatefrom , setshowDatefrom] = useState(false)
    const [datefrom , setdatefrom] = useState(new Date("2022-03-25"))
    return (
        <Modal
            transparent
            animationType="fade"
            visible={viewAttendenceModal === true}
            onRequestClose={() => {
                dispatch(changeAttendenceStatusModal(false))
            }}>
            <View style={styles.contentContainer}>
                <View style={styles.content}>
                    <View style={{
                        width: '90%',
                        backgroundColor: "#fff",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: 30,
                        alignSelf: "center",
                        flexDirection: "row",
                    }}>
                        <Text style={{
                            color: textColor,
                            fontSize: 18,
                            fontWeight: "bold"
                        }}>
                            {/* Attendence Status */}
                        </Text>
                        <Text style={{
                            color: textColor,
                            fontSize: 20,
                            fontWeight: "bold"
                        }}>
                            Attendence Status
                        </Text>
                        <TouchableOpacity
                            onPress={() => dispatch(changeAttendenceStatusModal(false))}
                            style={{}}
                        >
                            <Entypo
                                name="cross"
                                size={25}
                                color={textOffColor}
                            />
                        </TouchableOpacity>

                    </View>
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
                                        alignItems: "center"
                                    }}>
                                    {/* {Platform.OS == "android" && */}
                                    {/* <TextInput
                                        editable={false}
                                        placeholder={"13/02/2023"}
                                        placeholderTextColor={borderColor}
                                        style={{
                                            backgroundColor: "transparent",
                                            color: textLightColor,
                                            paddingLeft: 13,
                                            borderRadius: 5,
                                            height: 30,
                                            padding:0,
                                            // borderColor: textLightColor,
                                            // borderWidth: 1,
                                            // marginBottom: 5,
                                            width: "90%"
                                        }}
                                    value={moment(date).format('DD MMMM YYYY')}
                                    /> */}

                                    {(showDate || Platform.OS == "ios") && (
                                    <DateTimePicker
                                        // minimumDate={new Date()}
                                        value={date}
                                        mode={'date'}
                                        is24Hour={true}
                                        // style={{ backgroundColor: "transparent" }}
                                        onChange={(event, selectedDate) => setdate(selectedDate)}
                                        accentColor={textLightColor}
                                        textColor={textLightColor}
                                    />
                                )}
                                    <View style={{
                                        width: '10%', height: 37, alignSelf: "center",
                                        justifyContent: "center", alignItems: "center"
                                    }}>
                                        <Calender onPress={()=> setshowDate(!showDate)} color={mainColor} height={18} width={18} style={{ right: 10 }} />
                                    </View>
                                </TouchableOpacity>
                            )}
                            name="purchaseDate"
                        />
                        {errors.purchaseDate && <Text style={{ color: 'red', marginLeft: 10, marginBottom: 8 }}>Purchase Date is required</Text>}

                    </View>
                    <View style={{ marginTop: 10, paddingHorizontal: 20 }}>
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
                                        alignItems: "center"
                                    }}>
                                    {/* {Platform.OS == "android" && */}
                                    {/* <TextInput
                                        editable={false}
                                        placeholder={"12/02/2023"}
                                        placeholderTextColor={borderColor}
                                        style={{
                                            backgroundColor: "transparent",
                                            color: textLightColor,
                                            paddingLeft: 13,
                                            borderRadius: 5,
                                            height: 30,
                                            padding:0,
                                            // borderColor: textLightColor,
                                            // borderWidth: 1,
                                            // marginBottom: 5,
                                            width: "90%"
                                        }}
                                    // value={moment(date).format('DD MMMM YYYY')}
                                    /> */}
                                      {(showDatefrom || Platform.OS == "ios") && (
                                    <DateTimePicker
                                        // minimumDate={new Date()}
                                        value={datefrom}
                                        mode={'date'}
                                        is24Hour={true}
                                        // style={{ backgroundColor: "transparent" }}
                                        onChange={(event, selectedDate) => setdatefrom(selectedDate)}
                                        accentColor={textLightColor}
                                        textColor={textLightColor}
                                    />
                                )}

                                    {/* {(showDate || Platform.OS == "ios") && (
                                    <DateTimePicker
                                        // minimumDate={new Date()}
                                        value={date}
                                        mode={mode}
                                        is24Hour={true}
                                        style={{ backgroundColor: "transparent" }}
                                        onChange={(event, selectedDate) => onChange(selectedDate)}
                                        accentColor={textLightColor}
                                        textColor={textLightColor}
                                    />
                                )} */}
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
                    {/* <View style={{ marginTop: 10, paddingHorizontal: 20 }}>
                        <Text style={{
                            fontWeight: "bold",
                            color: textColor, fontSize: 16
                        }}>
                            {"Status:"}
                        </Text>
                    </View> */}
                    {/* <View style={{
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
                                <TextInput
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                    // error={errors.fullName}
                                    placeholder="Present"
                                    placeholderTextColor={borderColor}
                                    style={{
                                        backgroundColor: mainLighterColor,
                                        padding: 0,
                                        zIndex: 10,
                                        height: 35,
                                        borderRadius: 5,
                                        paddingLeft: 13,
                                        color: textLightColor,
                                        fontSize: 14,
                                        width: "100%",
                                        borderWidth: 0.5,
                                        borderColor: textLightColor
                                    }}
                                />
                            )}
                            name="company"
                            defaultValue=""
                        />

                    </View> */}
 
                    <View style={{
                        paddingHorizontal: 10,
                        marginBottom: 20,
                        marginTop: 20
                    }}>
                        <TouchableOpacity
                            onPress={() => dispatch(changeAttendenceStatusModal(false))}
                            style={{
                                backgroundColor: mainColor,
                                height: 35,
                                width: 100,
                                justifyContent: "center",
                                borderRadius: 5,
                                alignSelf: "flex-end",
                                marginBottom: 20,
                                marginRight: 5
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 14,
                                    color: "#fff",
                                    fontWeight: 'bold',
                                    alignSelf: "center",
                                }}>
                                 Attendance
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}