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
import DropDownPicker from 'react-native-dropdown-picker';
import { useSubmitApplicantDetailMutation } from '../../Employee/Services/EmployeeApi';
import { setDetailsItem } from './Store/CommitteeSlice';

function UpdateScoring(props) {

    const defaultValues = {
        remark: "",
        // Quantity: "",
        // MarketValue: "",
    }
    const dispatch = useDispatch()
    const { item, id } = props.route.params || {}
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
    const [submitApplicantDetail, { isLoading }] = useSubmitApplicantDetailMutation()

    const {
        detailsItem
    } = useSelector(state => state.committee)

    console.log("detailsItem===>", detailsItem)

    const handleSubmitDetail = handleSubmit(async data => {


        const dItem = detailsItem.find(obj => obj.id == id)
        const notIDItem = detailsItem.filter(obj => obj.id != id)

        dispatch(setDetailsItem([
            ...notIDItem, {
                ...dItem,
                score: payStatus.find(obj => obj.value == data.remark).label
            }
        ]))
        // let response = await submitApplicantDetail({
        //     ...data,
        // })

        // const { error, data: respData } = response || {}

        // if (error)
        //     Toast.show({
        //         text1: 'Success Message',
        //         text2: error.data.message,
        //         position: 'top',
        //     })
        // props.navigation.navigate("Committe")
        // if (respData)
        //     Toast.show({
        //         text1: 'Registeration failed!',
        //         text2: error.data.message,
        //         position: 'top'
        //     })
    })

    useEffect(() => {

        console.log("id===>", id)

        console.log(" detailsItem.find(obj => obj.id == id).score===>", detailsItem.find(obj => obj.id == id).score)

        let selectedScore = detailsItem.find(obj => obj.id == id).score

        const payValue = payStatus.find(obj => obj.label == selectedScore).value

        if (id)
            reset({
                remark: payValue.toString()
            })
    }, [id])

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
                        {"Update Scoring"}
                    </Text>
                    <View style={{
                        flexDirection: "row", justifyContent: "center",
                        alignItems: "center"
                    }}>

                    </View>
                </View>
            </View>
            <TouchableOpacity
                // onPress={() => props.navigation.navigate('EditProfile')}
                style={{
                    width: "90%",
                    alignSelf: "center",
                    backgroundColor: "#fff", borderColor: 'red', borderWidth: 0,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5,
                    marginTop: 10, justifyContent: "center", borderRadius: 10,
                }}>
                <View style={{
                    marginTop: 20, paddingHorizontal: 20,
                    flexDirection: "row"
                }}>
                    <Text style={{
                        fontWeight: "bold",
                        color: mainColor, fontSize: 16
                    }}>
                        {"Name:   "}
                    </Text>
                    <Text style={{
                        fontWeight: "bold",
                        color: mainColor, fontSize: 16
                    }}>
                        {item?.Fname + item?.Lname}
                    </Text>
                </View>
                <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                    <Text style={{
                        fontWeight: "bold",
                        color: mainColor, fontSize: 16
                    }}>
                        {"Update Score :"}
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
                                placeholder="Score"
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
                flexDirection: "row", width: "90%",
                justifyContent: "space-between",
                // flex: 1,
                backgroundColor: "#fff", borderColor: 'red', borderWidth: 0,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5,
                marginTop: 10, borderRadius: 10,
                paddingHorizontal: 10, marginBottom: 30,
                alignSelf: "center"
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
            <View style={{
                height: 10,
                width: "100%",
                backgroundColor: backgroundColor
            }}>

            </View>
        </View>
    )
}

export default UpdateScoring