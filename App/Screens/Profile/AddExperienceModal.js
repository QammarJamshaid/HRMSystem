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
import { changeAddExperienceModal } from "./Store/MyProfileSlice";
import Entypo from 'react-native-vector-icons/Entypo';
import CheckBoxIcon from '../../Assets/Svgs/CheckBoxIcon.svg';

export default function AddExperienceModal({
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
        addExperienceModal
    } = useSelector(state => state.myProfile) || {}


    console.log("addEducationModal===>", addExperienceModal)
    const showDatepicker = () => {
        showMode('date');
    };



    return (
        <Modal
            transparent
            animationType="fade"
            visible={addExperienceModal === true}
            onRequestClose={() => {
                dispatch(changeAddExperienceModal(false))
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
                            Add Experience
                        </Text>
                        <TouchableOpacity
                            onPress={() => dispatch(changeAddExperienceModal(false))}
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
                                    placeholder="Job Title"
                                    placeholderTextColor={textLightColor}
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
                            name="jobTitle "
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
                                    placeholder="Company"
                                    placeholderTextColor={textLightColor}
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
                                    placeholder="StartDate"
                                    placeholderTextColor={textLightColor}
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
                                    placeholder="EndDate"
                                    placeholderTextColor={textLightColor}
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
                            name="startDate"
                            defaultValue=""
                        />

                    </View>
                    <View style={{ flexDirection: "row", paddingHorizontal: 20, marginTop: 20 }}>
                        <CheckBoxIcon color={textOffColor} height={18} width={18} style={{}} />
                        <Text style={{
                            color: textLightColor,
                            fontSize: 14,
                            marginLeft: 10,
                            fontWeight: "500"
                        }}>
                            Working Now
                        </Text>
                    </View>
                    <View style={{
                        paddingHorizontal: 10,
                        marginBottom: 20,
                        marginTop: 20
                    }}>
                        <TouchableOpacity
                            onPress={() => dispatch(changeAddExperienceModal(false))}
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