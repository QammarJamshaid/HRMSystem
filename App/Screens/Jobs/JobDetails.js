import React, { useEffect, useState } from 'react';
import {
    Text, View, TextInput,
    TouchableOpacity, FlatList
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import BackIcon from '../../Assets/Svgs/BackIcon.svg';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { ScrollView } from 'react-native-gesture-handler';
import { Divider } from 'react-native-paper';

function JobDetails(props) {

    const defaultValues = {
        Quantity: "",
        MarketValue: "",
    }
    const dispatch = useDispatch()
    const {
        textColor,
        mainColor,
        textOffColor,
        backgroundLighterColor,
        textLightColor,
        backgroundColor, buttoncolor,
        backgroundDarkerColor, borderColor
    } = useSelector(state => state.styles)
    const [secureTextEntry, ChangeSecureTextEntry] = useState(true);
    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        mode: 'onChange',
        defaultValues: defaultValues,
    });
    const [state, setState] = useState(null)

    const jobDetailsItem = [
        {
            Title: "Job Title :",
            value: "React Native Developer",
        },
        {
            Title: "Location :",
            value: "Rawalpindi",
        },
        {
            Title: "Salary :",
            value: "50K to 80K",
        },
        {
            Title: "Last Date :",
            value: "12/04/2024",
        },
        {
            Title: "Description :",
            value: "Muestra tu marca en cada mail con el correo electrónico profesional de GoDaddy.GoDaddy",
        },


    ]

    function JobdetailFunc({ item, index }) {
        // const { name, website, image } = item
        return (
            <View style={{
                // width:"100%",
                alignSelf: "center",
                backgroundColor: backgroundDarkerColor,
                marginTop: 20,
                // marginBottom: 10,
                flexDirection: "row",
                paddingHorizontal: 20,
            }}>
                <Text style={{
                    color: textLightColor,
                    fontSize: 12,
                    width: "40%",
                    fontWeight: "bold"
                }}>
                    {item.Title}
                </Text>
                <Text style={{
                    color: borderColor,
                    fontSize: 12,
                    width: "60%",
                    fontWeight: "500"
                }}>
                    {item.value}
                </Text>
            </View>
        )

    }

    useEffect(() => {
    }, [])

    return (
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
                            onPress={() => props.navigation.goBack()}
                        >
                            <BackIcon name='burst-sale' height={14} width={14} color={textOffColor} />
                        </TouchableOpacity>
                    </View>
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: "bold",
                            color: textColor,
                            marginRight:15
                        }}
                    >
                        {"Job Details"}
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
                    width: "100%", alignSelf: "center",
                    marginTop: 20
                }}>
                    <View
                        style={{
                            width: "90%", backgroundColor: "#fff",
                            alignSelf: "center", marginTop: 15,
                            shadowColor: "#000",
                            shadowOffset: { width: 2, height: 2 },
                            shadowOpacity: 0.3,
                            shadowRadius: 2,
                            elevation: 3,
                            borderRadius: 8, paddingBottom: 10,
                            paddingTop: 10
                        }}>
                        <FlatList
                            data={jobDetailsItem}
                            ListFooterComponent={() => <View style={{ height: 20 }} />}
                            renderItem={JobdetailFunc}
                            keyExtractor={(item, index) => index}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                </View>
                <View style={{
                    marginTop: 40,
                    paddingHorizontal: 20,
                }}>
                    <TouchableOpacity
                        // onPress={() => props.navigation.navigate("PowerQualityAsset")}
                        style={{
                            backgroundColor: mainColor,
                            height: 40,
                            width: "27%",
                            alignSelf: "flex-end",
                            borderRadius: 8,
                            justifyContent:"center"

                        }}
                    >
                        <Text
                            style={{
                                fontSize: 14,
                                color: "#fff",
                                fontWeight: 'bold',
                                alignSelf: "center",
                            }}>
                            Apply
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <View style={{
                height: 10,
                width: "100%",
                backgroundColor: backgroundLighterColor
            }}>

            </View>
        </View>
    )
}

export default JobDetails