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
import { changeAddJobModal } from "./Store/JobPostSlice";
import Entypo from 'react-native-vector-icons/Entypo';
import DropDownPicker from 'react-native-dropdown-picker';

export default function AddJobModal({
    props
}) {
    const defaultValues = {
        propertyId: null,
    }
    const dispatch = useDispatch()

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
        addJobModal
    } = useSelector(state => state.jobPost) || {}


    console.log("addJobModal===>", addJobModal)
    const showDatepicker = () => {
        showMode('date');
    };
    const payStatus = [
        { value: "0", label: "Professor" },
        { value: "1", label: "Doctor" },
        { value: "2", label: "Guard" },
        { value: "3", label: "Lab Attendent" },
    ]

    const [isJobPickerOpen, setIsJobPickerOpen] = useState(false)
    const qualificationStatus = [
        { value: "0", label: "Matric" },
        { value: "1", label: "Inter" },
        { value: "2", label: "Bachelors" },
        { value: "3", label: "Master" },
    ]

    const [isQualificationPickerOpen, setIsQualificationPickerOpen] = useState(false)


    return (
        <Modal
            transparent
            animationType="fade"
            visible={addJobModal === true}
            onRequestClose={() => {
                dispatch(changeAddJobModal(false))
            }}>
            <View style={styles.contentContainer}>
                <View style={styles.content}>
                    <View style={{
                        width: '90%',
                        backgroundColor: "#fff",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: 20,
                        alignSelf: "center",
                        flexDirection: "row",
                    }}>
                        <Text style={{
                            color: textColor,
                            fontSize: 18,
                            fontWeight: "bold"
                        }}>
                            Add Job
                        </Text>
                        <TouchableOpacity
                            onPress={() => dispatch(changeAddJobModal(false))}
                            style={{}}
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
                        alignSelf: "center",
                        width:"100%",
                        marginTop:20
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
                                    placeholder="Job Title"
                                    containerStyle={{
                                    }}
                                    style={{
                                        backgroundColor: backgroundColor,
                                        color: textColor,
                                        // paddingLeft: 10,
                                        borderRadius: 5,
                                        minHeight: 40,
                                        alignSelf:"center",
                                        borderColor: textOffColor,
                                        borderWidth: 1,
                                        width: "90%",
                                        padding: 0
                                    }}
                                    textStyle={{ color: textColor }}
                                    labelProps={{
                                        style: { color: borderColor, fontWeight: "bold" }
                                    }}
                                    dropDownContainerStyle={{
                                        backgroundColor: "#FFFFFF",
                                        borderColor: textOffColor,
                                        borderWidth: 1,
                                        alignSelf:"center",
                                        flex: 1,
                                        width: "90%",
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
                            name="attendence"
                        />
                        {errors.attendence && <Text style={{ color: "red" }}>Select a attendence Status</Text>
                        }
                    </View>
                    <View style={{
                        zIndex: 80,
                        alignSelf: "center",
                        width:"100%",
                        marginTop:20
                    }}>
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, value } }) => (
                                <DropDownPicker
                                    items={qualificationStatus}
                                    open={isQualificationPickerOpen}
                                    placeholder="Qualification"
                                    containerStyle={{
                                    }}
                                    style={{
                                        backgroundColor: backgroundColor,
                                        color: borderColor,
                                        // paddingLeft: 10,
                                        borderRadius: 5,
                                        minHeight: 40,
                                        alignSelf:"center",
                                        borderColor: textOffColor,
                                        borderWidth: 1,
                                        width: "90%",
                                        padding: 0
                                    }}
                                    textStyle={{ color: borderColor }}
                                    labelProps={{
                                        style: { color: borderColor, fontWeight: "bold" }
                                    }}
                                    dropDownContainerStyle={{
                                        backgroundColor: "#FFFFFF",
                                        borderColor: textOffColor,
                                        borderWidth: 1,
                                        alignSelf:"center",
                                        flex: 1,
                                        width: "90%",
                                    }}
                                    theme="DARK"
                                    dropDownStyle={{ backgroundColor: mainColor }}
                                    setOpen={(open) => {
                                        setIsQualificationPickerOpen(open)
                                    }}
                                    value={value}
                                    setValue={(value) => {
                                        onChange(value(qualificationStatus))
                                    }}
                                    zIndex={30}
                                />
                            )}
                            name="qualification"
                        />
                        {errors.qualification && <Text style={{ color: "red" }}>Select a attendence Status</Text>
                        }
                    </View>
                    <View style={{
                        alignSelf: "center",
                        width: "90%",
                        marginTop: 20
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
                                    placeholder="Salary"
                                    placeholderTextColor={borderColor}
                                    style={{
                                        backgroundColor: backgroundColor,
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
                            name="salary"
                            defaultValue=""
                        />

                    </View>
                    <View style={{
                        alignSelf: "center",
                        width: "90%",
                        marginTop: 20
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
                                    placeholder="Experience"
                                    placeholderTextColor={borderColor}
                                    style={{
                                        backgroundColor: backgroundColor,
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
                            name="experience"
                            defaultValue=""
                        />

                    </View>
                    <View style={{
                        alignSelf: "center",
                        width: "90%",
                        marginTop: 20
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
                                    placeholder="Last Date"
                                    placeholderTextColor={borderColor}
                                    style={{
                                        backgroundColor: backgroundColor,
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
                            name="startDate"
                            defaultValue=""
                        />

                    </View>
                    <View style={{
                        alignSelf: "center",
                        width: "90%",
                        marginTop: 20
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
                                    placeholder="Location"
                                    placeholderTextColor={borderColor}
                                    style={{
                                        backgroundColor: backgroundColor,
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
                            name="location"
                            defaultValue=""
                        />

                    </View>
                    <View style={{
                        alignSelf: "center",
                        width: "90%",
                        marginTop: 20
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
                                    placeholder="Description"
                                    placeholderTextColor={borderColor}
                                    style={{
                                        backgroundColor: backgroundColor,
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
                            name="description"
                            defaultValue=""
                        />

                    </View>
                    <View style={{
                        alignSelf: "center",
                        width: "90%",
                        marginTop: 20
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
                                    placeholder="No of Vacancies"
                                    placeholderTextColor={borderColor}
                                    style={{
                                        backgroundColor: backgroundColor,
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
                            name="noOfVacancies"
                            defaultValue=""
                        />

                    </View>
                    <View style={{
                        paddingHorizontal: 10,
                        marginBottom: 20,
                        marginTop: 20
                    }}>
                        <TouchableOpacity
                            onPress={() => dispatch(changeAddJobModal(false))}
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
                                Add
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}