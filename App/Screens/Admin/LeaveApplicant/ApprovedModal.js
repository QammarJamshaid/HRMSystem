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
import { changeAddApprovedModal } from "./Store/LeaveSlice";
import { ms, mvs, s, vs } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';

export default function ApprovedModal({
    props
}) {
    const defaultValues = {
        propertyId: null,
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
        addApprovedModal
    } = useSelector(state => state.leave) || {}


    console.log("addApprovedModal===>", addApprovedModal)
    const showDatepicker = () => {
        showMode('date');
    };



    return (
        <Modal
            transparent
            animationType="fade"
            visible={addApprovedModal}
            onRequestClose={() => {
                dispatch(changeAddApprovedModal(false))
            }}>
            <View
                // onPress={() => dispatch(changeAddApprovedModal(false))}
                style={styles.contentContainer}>

                <View style={
                    {
                        backgroundColor: mainLighterColor,
                        marginHorizontal: 5,
                        marginVertical: 70,
                        borderRadius: 10,
                        width: "75%",
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
                        <TouchableOpacity
                            onPress={() => dispatch(changeAddApprovedModal(false))}
                            style={{ alignSelf: "flex-end", marginRight: 20, marginTop: 20 }}
                        >
                            <Entypo
                                name="cross"
                                size={25}
                                color={borderColor}
                            />
                        </TouchableOpacity>
                        <View
                            style={{
                                height: 100, width: 100, alignItems: "center",
                                alignSelf: "center", borderRadius: 100, marginBottom: 10
                            }}
                        >
                            <Image
                                source={require('../../../Assets/Images/SuccessImg.png')}
                                style={{ width: 100, height: 100, borderRadius: 100 }}
                            />
                        </View>
                        <View style={{
                            alignSelf: "center", marginBottom: 10,
                            justifyContent: "center", alignItems: "center"
                        }}>
                            <Text style={{ color: textColor, fontWeight: "bold", fontSize: 16 }}>
                                {"Application is Approved!"}
                            </Text>
                        </View>
                        <Divider
                            style={{
                                borderWidth: 0.3, width: "90%", alignSelf: "center",
                                marginTop: 10, borderColor: "lighgtgray"
                            }} />
                        <TouchableOpacity
                            onPress={() => {
                                dispatch(changeAddApprovedModal(false))
                                // props.navigation.navigate("FindWork")
                            }}

                            style={{
                                alignSelf: "center", marginBottom: 20, marginTop: 20,
                                justifyContent: "center", alignItems: "center"
                            }}>
                            <Text style={{ color: buttoncolor, fontWeight: "bold", fontSize: 16 }}>
                                {"Done"}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginBottom: 10 }} />
                </View>
            </View>
        </Modal>
    );
}