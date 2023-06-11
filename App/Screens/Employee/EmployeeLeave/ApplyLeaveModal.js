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
import { Divider } from "react-native-paper";
import { useDispatch, useSelector } from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';
import { ms, mvs, s, vs } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import { changeAddApplyLeaveModal } from "../Store/EmployeeSlice";
import Calender from '../../../Assets/Svgs/Calender.svg'
import DateTimePicker from '../../../Components/DateTimePicker'
import DropDownPicker from 'react-native-dropdown-picker';
import Toast from 'react-native-toast-message';
import { useAddLeavePostMutation } from "../Services/EmployeeApi";
import moment from "moment";

export default function ApplyLeaveModal({
    props
}) {
    const defaultValues = {
        leaveType: "",
        reason: "",
        startDate: "",
        endDate: "",
    }
    const dispatch = useDispatch()
    const navigation = useNavigation();

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
            // borderRadius: 10

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
        addApplyLeaveModal
    } = useSelector(state => state.employee) || {}

    const payStatus = [
        { value: "Sick", label: "Sick" },
        { value: "Paid", label: "Paid" },
        { value: "UnPaid", label: "UnPaid" },
    ]
    const [isJobPickerOpen, setIsJobPickerOpen] = useState(false)
    console.log("addRejectedModal===>", addApplyLeaveModal)
    const showDatepicker = () => {
        showMode('date');
    };

    const [showDate, setshowDate] = useState(false)
    const [date, setdate] = useState(new Date("2022-03-25"))
    const [showDatefrom, setshowDatefrom] = useState(false)
    const [datefrom, setdatefrom] = useState(new Date("2022-03-25"))
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [showDateTimePicker, setShowDateTimePicker] = useState({
        from: '',
        visible: false
    })

    const [addLeavePost, { isLoading }] = useAddLeavePostMutation()
    const handleApplyLeave = handleSubmit(async data => {
        console.log('data :::::::::', data)
        console.log('startDate ::::::::::', startDate)
        console.log('endDate :::::::::::::=>', endDate)
        let response = await addLeavePost({
            reason:data.reason,
            leaveType:data.leaveType,
            startDate,
            endDate
        })

        console.log('data :::::::::', data)
        console.log('startDate ::::::::::', startDate)
        console.log('endDate :::::::::::::=>', endDate)

        const { error, data: respData } = response || {}

        if (error)
            Toast.show({
                text1: 'Success Message',
                text2: error.data.message,
                position: 'top',
            })
        dispatch(changeAddApplyLeaveModal(false))
        if (respData)
            Toast.show({
                text1: 'Registeration failed!',
                text2: error.data.message,
                position: 'top'
            })
    })

    const onDatePress = (from) => {
        setShowDateTimePicker({
            visible: true,
            from: from
        })
    }

    const hideDateTimePicker = () => {
        setShowDateTimePicker({
            visible: false,
            from: ''
        })
    }

    const onDateSelection = (date) => {
        hideDateTimePicker()
        if (showDateTimePicker.from === 'startDate') {
            setStartDate(moment(date).format('YYYY-MM-DD'))
        }
        else {
            setEndDate(moment(date).format('YYYY-MM-DD'))
        }
    }

    return (
        <Modal
            transparent
            animationType="fade"
            visible={addApplyLeaveModal}
            onRequestClose={() => {
                dispatch(changeAddApplyLeaveModal(false))
            }}>
            <View
                // onPress={() => dispatch(changeAddRejectedModal(false))}
                style={styles.contentContainer}>

                <View style={
                    {
                        backgroundColor: mainLighterColor,
                        marginHorizontal: 5,
                        marginVertical: 70,
                        borderRadius: 10,
                        width: "85%",
                        alignSelf: "center"
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
                        <View style={{
                            width: '90%',
                            backgroundColor: "#fff",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: 20,
                            alignSelf: "center",
                            flexDirection: "row",
                        }}>
                            <Text style={{
                                color: textColor,
                                fontSize: 16,
                                fontWeight: "bold"
                            }}>
                                Apply For Leave
                            </Text>
                            <TouchableOpacity
                                onPress={() => dispatch(changeAddApplyLeaveModal(false))}
                                style={{ left: 60 }}
                            >
                                <Entypo
                                    name="cross"
                                    size={25}
                                    color={textOffColor}
                                />
                            </TouchableOpacity>

                        </View>
                        <View style={{
                            zIndex: 100,
                            // alignSelf: "flex-end",
                            paddingHorizontal: 10, marginTop: 10
                        }}>
                            <Controller
                                control={control}
                                rules={{
                                    required: true,
                                }}
                                render={({ field: { onChange, value } }) => (

                                    <DropDownPicker
                                        items={payStatus}
                                        open={isJobPickerOpen}
                                        placeholder="Leave type"
                                        containerStyle={{
                                        }}
                                        style={{
                                            backgroundColor: backgroundColor,
                                            color: "#fff",
                                            alignSelf: "center",
                                            borderRadius: 5,
                                            minHeight: 35,
                                            borderColor: textOffColor,
                                            borderWidth: 1,
                                            width: "97%",
                                            padding: 0
                                        }}
                                        textStyle={{ color: textColor }}
                                        labelProps={{
                                            style: { color: borderColor, }
                                        }}
                                        dropDownContainerStyle={{
                                            backgroundColor: "#FFFFFF",
                                            borderColor: textOffColor,
                                            borderWidth: 1,
                                            flex: 1,
                                            width: "97%",
                                            marginLeft: 5
                                        }}
                                        theme="DARK"
                                        dropDownStyle={{ backgroundColor: mainColor }}
                                        setOpen={(open) => {
                                            setIsJobPickerOpen(open)
                                        }}
                                        value={value}
                                        setValue={(value) => {
                                            onChange(value(payStatus))
                                        }}
                                        zIndex={30}
                                    />
                                )}
                                name="leaveType"
                            />
                            {errors.leaveType && <Text style={{ color: "red" }}>Select a leaveType</Text>
                            }
                        </View>
                        <View style={{
                            borderColor: 'red',
                            borderWidth: 0, width: "90%",
                            alignSelf: "center", marginTop: 20
                        }}>
                            <Controller
                                control={control}
                                rules={{
                                    required: true,
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        onChangeText={(text) => onChange(text)}
                                        value={value}
                                        onBlur={onBlur}
                                        error={errors.fullName}
                                        multiline
                                        placeholder="Type Reason here.... "
                                        // secureTextEntry={secureTextEntry}
                                        placeholderTextColor={borderColor}
                                        style={{
                                            backgroundColor: backgroundColor,
                                            zIndex: 10,
                                            borderWidth: 0.3,
                                            borderColor: "lightgray",
                                            padding: 0,
                                            // marginBottom: 5,
                                            // flex: 1,
                                            height: 60,
                                            borderRadius: 5,
                                            paddingLeft: 13,
                                            color: textColor,
                                            fontSize: 13,
                                            width: "100%",
                                        }}
                                    />
                                )}
                                name="reason"
                                defaultValue=""
                            />
                        </View>
                        <View style={{ marginTop: 10, paddingHorizontal: 20 }}>
                            <Text style={{
                                fontWeight: "500",
                                color: borderColor, fontSize: 14
                            }}>
                                {"Start Date:"}
                            </Text>
                        </View>
                        <View style={{
                            alignSelf: "center",
                            width: "90%",
                            marginTop: 10
                        }}>
                            {/* <Controller
                                control={control}
                                rules={{
                                    required: true,
                                }}
                                render={({ field: { onChange, onBlur, value } }) => ( */}
                                    <View style={{
                                        alignSelf: "center",
                                        width: "90%",
                                        marginTop: 20
                                    }}>

                                        <TouchableOpacity style={{
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
                                            borderColor: textLightColor,
                                            justifyContent: 'center'
                                        }}
                                            onPress={onDatePress.bind(null, 'startDate')}
                                        >

                                            <Text style={{ color: textLightColor, fontSize: 14, }}>
                                                {!startDate ? 'Start Date' : startDate}
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                            {/* //     )}
                            //     name="startDate"
                            // /> */}
                            {/* {errors.startDate && <Text style={{ color: 'red', marginLeft: 10, marginBottom: 8 }}>startDate is required</Text>} */}

                        </View>
                        <View style={{ marginTop: 10, paddingHorizontal: 20 }}>
                            <Text style={{
                                fontWeight: "500",
                                color: borderColor, fontSize: 14
                            }}>
                                {"End Date:"}
                            </Text>
                        </View>
                        <View style={{
                            alignSelf: "center",
                            width: "90%",
                            marginTop: 10
                        }}>
                            {/* <Controller
                                control={control}
                                rules={{
                                    required: true,
                                }}
                                render={({ field: { onChange, onBlur, value } }) => ( */}
                                    <View style={{
                                        alignSelf: "center",
                                        width: "90%",
                                        marginTop: 20
                                    }}>

                                        <TouchableOpacity style={{
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
                                            borderColor: textLightColor,
                                            justifyContent: 'center'
                                        }}
                                            onPress={onDatePress.bind(null, 'endDate')}
                                        >

                                            <Text style={{ color: textLightColor, fontSize: 14, }}>
                                                {!endDate ? 'End Date' : endDate}
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                {/* )}
                                name="endDate"
                            /> */}
                            {/* {errors.endDate && <Text style={{ color: 'red', marginLeft: 10, marginBottom: 8 }}>endDate is required</Text>} */}

                        </View>
                        <TouchableOpacity
                            onPress={() => handleApplyLeave()}

                            style={{
                                alignSelf: "center", marginBottom: 20, marginTop: 20,
                                justifyContent: "center", alignItems: "center",
                                height: 35, width: "90%", backgroundColor: mainColor,
                                borderRadius: 5
                            }}>
                            <Text style={{ color: buttoncolor, fontWeight: "bold", fontSize: 16 }}>
                                {"Done"}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginBottom: 10 }} />
                </View>
            </View>
            {
                showDateTimePicker?.visible &&
                <DateTimePicker
                    mode='date'
                    visible={true}
                    onClose={hideDateTimePicker}
                    selectedDate={onDateSelection}
                />
            }
        </Modal>
    );
}