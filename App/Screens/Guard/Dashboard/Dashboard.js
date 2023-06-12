import React, { useEffect, useRef, useState } from "react";
import {
    View, Button, Text, StyleSheet,
    TouchableOpacity, TextInput, Image,
    FlatList,
    ActivityIndicator
} from "react-native";
import { useForm, Controller } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Usercircle from '../../../Assets/Svgs/Usercircle.svg';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { ms, mvs, s, vs } from 'react-native-size-matters';

export default function Dashboard(props) {

    const defaultValues = {
        Quantity: "",
        MarketValue: "",
    }

    const dispatch = useDispatch()

    const {
        textColor,
        mainColor,
        borderColor,
        backgroundDarkerColor,
        textLighterColor,
        backgroundColor, buttoncolor,
        textOffColor
    } = useSelector(state => state.styles)
    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        mode: 'onChange',
        defaultValues: defaultValues,
    });

    useEffect(() => {
    }, [])
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: backgroundColor
            }}
        >
            <View style={{
                height: getStatusBarHeight() + 50,
                backgroundColor: backgroundColor,
                justifyContent: 'flex-end',
            }}>
                <View
                    style={{
                        marginBottom: 10,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingHorizontal: 20,
                        borderColor: 'red', borderWidth: 0,
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
                            fontSize: 20,
                            fontWeight: "700",
                            color: textColor
                        }}
                    >
                        Home
                    </Text>
                    <View style={{
                        flexDirection: "row", justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Usercircle color={'#fff'} height={30} width={30} style={{}} />
                    </View>
                </View>
            </View>
            <View
                style={{
                    flex: 1,
                    width: "100%",
                    alignItems: "center",
                    // marginTop: 120,
                    justifyContent: "center",
                    borderRadius: 10,
                    // marginBottom: 80
                }}
            >
                <Image
                    resizeMode="contain"
                    source={require('../../../Assets/Images/HRMHomeImage.png')}
                    style={{ flex: 1, width: "100%", borderRadius: 5 }}
                />
            </View>
            <View>

            </View>
        </View >

    );
}