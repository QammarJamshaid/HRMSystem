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
import { usePostJobMutation } from "./Services/JobPostApi";
import Toast from 'react-native-toast-message';

export default function AddJobModal({
    props
}) {
    const defaultValues = {
        // Title: "",
        // Qualification:"",
        Salary:"",
        experience:"",
        // LastDateOfApply:"",
        Location:"",
        Description:"",
        noofvacancie:"",
        jobstatus:""

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

    const [postJob, { isLoading }] = usePostJobMutation()

    const handleAddJob = handleSubmit(async data => {
        console.log("Finaldata:::::::::::::::::", data)

        let response = await postJob({
            ...data,
            jobstatus: "active",
            LastDateOfApply:"12/02/2020",
           
        })

        console.log("response===>", response)

        const { error, data: respData } = response || {}

        if (respData) {
            Toast.show({
                text1: 'Success Message',
                text2: 'Job is Added Successfully',
                position: 'top',
            })
            dispatch(changeAddJobModal(false))
        }
        else if (error)
            Toast.show({
                text1: 'Request Failed',
                text2: 'Invalid Password',
                position: 'top',
            })
    })
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
                                    placeholder="Job title"
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
                            name="Title"
                            defaultValue=""
                        />
                        {errors.Title && <Text style={{ color: "red" }}>Select a Title</Text>
                        }
                    </View>
                    <View style={{
                        zIndex: 100,
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
                                    placeholder="qualification"
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
                            name="Qualification"
                            defaultValue=""
                        />
                        {errors.Qualification && <Text style={{ color: "red" }}>Select a Qualification</Text>
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
                            name="Salary"
                            defaultValue=""
                        />
                        {errors.Salary && <Text style={{ color: "red" }}>Select a Qualification</Text>
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
                        {errors.experience && <Text style={{ color: "red" }}>Select a Qualification</Text>
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
                            name="LastDateOfApply"
                            defaultValue=""
                        />
                        {errors.LastDateOfApply && <Text style={{ color: "red" }}>Select a LastDateOfApply</Text>
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
                            name="Location"
                            defaultValue=""
                        />
                        {errors.Location && <Text style={{ color: "red" }}>Select a Location</Text>
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
                            name="Description"
                            defaultValue=""
                        />
                         {errors.Description && <Text style={{ color: "red" }}>Select a Description</Text>
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
                            name="noofvacancie"
                            defaultValue=""
                        />
                            {errors.noofvacancie && <Text style={{ color: "red" }}>Select a noofvacancie</Text>
                        }

                    </View>
                    <View style={{
                        paddingHorizontal: 10,
                        marginBottom: 20,
                        marginTop: 20
                    }}>
                        <TouchableOpacity
                            onPress={handleAddJob}
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