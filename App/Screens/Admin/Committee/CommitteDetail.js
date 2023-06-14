import React, { useEffect, useId, useState } from 'react';
import {
    Text, View, TextInput,
    TouchableOpacity, FlatList,
    Image
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import BackIcon from '../../../Assets/Svgs/BackIcon.svg';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { ScrollView } from 'react-native-gesture-handler';
import { ActivityIndicator, Divider } from 'react-native-paper';
import { ms, mvs, s, vs } from 'react-native-size-matters';
import { useGetAllMemberQuery } from './Services/CommitteeApi';
import employeeImages from '../../../Global/EmployeeImages';

function CommitteDetail(props) {

    const defaultValues = {
        // Quantity: "",
        // MarketValue: "",
    }
    const dispatch = useDispatch()
    const { item } = props.route.params || {}
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
            // score:4
        },
        {
            Title: "Location :",
            value: "Rawalpindi",
            // score:7
        },
        {
            Title: "Salary :",
            value: "50K to 80K",
            // score:9
        },
        {
            Title: "Last Date :",
            value: "12/04/2024",
            // score:6
        },
        {
            Title: "Last Date :",
            value: "12/04/2024",
            // score:6
        },
        {
            Title: "Last Date :",
            value: "12/04/2024",
            // score:6
        },


    ]
    const {
        detailsItem
    } = useSelector(state => state.committee)
    const {
        data = [],
        isFetching,
    } = useGetAllMemberQuery(item.Uid);
    console.log("CommmitteeeItems::::::>", item)

    function AllHead({ item, index }) {
        return data.map((item, key) => {

            if (key > 3)
                return null

            const imageSource = employeeImages[item.image];
            return (

                <TouchableOpacity
                    id={item.Uid}
                    onPress={() => props.navigation.navigate("UpdateScoring", {
                        item,
                        id: detailsItem[(key % 4)]?.id
                    })}
                    style={{
                        height: s(90), width: s(135),
                        marginLeft: s(15),
                        alignSelf: "center",
                        backgroundColor: backgroundColor,
                        borderColor: 'red', borderWidth: 0,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        }, shadowOpacity: 0.25, shadowRadius: 3.84,
                        elevation: 5, borderRadius: 8, alignItems: "center",
                        marginTop: 50
                    }}>
                    <View style={{
                        height: 65, width: 65, top: -30,
                        borderRadius: 100, backgroundColor: mainColor,
                        alignItems: "center", justifyContent: "center"
                    }}>
                        {item.image && imageSource ? (
                            <Image
                                source={imageSource}
                                style={{ height: 65, width: 65, alignSelf: 'center', borderRadius: 100 }}
                            />
                        ) : null}
                        {/* <EmergencyStockIcon color={{ mainColor }} height={22} width={22} style={{}} /> */}
                    </View>
                    <View style={{
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: -20
                    }}>
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 12, color: textOffColor
                        }}>
                            {item.Fname + item.Lname}
                        </Text>
                    </View>
                    <View style={{
                        // alignItems: "center",
                        // justifyContent: "center",
                        marginTop: 10, flexDirection: "row",
                        justifyContent: "space-between"
                    }}>
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 12, color: textOffColor
                        }}>
                            {"Score:    "}
                        </Text>
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 12, color: textOffColor
                        }}>
                            {detailsItem[(key % 4)]?.score}
                            {/* {detailsItem[Math.floor(Math.random() * 4)]?.score} */}
                        </Text>
                    </View>
                    {/* <View style={{
                        paddingHorizontal: 10,
                        marginTop: 5,
                    }}>
                        <TouchableOpacity
                            // onPress={() => props.navigation.navigate("PowerQualityAsset")}
                            style={{
                                backgroundColor: mainColor,
                                height: 25,
                                width: 100,
                                alignSelf: "flex-end",
                                borderRadius: 8,
                                justifyContent: "center"

                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 10,
                                    color: "#fff",
                                    fontWeight: 'bold',
                                    alignSelf: "center",
                                }}>
                                Remove
                            </Text>
                        </TouchableOpacity>
                    </View> */}
                </TouchableOpacity>
            )
        })
    }

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
                        {"Create Details"}
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
                    backgroundColor: backgroundColor,
                }}>
                <View style={{
                    width: "100%", alignSelf: "center",
                    marginTop: 15,

                }}>
                    <View
                        style={{
                            width: "90%",
                            shadowColor: "#000",
                            borderRadius: 10, shadowOffset: {
                                width: 0,
                                height: 2,
                            }, shadowOpacity: 0.25, shadowRadius: 3.84,
                            elevation: 5,
                            backgroundColor: "#FFFFFF",
                            alignSelf: "center",
                            flex: 1,
                            borderRadius: 8,
                            // paddingTop: 10
                        }}>
                        <View style={{
                            width: "100%",
                            backgroundColor: "#FFFFFF",
                            paddingHorizontal: 10,
                            borderRadius: 8,
                        }}>
                            <View style={{
                                // marginTop: 20,
                                marginBottom: 10,
                                paddingHorizontal: 10,
                                alignSelf: "center",
                            }}>
                                <Text style={{
                                    color: textColor,
                                    fontSize: 16,
                                    fontWeight: "bold"
                                }}>
                                    {item.fname}
                                </Text>
                            </View>
                            <View style={{
                                flexDirection: "row", marginTop: 10,
                                paddingHorizontal: 10,
                            }}>
                                {/* <Text style={{
                                    color: borderColor, fontSize: 14,
                                    fontWeight: "bold", width: 140
                                }}>
                                    {"Committee Head:"}
                                </Text> */}
                                <Text style={{
                                    color: borderColor, fontSize: 14,
                                    fontWeight: "bold", width: 180
                                }}>
                                    {"Committee Chairman:"}
                                </Text>
                                <Text style={{
                                    color: textColor, fontSize: 14,
                                    fontWeight: "bold"
                                }}>
                                    {"Dr.MunirAhmed"}
                                </Text>
                            </View>
                            <View style={{
                                marginTop: 15,
                                paddingHorizontal: 10,
                                marginBottom: 20
                            }}>
                                {/* <TouchableOpacity
                                    onPress={() => props.navigation.navigate("AllMembers")}
                                    style={{
                                        backgroundColor: mainColor,
                                        height: 35,
                                        width: 130,
                                        alignSelf: "flex-end",
                                        borderRadius: 8,
                                        justifyContent: "center"

                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: 13,
                                            color: "#fff",
                                            fontWeight: 'bold',
                                            alignSelf: "center",
                                        }}>
                                        Add Member
                                    </Text>
                                </TouchableOpacity> */}
                            </View>
                        </View>

                    </View>
                    <View style={{
                        marginTop: 30,
                        paddingHorizontal: 20,
                        // alignSelf: "center",
                    }}>
                        <Text style={{
                            color: textColor,
                            fontSize: 16,
                            fontWeight: "bold"
                        }}>
                            {"Committee Members"}
                        </Text>
                    </View>
                    <View style={{
                        width: "90%",
                        shadowColor: "#000",
                        borderRadius: 10, shadowOffset: {
                            width: 0,
                            height: 2,
                        }, shadowOpacity: 0.25, shadowRadius: 3.84,
                        elevation: 5,
                        backgroundColor: "#FFFFFF",
                        alignSelf: "center",
                        flex: 1,
                        borderRadius: 8,
                        marginTop: 10
                    }}>
                        {
                            loader ?
                                <View style={{ justifyContent: "center", alignItems: "center" }}>
                                    <ActivityIndicator color={mainColor} size={40} />
                                </View>
                                :
                                <View style={{
                                    flexDirection: "row",
                                    width: "100%",
                                    flexWrap: "wrap",
                                    marginRight: s(20)
                                }}>
                                    <AllHead />
                                </View>
                        }
                    </View>
                </View>

            </ScrollView>
            <View style={{
                height: 10,
                width: "100%",
                backgroundColor: backgroundColor
            }}>

            </View>
        </View>
    )
}

export default CommitteDetail