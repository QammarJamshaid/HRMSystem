import React, { useState } from "react";
import { Controller, useForm } from 'react-hook-form';
import {
    Text,
    TouchableOpacity, View
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { useDispatch, useSelector } from 'react-redux'
import { useGlobalContext } from "../../../Services2";
import { TextInput } from "react-native";
import BackIcon from '../../../Assets/Svgs/BackIcon.svg';
import DropDownPicker from 'react-native-dropdown-picker';
import { useGetApplicantDetailsQuery, useSubmitApplicantDetailMutation } from "../Services/EmployeeApi";

function EmployeeApplicantDetail(props) {

    const defaultValues = {
        remark: "",
    }

    const dispatch = useDispatch()

    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        mode: 'onChange',
        defaultValues: defaultValues,
    });

    const { user }
        = useGlobalContext()

    const {
        mainColor,
        mainLighterColor,
        backgroundColor,
        textColor,
        textOffColor,
        buttoncolor,
        backgroundDarkerColor,
        greenColor,
        lightbluecolor,
        redcolor,
        borderColor,
        blackcolor
    } = useSelector(state => state.styles)
    const payStatus = [
        { value: "0", label: "1" },
        { value: "1", label: "2" },
        { value: "2", label: "3" },
        { value: "3", label: "4" },
        { value: "4", label: "5" },
        { value: "5", label: "6" },
        { value: "6", label: "7" },
        { value: "7", label: "8" },
        { value: "8", label: "9" },
        { value: "9", label: "10" },
    ]
    const [isJobPickerOpen, setIsJobPickerOpen] = useState(false)

    const {
        data = [],
        isFetching,
    } = useGetApplicantDetailsQuery(user?.Uid)


    const [submitApplicantDetail, { isLoading }] = useSubmitApplicantDetailMutation()
    const handleSubmitDetail = handleSubmit(async data => {

        console.log("remarks:::::::", data)
        let response = await submitApplicantDetail({
            ...data,
        })

        const { error, data: respData } = response || {}

        if (error)
            Toast.show({
                text1: 'Success Message',
                text2: error.data.message,
                position: 'top',
            })
        props.navigation.navigate("EmployeeAssignedJob")
        if (respData)
            Toast.show({
                text1: 'Registeration failed!',
                text2: error.data.message,
                position: 'top'
            })
    })



    // console.log("user:===>", user)
    console.log("Applicant detail:::::::", data)
    return (
        <>
            <View style={{ flex: 1, backgroundColor: backgroundColor }}>

                <View style={{
                    height: getStatusBarHeight() + 50,
                    backgroundColor: backgroundColor,
                    justifyContent: 'flex-end',
                    paddingHorizontal: 10,
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
                            {"Applicant Deatils"}
                        </Text>
                        <View style={{
                            flexDirection: "row", justifyContent: "center",
                            alignItems: "center"
                        }}>

                        </View>
                    </View>
                </View>
                <ScrollView
                    contentContainerStyle={{
                        backgroundColor: backgroundColor,
                        paddingHorizontal: 10,
                        paddingBottom: 100
                    }}>

                    <View style={{ paddingHorizontal: 15, backgroundColor: backgroundColor, }}>
                        <TouchableOpacity
                            // onPress={() => props.navigation.navigate('EditProfile')}
                            style={{
                                flex: 1,
                                backgroundColor: "#fff", borderColor: 'red', borderWidth: 0,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5,
                                marginTop: 10, justifyContent: "center", borderRadius: 10,
                            }}>
                            <View style={{
                                marginTop: 10,
                                marginBottom: 10,
                                alignSelf: "center"
                            }}>
                                <Text style={{
                                    fontWeight: "bold",
                                    color: textColor, fontSize: 16
                                }}>
                                    {data[0]?.Job?.Title}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            // onPress={() => props.navigation.navigate('EditProfile')}
                            style={{
                                flex: 1,
                                backgroundColor: "#fff", borderColor: 'red', borderWidth: 0,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5,
                                marginTop: 10, justifyContent: "center", borderRadius: 10

                            }}>
                            <View style={{
                                paddingHorizontal: 20, marginBottom: 20,
                                justifyContent: "center", marginTop: 10
                            }}>
                                <View style={{
                                    marginTop: 10, zIndex: 30,
                                    // alignItems: "center",
                                }}>
                                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: mainColor, }}>
                                        {"Personal Information"}
                                    </Text>
                                </View>
                                <View style={{ flexDirection: "row", marginTop: 20, }}>
                                    <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, opacity: 0.4, width: 90 }}>
                                        Name:
                                    </Text>
                                    <View style={{ justifyContent: "center", }}>
                                        <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, opacity: 0.6, width: 50 }}>
                                            {":"}
                                        </Text>
                                    </View>
                                    <View style={{ justifyContent: "center", }}>
                                        <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, }}>
                                            {data[0]?.User?.Fname + data[0]?.User?.Lname}
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: "row", marginTop: 20, }}>
                                    <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, opacity: 0.4, width: 90 }}>
                                        Gender
                                    </Text>
                                    <View style={{ justifyContent: "center", }}>
                                        <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, opacity: 0.6, width: 50 }}>
                                            {":"}
                                        </Text>
                                    </View>
                                    <View style={{ justifyContent: "center", }}>
                                        <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, }}>
                                            {data[0]?.User?.gender}
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: "row", marginTop: 20, }}>
                                    <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, opacity: 0.4, width: 90 }}>
                                        Email:
                                    </Text>
                                    <View style={{ justifyContent: "center" }}>
                                        <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, opacity: 0.6, width: 50 }}>
                                            {":"}
                                        </Text>
                                    </View>
                                    <View style={{ justifyContent: "center", }}>
                                        <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, }}>
                                            {data[0]?.User?.email}
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: "row", marginTop: 20, }}>
                                    <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, opacity: 0.4, width: 90 }}>
                                        Contact :
                                    </Text>
                                    <View style={{ justifyContent: "center" }}>
                                        <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, opacity: 0.6, width: 50 }}>
                                            {":"}
                                        </Text>
                                    </View>
                                    <View style={{ justifyContent: "center", }}>
                                        <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, }}>
                                            {data[0]?.User?.mobile}
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: "row", marginTop: 20, }}>
                                    <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, opacity: 0.4, width: 90 }}>
                                        Address:
                                    </Text>
                                    <View style={{ justifyContent: "center" }}>
                                        <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, opacity: 0.6, width: 50 }}>
                                            {":"}
                                        </Text>
                                    </View>
                                    <View style={{ justifyContent: "center", }}>
                                        <Text style={{
                                            fontSize: 14, fontWeight: '500',
                                            color: textColor, width: 130
                                        }}>
                                            {data[0]?.User?.address}
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: "row", marginTop: 20, }}>
                                    <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, opacity: 0.4, width: 90 }}>
                                        DOB:
                                    </Text>
                                    <View style={{ justifyContent: "center" }}>
                                        <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, opacity: 0.6, width: 50 }}>
                                            {":"}
                                        </Text>
                                    </View>
                                    <View style={{ justifyContent: "center", }}>
                                        <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, }}>
                                            {data[0]?.User?.dob}
                                        </Text>
                                    </View>
                                </View>
                            </View>


                        </TouchableOpacity>
                        <TouchableOpacity
                            // onPress={() => props.navigation.navigate('EditProfile')}
                            style={{
                                flex: 1,
                                backgroundColor: "#fff", borderColor: 'red', borderWidth: 0,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5,
                                marginTop: 10, justifyContent: "center", borderRadius: 10

                            }}>
                            <View style={{
                                paddingHorizontal: 20, marginBottom: 20,
                                justifyContent: "center", marginTop: 10
                            }}>
                                <View style={{
                                    marginTop: 10, zIndex: 30,
                                    // alignItems: "center",
                                }}>
                                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: mainColor, }}>
                                        {"Eductional Information"}
                                    </Text>
                                </View>
                                <View style={{ flexDirection: "row", marginTop: 20, }}>
                                    <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, opacity: 0.4, width: 90 }}>
                                        Degree:
                                    </Text>
                                    <View style={{ justifyContent: "center", }}>
                                        <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, opacity: 0.6, width: 50 }}>
                                            {":"}
                                        </Text>
                                    </View>
                                    <View style={{ justifyContent: "center", }}>
                                        <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, }}>
                                            {data[0]?.User?.Educations[0]?.Degree}
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: "row", marginTop: 20, }}>
                                    <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, opacity: 0.4, width: 90 }}>
                                        Indtitute
                                    </Text>
                                    <View style={{ justifyContent: "center", }}>
                                        <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, opacity: 0.6, width: 50 }}>
                                            {":"}
                                        </Text>
                                    </View>
                                    <View style={{ justifyContent: "center", }}>
                                        <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, }}>
                                            {data[0]?.User?.Educations[0]?.Institute}
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: "row", marginTop: 20, }}>
                                    <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, opacity: 0.4, width: 90 }}>
                                        Board:
                                    </Text>
                                    <View style={{ justifyContent: "center" }}>
                                        <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, opacity: 0.6, width: 50 }}>
                                            {":"}
                                        </Text>
                                    </View>
                                    <View style={{ justifyContent: "center", }}>
                                        <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, }}>
                                            {data[0]?.User?.Educations[0]?.Board}
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: "row", marginTop: 20, }}>
                                    <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, opacity: 0.4, width: 90 }}>
                                        Start Date :
                                    </Text>
                                    <View style={{ justifyContent: "center" }}>
                                        <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, opacity: 0.6, width: 50 }}>
                                            {":"}
                                        </Text>
                                    </View>
                                    <View style={{ justifyContent: "center", }}>
                                        <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, }}>
                                            {data[0]?.User?.Educations[0]?.Startdate}
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: "row", marginTop: 20, }}>
                                    <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, opacity: 0.4, width: 90 }}>
                                        End date:
                                    </Text>
                                    <View style={{ justifyContent: "center" }}>
                                        <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, opacity: 0.6, width: 50 }}>
                                            {":"}
                                        </Text>
                                    </View>
                                    <View style={{ justifyContent: "center", }}>
                                        <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, }}>
                                            {data[0]?.User?.Educations[0]?.Enddate}
                                        </Text>
                                    </View>
                                </View>
                            </View>


                        </TouchableOpacity>
                        <TouchableOpacity
                            // onPress={() => props.navigation.navigate('EditProfile')}
                            style={{
                                flex: 1,
                                backgroundColor: "#fff", borderColor: 'red', borderWidth: 0,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5,
                                marginTop: 10, justifyContent: "center", borderRadius: 10

                            }}>
                            <View style={{
                                paddingHorizontal: 20, marginBottom: 20,
                                justifyContent: "center", marginTop: 10
                            }}>
                                <View style={{
                                    marginTop: 10, zIndex: 30,
                                    // alignItems: "center",
                                }}>
                                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: mainColor, }}>
                                        {"Previous Experience"}
                                    </Text>
                                </View>
                                <View style={{ flexDirection: "row", marginTop: 20, }}>
                                    <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, opacity: 0.4, width: 90 }}>
                                        Company:
                                    </Text>
                                    <View style={{ justifyContent: "center", }}>
                                        <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, opacity: 0.6, width: 50 }}>
                                            {":"}
                                        </Text>
                                    </View>
                                    <View style={{ justifyContent: "center", }}>
                                        <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, }}>
                                            {data[0]?.User?.Experiences[0]?.Company}
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: "row", marginTop: 20, }}>
                                    <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, opacity: 0.4, width: 90 }}>
                                        Title
                                    </Text>
                                    <View style={{ justifyContent: "center", }}>
                                        <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, opacity: 0.6, width: 50 }}>
                                            {":"}
                                        </Text>
                                    </View>
                                    <View style={{ justifyContent: "center", }}>
                                        <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, }}>
                                            {data[0]?.User?.Experiences[0]?.Title}
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: "row", marginTop: 20, }}>
                                    <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, opacity: 0.4, width: 90 }}>
                                        Start Date:
                                    </Text>
                                    <View style={{ justifyContent: "center" }}>
                                        <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, opacity: 0.6, width: 50 }}>
                                            {":"}
                                        </Text>
                                    </View>
                                    <View style={{ justifyContent: "center", }}>
                                        <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, }}>
                                            {data[0]?.User?.Experiences[0]?.Startdate}
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: "row", marginTop: 20, }}>
                                    <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, opacity: 0.4, width: 90 }}>
                                        Till Now :
                                    </Text>
                                    <View style={{ justifyContent: "center" }}>
                                        <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, opacity: 0.6, width: 50 }}>
                                            {":"}
                                        </Text>
                                    </View>
                                    <View style={{ justifyContent: "center", }}>
                                        <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, }}>
                                            {data[0]?.User?.Experiences[0]?.currentwork}
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: "row", marginTop: 20, }}>
                                    <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, opacity: 0.4, width: 90 }}>
                                        End date:
                                    </Text>
                                    <View style={{ justifyContent: "center" }}>
                                        <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, opacity: 0.6, width: 50 }}>
                                            {":"}
                                        </Text>
                                    </View>
                                    <View style={{ justifyContent: "center", }}>
                                        <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, }}>
                                            {data[0]?.User?.Experiences[0]?.Enddate}
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: "row", marginTop: 20, }}>
                                    <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, opacity: 0.4, width: 90 }}>
                                        Other Skills:
                                    </Text>
                                    <View style={{ justifyContent: "center" }}>
                                        <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, opacity: 0.6, width: 50 }}>
                                            {":"}
                                        </Text>
                                    </View>
                                    <View style={{ justifyContent: "center", }}>
                                        <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, }}>
                                            {data[0]?.User?.Experiences[0]?.otherskill}
                                        </Text>
                                    </View>
                                </View>
                            </View>


                        </TouchableOpacity>
                        <TouchableOpacity
                            // onPress={() => props.navigation.navigate('EditProfile')}
                            style={{
                                flex: 1,
                                backgroundColor: "#fff", borderColor: 'red', borderWidth: 0,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5,
                                marginTop: 10, justifyContent: "center", borderRadius: 10,
                            }}>
                            <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                                <Text style={{
                                    fontWeight: "bold",
                                    color: mainColor, fontSize: 16
                                }}>
                                    {"Your Remarks :"}
                                </Text>
                            </View>
                            <View style={{
                                zIndex: 100,
                                alignSelf: "flex-end",
                                width: "100%"
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
                                            placeholder="Remarks"
                                            listMode="MODAL"
                                            containerStyle={{
                                            }}
                                            style={{
                                                backgroundColor: "#FFFFFF",
                                                color: "#fff",
                                                // paddingLeft: 10,
                                                borderRadius: 10,
                                                minHeight: 40,
                                                borderColor: textOffColor,
                                                borderWidth: 1,
                                                width: "90%",
                                                padding: 0, alignSelf: "center",
                                                marginTop: 10,
                                                marginBottom: 20
                                            }}
                                            textStyle={{ color: "#FFFFFF" }}
                                            labelProps={{
                                                style: { color: textColor, fontWeight: "bold" }
                                            }}
                                            dropDownContainerStyle={{
                                                backgroundColor: "#FFFFFF",
                                                borderColor: textOffColor,
                                                borderWidth: 1,
                                                flex: 1,
                                                width: "90%",
                                                alignSelf: "center",
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
                                    name="remark"
                                />
                                {errors.remark && <Text style={{ color: "red" }}>Select a remark</Text>
                                }
                            </View>
                        </TouchableOpacity>
                        <View style={{
                            flexDirection: "row", width: "100%",
                            justifyContent: "space-between",
                            flex: 1,
                            backgroundColor: "#fff", borderColor: 'red', borderWidth: 0,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5,
                            marginTop: 10, borderRadius: 10,
                            paddingHorizontal: 10
                        }}>
                            <TouchableOpacity
                                 onPress={() => handleSubmitDetail()}
                                style={{
                                    backgroundColor: mainColor,
                                    height: 35,
                                    width: "45%",
                                    borderRadius: 8,
                                    justifyContent: "center",
                                    marginBottom: 10,
                                    marginTop: 10

                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 12,
                                        color: "#fff",
                                        fontWeight: 'bold',
                                        alignSelf: "center",
                                    }}>
                                    Submit
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => handleSubmitDetail()}
                                style={{
                                    backgroundColor: mainColor,
                                    height: 35,
                                    width: "45%",
                                    borderRadius: 8,
                                    justifyContent: "center",
                                    marginBottom: 10,
                                    marginTop: 10

                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 12,
                                        color: "#fff",
                                        fontWeight: 'bold',
                                        alignSelf: "center",
                                    }}>
                                    Done
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                <View style={{ backgroundColor: backgroundColor, height: 15 }} />
            </View>
        </>
    );
};

export default EmployeeApplicantDetail;