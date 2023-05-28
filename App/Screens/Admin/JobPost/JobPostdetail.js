import React, { useEffect, useState } from 'react';
import {
    Text, View, TextInput,
    TouchableOpacity, FlatList
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import BackIcon from '../../../Assets/Svgs/BackIcon.svg';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { ScrollView } from 'react-native-gesture-handler';
import { ActivityIndicator, Divider } from 'react-native-paper';
import { useGetJobPostedDetailQuery } from './Services/JobPostApi';

function JobPostdetail(props) {

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
        backgroundColor, buttoncolor,
        backgroundDarkerColor, borderColor
    } = useSelector(state => state.styles)
    const [secureTextEntry, ChangeSecureTextEntry] = useState(true);
    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        mode: 'onChange',
        defaultValues: defaultValues,
    });
    const [jobDetail, setJobDetail] = useState(null)
    const [loader, setLoader] = useState(false)

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
    const {
        data = [],
        isFetching,
    } = useGetJobPostedDetailQuery();
    console.log("detail::::::", data)

    function JobdetailFunc() {
        return [data].map((item, key) => {
            // const { name, website, image } = item
            return (
                <>
                    <View
                        key={key}
                        style={{
                            backgroundColor: backgroundDarkerColor, shadowColor: "#000",
                            paddingHorizontal: 10, borderRadius: 10, shadowOffset: {
                                width: 0,
                                height: 2,
                            }, shadowOpacity: 0.25, shadowRadius: 3.84,
                            elevation: 5, width: "90%", flex: 1,
                            marginTop: 10, alignSelf: "center",
                            height: 200
                        }}>
                        <View style={{
                            width: "82%",
                            backgroundColor: backgroundDarkerColor, paddingHorizontal: 10,
                            borderTopRightRadius: 5, borderBottomRightRadius: 8
                        }}>
                            <View style={{
                                flexDirection: "row", marginTop: 20,
                            }}>
                                <Text style={{
                                    color: borderColor, fontSize: 14,
                                    width: 90,
                                }}>
                                    {"Job Title"}
                                </Text>
                                <Text style={{
                                    color: textColor, fontSize: 14,
                                    fontWeight: "bold"
                                }}>
                                    {item.Title}
                                </Text>
                            </View>
                            <View style={{
                                flexDirection: "row", marginTop: 10,
                            }}>
                                <Text style={{
                                    color: borderColor, fontSize: 14,
                                    width: 90
                                }}>
                                    {"Location"}
                                </Text>
                                <Text style={{
                                    color: textColor, fontSize: 14,

                                }}>
                                    {item.Location}
                                </Text>
                            </View>
                            <View
                                style={{
                                    flexDirection: "row", marginTop: 10,
                                }}>
                                <Text style={{
                                    color: borderColor, fontSize: 14,
                                    width: 90
                                }}>
                                    {"Experience"}
                                </Text>
                                <Text style={{
                                    color: textColor, fontSize: 14,
                                    // fontWeight: "bold",
                                    //  textDecorationLine: "underline",
                                    // textDecorationColor: "#1C41F9"
                                }}>
                                    {item.experience}
                                </Text>
                            </View>
                            <View style={{
                                flexDirection: "row", marginTop: 10,
                            }}>
                                <Text style={{
                                    color: borderColor, fontSize: 14,
                                    width: 90
                                }}>
                                    {"Salary"}
                                </Text>
                                <Text style={{
                                    color: textColor, fontSize: 14,

                                }}>
                                    {item.Salary}
                                </Text>
                            </View>
                            <View style={{
                                flexDirection: "row", marginTop: 10,
                            }}>
                                <Text style={{
                                    color: borderColor, fontSize: 14,
                                    width: 90
                                }}>
                                    {"Qualification"}
                                </Text>
                                <Text style={{
                                    color: textColor, fontSize: 14,

                                }}>
                                    {item.qualification}
                                </Text>
                            </View>
                            <View style={{
                                flexDirection: "row", marginTop: 10,
                                marginBottom: 20
                            }}>
                                <Text style={{
                                    color: borderColor, fontSize: 14,
                                    width: 90
                                }}>
                                    {"Vacancy"}
                                </Text>
                                <Text style={{
                                    color: textColor, fontSize: 14,

                                }}>
                                    {item.noofvacancie}
                                </Text>
                            </View>

                        </View>
                    </View>

                </>
            )
        })
    }

    // const getJobDetail = () => {
    //     if (data) {
    //         setJobDetail([data])
    //         setLoader(false)
    //     }
    //     else{
    //         setLoader(false)
    //     }
    // }

    // useEffect(() => {
    //     getJobDetail()
    // }, [])

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
                            marginRight: 15
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
                            width: "100%", backgroundColor: backgroundColor,
                            alignSelf: "center",
                            flex: 1,
                            // shadowColor: "#000",
                            // shadowOffset: { width: 2, height: 2 },
                            // shadowOpacity: 0.3,
                            // shadowRadius: 2,
                            // elevation: 3,
                            borderRadius: 8,
                            // paddingTop: 10
                        }}>
                        {
                            loader ?
                                <View style={{ justifyContent: "center", alignItems: "center" }}>
                                    <ActivityIndicator color={mainColor} size={40} />
                                </View>
                                :
                                <View style={{ marginTop: 10, backgroundColor: "#fff", }}>
                                    {JobdetailFunc()}
                                </View>
                        }
                    </View>
                </View>
                {/* <View style={{
                    marginTop: 10,
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
                            justifyContent: "center"

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
                </View> */}
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

export default JobPostdetail