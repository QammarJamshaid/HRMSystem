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
import { changeAddEducationModal } from "./Store/MyProfileSlice";
import Entypo from 'react-native-vector-icons/Entypo';

export default function AddEducationModal({
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
        addEducationModal
    } = useSelector(state => state.myProfile) || {}


    console.log("addEducationModal===>", addEducationModal)
    const showDatepicker = () => {
        showMode('date');
    };



    return (
        <Modal
            transparent
            animationType="fade"
            visible={addEducationModal === true}
            onRequestClose={() => {
                dispatch(changeAddEducationModal(false))
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
                            Add Education
                        </Text>
                        <TouchableOpacity
                            onPress={() => dispatch(changeAddEducationModal(false))}
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
                                    placeholder="Education Title"
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
                            name="educationTitle "
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
                                    placeholder="Institute"
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
                            name="institute"
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
                    <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                        <Text style={{
                            color: textLightColor,
                            fontSize: 14,
                            fontWeight: "500"
                        }}>
                            Attachments
                        </Text>
                    </View>
                    <View style={{
                        marginTop: 20, paddingHorizontal: 20, width: "90%",
                        alignSelf: "center", borderWidth: 1, borderColor: "#79A6DB",
                        borderStyle: "dashed", height: 80, backgroundColor: "#F1F7FE",
                        borderRadius: 10, alignItems: "center",
                        justifyContent: "center"

                    }}>
                        {/* <FileuploadIcon color={textOffColor} height={20} width={20} style={{}} /> */}
                        <View style={{flexDirection:"row"}}>
                        <Text style={{
                            color: textLightColor,
                            fontSize: 12,
                            marginTop:5,
                            fontWeight: "500"
                        }}>
                            Drag and drop your files here or
                        </Text>
                        <Text style={{
                            color: mainColor,
                            fontSize: 12,
                            marginTop:5,
                            fontWeight: "500"
                        }}>
                            choose file
                        </Text>
                        </View>
                    </View>
                    <View style={{
                        paddingHorizontal: 10,
                        marginBottom: 20,
                        marginTop: 20
                    }}>
                        <TouchableOpacity
                            onPress={() => dispatch(changeAddEducationModal(false))}
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