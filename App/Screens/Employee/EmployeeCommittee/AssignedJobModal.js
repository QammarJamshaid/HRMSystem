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
import { changeAddAtAssignedJobModal } from "../Store/EmployeeSlice";

export default function AssignedJobModal({
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
        addAtAssignedJobModal
    } = useSelector(state => state.employee) || {}

    const payStatus = [
        { value: "0", label: "Sick" },
        { value: "1", label: "Paid" },
        { value: "1", label: "UnPaid" },
    ]
    const [isJobPickerOpen, setIsJobPickerOpen] = useState(false)
    console.log("addRejectedModal===>", addAtAssignedJobModal)
    const showDatepicker = () => {
        showMode('date');
    };

    const [showDate, setshowDate] = useState(false)
    const [date, setdate] = useState(new Date("2022-03-25"))
    const [showDatefrom, setshowDatefrom] = useState(false)
    const [datefrom, setdatefrom] = useState(new Date("2022-03-25"))

    return (
        <Modal
            transparent
            animationType="fade"
            visible={addAtAssignedJobModal}
            onRequestClose={() => {
                dispatch(changeAddAtAssignedJobModal(false))
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
                                Assigned Jobs
                            </Text>
                            <TouchableOpacity
                                onPress={() => dispatch(changeAddAtAssignedJobModal(false))}
                                style={{ left: 60 }}
                            >
                                <Entypo
                                    name="cross"
                                    size={25}
                                    color={textOffColor}
                                />
                            </TouchableOpacity>

                        </View>
                        <View style={{ marginTop: 10, paddingHorizontal: 20 }}>
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
                                        // multiline
                                        placeholder="Job Title"
                                        // secureTextEntry={secureTextEntry}
                                        placeholderTextColor={"lightgray"}
                                        style={{
                                            backgroundColor: backgroundColor,
                                            zIndex: 10,
                                            borderWidth: 0.3,
                                            borderColor: "lightgray",
                                            padding: 0,
                                            // marginBottom: 5,
                                            // flex: 1,
                                            height: 35,
                                            borderRadius: 5,
                                            paddingLeft: 13,
                                            color: textColor,
                                            fontSize: 13,
                                            width: "100%",
                                        }}
                                    />
                                )}
                                name="title"
                                defaultValue=""
                            />
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
                                        // multiline
                                        placeholder="Applicant"
                                        // secureTextEntry={secureTextEntry}
                                        placeholderTextColor={"lightgray"}
                                        style={{
                                            backgroundColor: backgroundColor,
                                            zIndex: 10,
                                            borderWidth: 0.3,
                                            borderColor: "lightgray",
                                            padding: 0,
                                            // marginBottom: 5,
                                            // flex: 1,
                                            height: 35,
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

                        <TouchableOpacity
                            onPress={() => {
                                dispatch(changeAddAtAssignedJobModal(false))
                                // props.navigation.navigate("FindWork")
                            }}

                            style={{
                                alignSelf: "center", marginBottom: 20, marginTop: 20,
                                justifyContent: "center", alignItems: "center",
                                height: 35, width: "90%", backgroundColor: mainColor,
                                borderRadius: 5
                            }}>
                            <Text style={{ color: buttoncolor, fontWeight: "bold", fontSize: 16 }}>
                                {"Close"}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginBottom: 10 }} />
                </View>
            </View>
        </Modal>
    );
}