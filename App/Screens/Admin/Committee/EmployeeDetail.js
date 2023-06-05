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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useAddInCommiteMutation, useCreateCommitteMutation, useGetAllHodQuery } from './Services/CommitteeApi';

function EmployeeDetail(props) {

    const defaultValues = {
        title: "",
    }
    const dispatch = useDispatch()
    const { item } = props.route.params
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
    const [addInCommite, { isLoading }] = useAddInCommiteMutation()
    // const {
    //     data = [],
    //     isFetching,
    // } = useGetAllHodQuery();
    console.log("All Employeesssssss detail::::::", item)
    const handleAddToCommittee = handleSubmit(async data => {
        console.log("data===>", data)

        let response = await addInCommite({
            "Uid": item.Uid,
            CommitteeId:"2",
           
        })
        console.log("response===>", response)

        const { error, data: respData } = response || {}

        if (respData)
            Toast.show({
                text1: 'Success Message',
                text2: 'Logged in successfully!',
                position: 'top',
            })
            props.navigation.navigate("Committe")
         if (error)
            Toast.show({
                text1: 'Request Failed',
                text2: 'Invalid credentials',
                position: 'top',
            })
    })

    function JobdetailFunc() {
            return (
                <>
                    <View
                        // key={key}
                        style={{
                            backgroundColor: "#FFFFFF", shadowColor: "#000",
                            paddingHorizontal: 10, borderRadius: 10, shadowOffset: {
                                width: 0,
                                height: 2,
                            }, shadowOpacity: 0.25, shadowRadius: 3.84,
                            elevation: 5, width: "90%", flex: 1,
                            marginTop: 10, alignSelf: "center",
                        }}>
                        <View style={{
                            height: 80, width: 80,
                            borderRadius: 100, backgroundColor: mainColor,
                            alignItems: "center", justifyContent: "center",
                            alignSelf: "center", top: -40
                        }}>
                            {/* <EmergencyStockIcon color={{ mainColor }} height={22} width={22} style={{}} /> */}
                        </View>

                        <View style={{
                            width: "82%",
                            backgroundColor: backgroundDarkerColor,
                            paddingHorizontal: 10,
                            borderTopRightRadius: 5, borderBottomRightRadius: 8
                        }}>
                            <View style={{
                                flexDirection: "row",
                            }}>
                                <Text style={{
                                    color: borderColor, fontSize: 14,
                                    width: 100,
                                }}>
                                    {"Name"}
                                </Text>
                                <Text style={{
                                    color: textColor, fontSize: 14,
                                    fontWeight: "bold"
                                }}>
                                    {item.Fname + item.Lname}
                                </Text>
                            </View>
                            <View style={{
                                flexDirection: "row", marginTop: 10,
                            }}>
                                <Text style={{
                                    color: borderColor, fontSize: 14,
                                    width: 100
                                }}>
                                    {"Number"}
                                </Text>
                                <Text style={{
                                    color: textColor, fontSize: 14,

                                }}>
                                    {item.mobile}
                                </Text>
                            </View>
                            <View
                                style={{
                                    flexDirection: "row", marginTop: 10,
                                }}>
                                <Text style={{
                                    color: borderColor, fontSize: 14,
                                    width: 100
                                }}>
                                    {"CNIC"}
                                </Text>
                                <Text style={{
                                    color: textColor, fontSize: 14,
                                    // fontWeight: "bold",
                                    //  textDecorationLine: "underline",
                                    // textDecorationColor: "#1C41F9"
                                }}>
                                    {item.cnic}
                                </Text>
                            </View>
                            <View style={{
                                flexDirection: "row", marginTop: 10,
                            }}>
                                <Text style={{
                                    color: borderColor, fontSize: 14,
                                    width: 100
                                }}>
                                    {"Date of Birth"}
                                </Text>
                                <Text style={{
                                    color: textColor, fontSize: 14,

                                }}>
                                    {item.dob}
                                </Text>
                            </View>
                            <View style={{
                                flexDirection: "row", marginTop: 10,
                            }}>
                                <Text style={{
                                    color: borderColor, fontSize: 14,
                                    width: 100
                                }}>
                                    {"Gender"}
                                </Text>
                                <Text style={{
                                    color: textColor, fontSize: 14,

                                }}>
                                    {item.gender}
                                </Text>
                            </View>
                            <View style={{
                                flexDirection: "row", marginTop: 10,
                                marginBottom: 20
                            }}>
                                <Text style={{
                                    color: borderColor, fontSize: 14,
                                    width: 100
                                }}>
                                    {"Address"}
                                </Text>
                                <Text style={{
                                    color: textColor, fontSize: 14,width:180

                                }}>
                                    {item.address}
                                </Text>
                            </View>

                        </View>
                    </View>

                </>
            )
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
                        {"Employee Detail"}
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
                    marginTop: 20
                }}>
                    <View
                        style={{
                            width: "100%", backgroundColor: backgroundColor,
                            alignSelf: "center",
                            flex: 1,
                            borderRadius: 8,
                            // paddingTop: 10
                        }}>
                        {
                            loader ?
                                <View style={{ justifyContent: "center", alignItems: "center" }}>
                                    <ActivityIndicator color={mainColor} size={40} />
                                </View>
                                :
                                <View style={{ marginTop: 10, backgroundColor: backgroundColor, }}>
                                    {JobdetailFunc()}
                                </View>
                        }
                    </View>
                </View>
                {/* <View style={{ marginTop: 10, paddingHorizontal: 20 }}>
                    <View style={{ flexDirection: "row", marginTop: 20, alignItems: "center" }}>
                        <MaterialCommunityIcons
                            name="rename-box"
                            size={24}
                            color={borderColor}
                        // style={{marginLeft:10}}
                        />
                        <Text style={{
                            color: borderColor, fontSize: 16,
                            fontWeight: "bold", marginLeft: 5
                        }}>
                            {"Committe Title"}
                        </Text>
                    </View>
                    <View style={{ alignSelf: "center", width: "100%", marginTop: 10 }}>
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
                                    placeholder="Enter Committe Title...."
                                    placeholderTextColor={"lightgray"}
                                    style={{
                                        backgroundColor: "#FFFFFF",
                                        zIndex: 10,
                                        height: 40,
                                        borderRadius: 10,
                                        paddingLeft: 13,
                                        color: textColor,
                                        fontSize: 13,
                                        width: "100%",
                                        borderWidth: 0.5,
                                        borderColor: "lightgray"
                                    }}
                                />
                            )}
                            name="title"
                            defaultValue=""
                        />
                    </View>
                </View> */}
                <View style={{
                    marginTop: 10,
                    paddingHorizontal: 20,
                }}>
                    <TouchableOpacity
                        onPress={isLoading ?
                            null
                            :
                            handleAddToCommittee
                        }
                        style={{
                            opacity: isLoading ? 0.7 : 1,
                            backgroundColor: isLoading ?
                                "#808080"
                                :
                                mainColor,
                            height: 40,
                            width: 130,
                            alignSelf: "flex-end",
                            borderRadius: 8,
                            justifyContent: "center"

                        }}
                    >
                        {isLoading ?
                            <ActivityIndicator
                                color={mainColor}
                            />
                            :
                            <Text
                                style={{
                                    fontSize: 13,
                                    color: "#fff",
                                    fontWeight: 'bold',
                                    alignSelf: "center",
                                }}>
                               Add to Committee
                            </Text>
                        }
                    </TouchableOpacity>
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

export default EmployeeDetail