import React, { useState } from "react";
import { Controller, useForm } from 'react-hook-form';
import {
    Text,
    TouchableOpacity, View
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { useDispatch, useSelector } from 'react-redux';
import Delete from '../../Assets/Svgs/Delete.svg';
import EditIcon from '../../Assets/Svgs/EditIcon.svg';
import DropDownPicker from 'react-native-dropdown-picker';
import Usercircle from '../../Assets/Svgs/Usercircle.svg';


function AdminJobApplications(props) {

    const defaultValues = {
        Quantity: "",
        MarketValue: "",
    }

    const dispatch = useDispatch()

    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        mode: 'onChange',
        defaultValues: defaultValues,
    });
    const {
        mainColor,
        mainLighterColor,
        backgroundColor,
        textColor,
        textOffColor,
        textLightColor, buttoncolor,
        backgroundDarkerColor,
        greenColor,
        lightbluecolor,
        redcolor,
        borderColor,
        blackcolor
    } = useSelector(state => state.styles)
    const payStatus = [
        { value: "0", label: "All" },
        { value: "1", label: "React" },
        { value: "2", label: "Ios " },
        { value: "3", label: "Web " },
    ]
    const [enableNotificationIcon, setEnableNotificationIcon] = useState(false)
    // const [selectedChallange, setSelectedChallange] = useState('React');
    const [isJobPickerOpen, setIsJobPickerOpen] = useState(false)
    const data = [
        {
            jobName: 'React',
            applicantName: "Haleema",
            textcolor: mainColor,
            color: "#5FAF67",
            status: "Pending",
        },
        {
            jobName: 'Ios',
            applicantName: "Qammar",
            textcolor: greenColor,
            state: "California",
            color: "#5FAF67",
            status: "Approved",
        },
        {
            jobName: 'Web',
            applicantName: "Saad",
            textcolor: greenColor,
            state: "California",
            color: "#5FAF67",
            status: "Rejected",
        },


    ];
    function AllAssets() {
        // return data
        // .filter(obj => obj.jobName == isJobPickerOpen)
        // .map((item, key) => {

        return data.map((item, key) => {

            return (
                <>
                    <View style={{
                        backgroundColor: backgroundDarkerColor, shadowColor: "#000",
                        paddingHorizontal: 10, borderRadius: 10, shadowOffset: {
                            width: 0,
                            height: 2,
                        }, shadowOpacity: 0.25, shadowRadius: 3.84,
                        elevation: 5, width: "100%", flex: 1,
                        marginTop: 10
                    }}>

                        <View style={{
                            marginTop: 20,
                            marginBottom: 10,
                            flexDirection: "row",
                            paddingHorizontal: 10,
                        }}>
                            <Text style={{
                                color: borderColor,
                                fontSize: 14,
                                width: "40%",
                                fontWeight: "500"
                            }}>
                                {"Job Title"}
                            </Text>
                            <Text style={{
                                color: textLightColor
                                ,
                                fontSize: 14,
                                width: "60%",
                                fontWeight: "500"
                            }}>
                                {':  ' + item.jobName}
                            </Text>
                        </View>
                        <View style={{
                            // marginTop: 10,
                            marginBottom: 20,
                            flexDirection: "row",
                            paddingHorizontal: 10,
                        }}>
                            <Text style={{
                                color: borderColor,
                                fontSize: 14,
                                width: "40%",
                                fontWeight: "500"
                            }}>
                                {"Applicant Name"}
                            </Text>
                            <Text style={{
                                color: item.color,
                                fontSize: 14,
                                width: "60%",
                                fontWeight: "500"
                            }}>
                                {':  ' + item.applicantName}
                            </Text>
                        </View>
                    </View>

                </>
            )
        })
    }

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
                            Jobs Applications
                        </Text>
                        <View style={{
                            flexDirection: "row", justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <Usercircle color={'#fff'} height={30} width={30} style={{}} />
                        </View>


                    </View>
                </View>
                <ScrollView
                    contentContainerStyle={{
                        backgroundColor: backgroundColor,
                        paddingHorizontal: 10,
                        paddingBottom: 100
                    }}>
                    <View style={{
                        justifyContent: "space-between",
                        marginTop: 20, width: "95%", alignSelf: "center"
                    }}>
                        <View style={{
                            zIndex: 100,
                            alignSelf: "flex-end"
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
                                        placeholder="All"
                                        containerStyle={{
                                        }}
                                        style={{
                                            backgroundColor: mainColor,
                                            color: "#fff",
                                            // paddingLeft: 10,
                                            borderRadius: 10,
                                            minHeight: 40,
                                            borderColor: textOffColor,
                                            borderWidth: 1,
                                            width: 130,
                                            padding: 0
                                        }}
                                        textStyle={{ color: textColor }}
                                        labelProps={{
                                            style: { color: "#fff", fontWeight: "bold" }
                                        }}
                                        dropDownContainerStyle={{
                                            backgroundColor: "#FFFFFF",
                                            borderColor: textOffColor,
                                            borderWidth: 1,
                                            flex: 1,
                                            width: 130,
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
                                name="attendence"
                            />
                            {errors.attendence && <Text style={{ color: "red" }}>Select a attendence Status</Text>
                            }
                        </View>

                        <View style={{
                            backgroundColor: backgroundColor,
                            marginBottom: 10, marginTop: 10
                        }}>
                            {AllAssets(data)}
                        </View>
                    </View>
                </ScrollView>
                <View style={{ backgroundColor: backgroundColor, height: 15 }} />
            </View>
        </>
    );
};

export default AdminJobApplications;